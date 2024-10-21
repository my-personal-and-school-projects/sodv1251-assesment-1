import { shoppingCartCard } from "../templates/shopping-cart-data.js";
import { getData } from "../utils/api-utility.js";

const cartItemsContainer = document.querySelector(".cart-item-card-container");
const cartSubtotal = document.querySelector(".cart-subtotal");
const cartGST = document.querySelector(".cart-gst");
const cartTotal = document.querySelector(".cart-total");

const ORDERS_ENDPOINT = "/api/orders";
const ORDER_DETAILS_ENDPOINT = "/api/orders-details";

let parsedItems = [];
let subtotal = 0;
let itemQty = 0;
let grandTotal = 0;
let currentOrdersList = [];
let newOrder = "";

let ordersList = await getData(ORDERS_ENDPOINT);
let orderDetailsList = await getData(ORDER_DETAILS_ENDPOINT);

if (cartItemsContainer) {
  /**
   * Process items from the shopping cart, render them, and
   * update totals
   */
  function renderCartItems() {
    let itemsInCart = getOrderFromLocalStorage();
    subtotal = 0;

    gotoConfirmation(parsedItems);

    if (itemsInCart.length > 0) {
      cartItemsContainer.innerHTML = "";

      itemsInCart.forEach((cartItem) => {
        parsedItems.push(cartItem);
        cartItemsContainer.innerHTML += shoppingCartCard(cartItem);
        subtotal += parseFloat(cartItem.unitPrice * cartItem.qty); // Initial subtotal calculation
      });

      updateSubtotal();
      handleQuantityInput();
      handleRemoveItemButtons();
    } else {
      cartItemsContainer.innerHTML = `
      <h3 class="w-50 m-auto text-center text-danger py-5">Cart Empty</h3>
      `;
    }
  }

  renderCartItems();

  /**
   * Update subtotal, GST, and grand total
   */
  function updateSubtotal() {
    let subtotal = 0;
    let gst = 0;

    parsedItems.forEach((item, index) => {
      const inputQty = document.querySelectorAll(".input-qty")[index];
      const itemQty = parseInt(inputQty.value) || item.qty; // Use original qty if input is invalid
      const itemTotal = parseFloat(item.unitPrice) * itemQty;

      subtotal += itemTotal;
    });

    gst = subtotal * 0.05;
    grandTotal = subtotal + gst;

    // Update the DOM elements for the totals
    cartSubtotal.textContent = subtotal.toFixed(2);
    cartGST.textContent = gst.toFixed(2);
    cartTotal.textContent = grandTotal.toFixed(2);
  }

  /**
   * Handle input changes for quantity
   */
  function handleQuantityInput() {
    const inputQtyGroup = document.querySelectorAll(".input-qty");

    inputQtyGroup.forEach((input, index) => {
      const priceTag = input
        .closest(".cart-card-wrapper")
        .querySelector(".price-tag");
      const pricePerItem = parseFloat(priceTag.dataset.price);

      input.addEventListener("input", (event) => {
        event.preventDefault();

        itemQty = parseInt(event.target.value) || parsedItems[index].qty; // Default to original qty if invalid
        parsedItems[index].qty = itemQty;

        updateSubtotal();
      });
    });
  }

  /**
   * Remove items from the cart
   */
  function handleRemoveItemButtons() {
    const resetButtons = document.querySelectorAll(".btn-remove-item");

    if (resetButtons) {
      resetButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          event.preventDefault();
          const itemId = JSON.parse(event.target.dataset.item);
          removeItems(itemId);
        });
      });
    }
  }
}

/**
 * Get shopping cart items from localStorage
 * @returns array of parsed food items
 */
function getOrderFromLocalStorage() {
  let shoppingCartItems =
    JSON.parse(localStorage.getItem("shoppingCartItems")) || [];
  return shoppingCartItems;
}

/**
 * Go to otrder confirmation and reset the cart
 * @param {*} parsedItems
 */
function gotoConfirmation() {
  let itemsInCart = getOrderFromLocalStorage();
  const btnPlaceOrder = document.querySelector(".btn-place-order");

  if (itemsInCart.length === 0) {
    btnPlaceOrder.classList.add("disabled");
  } else {
    btnPlaceOrder.addEventListener("click", (event) => {
      event.preventDefault();
      let orderId = createOrder();
      creatOrderDetail(orderId);

      //Reset the cart
      parsedItems = [];
      localStorage.removeItem("shoppingCartItems");
      localStorage.removeItem("quantities");

      window.location.href = `store-order-confirmation?id=${orderId}`;
    });
  }
}

function removeItems(itemId) {
  let qtyToRemove = 0;
  if (itemId != null) {
    const shoppingCartItems = getOrderFromLocalStorage();

    let itemToRemove = shoppingCartItems.find((item) => item.id === itemId);

    if (itemToRemove) {
      qtyToRemove = parseFloat(itemToRemove.qty);
    }

    let updatedShoppingCartItems = shoppingCartItems.filter(
      (item) => item.id !== itemId
    );

    localStorage.setItem(
      "shoppingCartItems",
      JSON.stringify(updatedShoppingCartItems)
    );

    let totalQty = parseInt(localStorage.getItem("quantities")) || 0;
    let updatedQty = totalQty - qtyToRemove;
    localStorage.setItem("quantities", JSON.stringify(updatedQty));

    window.location.href = "store-cart";
  }
}

function createOrder() {
  //get the orders from the localStorage if any
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  //Get the current user if logged in
  let currentCustomer = JSON.parse(localStorage.getItem("logedCustomer")) || "";

  //get and format current date from system
  let currentDate = new Date().toJSON().slice(0, 10);

  let localOrders = [];

  if (orders.length > 0) {
    orders.forEach((order) => {
      currentOrdersList.push(order);
    });
  }

  if (ordersList.length > 0) {
    ordersList.forEach((order) => {
      currentOrdersList.push(order);
    });
  }

  newOrder = {
    id: (currentOrdersList.length += 1),
    customerId: currentCustomer.id,
    date: currentDate,
    totalPrice: grandTotal,
    paymentStatus: "pending",
    orderStatus: "in process",
  };

  localOrders.push(newOrder);

  //store the new order in the local storage
  localStorage.setItem("orders", JSON.stringify(localOrders));

  return newOrder.id;
}

function creatOrderDetail(orderId) {
  let shoppingCartItems = getOrderFromLocalStorage();
  let orderDetailsList = [];

  shoppingCartItems.forEach((item) => {
    let newOrderDetail = {
      id: orderDetailsList.length + 1,
      orderId: orderId,
      productId: item.id,
      itemQty: item.qty,
      unitPrice: item.unitPrice,
      discount: item.discount || 0,
      tax: item.unitPrice * item.qty * 0.05,
      totalPrice:
        item.unitPrice * item.qty +
        item.unitPrice * item.qty * 0.05 -
        (item.discount || 0),
      couponId: null,
    };
    orderDetailsList.push(newOrderDetail);
  });

  localStorage.setItem("orderDetails", JSON.stringify(orderDetailsList));
  console.log(orderDetailsList);
}

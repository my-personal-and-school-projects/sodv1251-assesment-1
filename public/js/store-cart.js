import { shoppingCartCard } from "../templates/shopping-cart-data.js";

const cartItemsContainer = document.querySelector(".cart-item-card-container");
const cartSubtotal = document.querySelector(".cart-subtotal");
const cartGST = document.querySelector(".cart-gst");
const cartTotal = document.querySelector(".cart-total");

let parsedItems = [];
let subtotal = 0;
let itemQty = 0;

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
    let grandTotal = 0;

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

      //Reset the cart
      parsedItems = [];
      localStorage.removeItem("shoppingCartItems");
      localStorage.removeItem("quantities");

      window.location.href = "store-order-confirmation";
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

/* TODO: pass the order total and customer name to the confirmation
 * will need to get the customer infor from the API and/or Most likely
 * will have to finish implementing the CRUD ops on the management
 * system, or maybe that is separate from the front store logic
 */

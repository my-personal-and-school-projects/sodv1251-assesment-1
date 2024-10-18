import { getData } from "../utils/api-utility.js";
import { productOrderCard } from "../templates/order-card-data.js";

//API products edndpoint
const PRODUCTS_ENDPOINT = "/api/products";

const productOrderContainer = document.querySelector(
  ".food-order-card-container"
);

//Variables
let oderedItemQty = 0;

let productsList = await getData(PRODUCTS_ENDPOINT);

if (productOrderContainer) {
  const UrlParams = new URLSearchParams(window.location.search);
  let id = parseInt(UrlParams.get("id"));

  let orderProduct = productsList.find((product) => product.id === id);
  productOrderContainer.innerHTML = productOrderCard(orderProduct);

  const productPrice = document.querySelector(".btn-add-to-cart span");
  const productQty = document.querySelector(".input-qty");
  const addToCartButton = document.querySelector(".btn-add-to-cart");

  let price = parseInt(orderProduct.unitPrice);

  //update the price based on product quantity
  productQty.addEventListener("input", (event) => {
    oderedItemQty = event.target.value;

    let totalPrice = price * oderedItemQty;

    productPrice.textContent = totalPrice;
    orderProduct.qty = parseInt(oderedItemQty);
  });

  /**
   * store the ordered items in the local storage on click
   */
  if (addToCartButton) {
    addToCartButton.addEventListener("click", () => {
      let shoppingCartItems = getOrderFromLocalStorage();

      let existingItem = shoppingCartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item exists, update its quantity
        existingItem.qty += orderProduct.qty;
        existingItem.unitPrice += orderProduct.unitPrice;
      } else {
        // If the item doesn't exist, add it to the cart
        shoppingCartItems.push(orderProduct);
      }

      // Save the updated cart back to localStorage
      localStorage.setItem(
        "shoppingCartItems",
        JSON.stringify(shoppingCartItems)
      );

      // Update item quantity display
      getItemsQuantity(orderProduct.qty);
    });
  }
}

/**
 * get and set the total quantity item in the cart
 * from the localstorage
 * @param {*} qty
 */
function getItemsQuantity(qty) {
  let totalQty = parseInt(localStorage.getItem("quantities")) || 0;
  totalQty += qty;
  localStorage.setItem("quantities", totalQty);
}

/**
 * get shopping cart items from the localStorage
 * @returns array of parsed food items
 */
function getOrderFromLocalStorage() {
  let shoppingCartItems =
    JSON.parse(localStorage.getItem("shoppingCartItems")) || [];

  console.log("Shopping cart", shoppingCartItems);

  return shoppingCartItems;
}

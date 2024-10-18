import { itemCardsRow } from "../templates/item-cards-data.js";
import { getData } from "../utils/api-utility.js";

//API products edndpoint
const PRODUCTS_ENDPOINT = "/api/products";

//Get elements from the DOM
const electronicsContainer = document.querySelector(
  ".row-products-electronics"
);
const appliancesContainer = document.querySelector(".row-products-appliances");
const furnitureContainer = document.querySelector(".row-products-furniture");
const suggestionsContainer = document.querySelector(".row-product-suggestions");

let productsList = await getData(PRODUCTS_ENDPOINT);

if (electronicsContainer) {
  //get the products under the category of electronics
  let electronics = findAndSortInventoryByCategory("Electronics");
  electronics.forEach((item) => {
    electronicsContainer.innerHTML += itemCardsRow(item);
  });
}

if (appliancesContainer) {
  //get the products under the category of homeAppliances
  let homeAppliances = findAndSortInventoryByCategory("Home Appliances");
  homeAppliances.forEach((item) => {
    appliancesContainer.innerHTML += itemCardsRow(item);
  });
}

if (furnitureContainer) {
  //get the products under the category of furniture
  let furniture = findAndSortInventoryByCategory("Furniture");
  furniture.forEach((item) => {
    furnitureContainer.innerHTML += itemCardsRow(item);
  });
}

if (suggestionsContainer) {
  productsList.forEach((product) => {
    suggestionsContainer.innerHTML += itemCardsRow(product);
  });
}

/**
 * Create an a list of sorted items by catgory
 * @param {*} category
 * @returns
 */
function findAndSortInventoryByCategory(category) {
  let inventoryItems = productsList.filter(
    (item) => item.category === category && item.IsDiscontinued === false
  );

  const sotedItems = inventoryItems.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return sotedItems;
}

/**
 * Update the items counter from the shopping cart
 */
function updateShoppingCartItemsCounter() {
  const totalQty = parseInt(localStorage.getItem("quantities")) || 0;
  const cartItemsCounterLabel = document.querySelector(".cart-items");
  cartItemsCounterLabel.textContent = totalQty;
}

updateShoppingCartItemsCounter();

import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import inventoryDataRow from "../templates/inventory-data.js";

//get inventory data
const INVENTORY_ENDPOINT = "/api/products-inventory";
const PRODUCTS_ENDPOINT = "/api/products";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Inventory");
  }
  async getHtml() {
    let sortedInventory = [];
    let rows = [];

    this.productsList = await getData(PRODUCTS_ENDPOINT);
    this.inventoryList = await getData(INVENTORY_ENDPOINT);

    if (this.productsList.length === 0 || this.inventoryList.length === 0) {
      return `<div>No inventory items found</div>`;
    }

    sortedInventory = this.productsList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    rows = this.inventoryList.map((inventoryItem) => {
      const matchingProduct = sortedInventory.find(
        (product) => product.id === inventoryItem.productId
      );
      return inventoryDataRow(inventoryItem, matchingProduct);
    });

    return `
    <div>
        <h2 class="pb-3">Inventory</h2>
        <a href="/products-crud" data-link class="btn btn-success btn-add">+ Add Products</a>
    </div>
    <div class="table-responsive py-4">
    <div class="table-wrapper">
      <table class="table table-striped table-sm">
          <thead class="border-bottom border-secondary">
          <tr>
              <th scope="col" class="text-center">Action</th>
              <th scope="col">ID</th>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Unit Price</th>            
              <th scope="col">Qty in Stock</th>
              <th scope="col">Inventory Value</th>
              <th scope="col">Reorder Lvl</th>
              <th scope="col">Qty in reorder</th>
              <th scope="col">Discontinued?</th>  
          </tr>
          </thead>
          <tbody>
          ${rows.join("")}
          </tbody>
      </table>
    </div>
    </div>
    `;
  }
}

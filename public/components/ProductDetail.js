import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";

const PRODUCTS_ENDPOINT = "/api/products";
const INVENTORY_ENDPOINT = "/api/products-inventory";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Product Details");
  }

  async getHtml() {
    const UrlParams = new URLSearchParams(window.location.search);
    this.id = parseInt(UrlParams.get("id"));

    this.productsList = await getData(PRODUCTS_ENDPOINT);

    if (this.productsList.length === 0) {
      return `<div>No product details found</div>`;
    }

    this.product =
      this.id > 0 ? this.productsList.find((prod) => prod.id === this.id) : "";

    return `
    <div>
      <h2>Product No. <span>${this.product.id}</span></h2>
      
    </div>
    <div class="row">
      <div class="col-6">
        <ul class="item-details">
          <li><strong>Brand:\t</strong><span>${this.product.name}</span></li>
          <li><strong>Description:</strong><span>${
            this.product.description
          }</span></li>
          <li><strong>Category: </strong><span>${
            this.product.category
          }</span></li>
          <li><strong>Price per unit:</strong> $<span>${
            this.product.unitPrice
          }</span></li>
          <li><strong>Vendor:</strong> $<strong></strong><span>${
            this.product.vendorId
          }</span></li>
          <li><strong>Qty in stock: </strong><span>Un madral</span></li>

          <li>${
            this.product.IsDiscontinued ? "Discontinued" : "Not Discontinued"
          }</li>
        </ul>
      </div>
      <div class="col-6">
        <img src="${this.product.img_url}" alt="product-image">
      </div>
    </div>
   
    `;
  }
}

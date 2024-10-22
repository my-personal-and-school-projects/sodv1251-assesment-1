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
      <h2><span>${this.product.name}</span></h2>

      <div class="container border py-5">
        <div class="row">
      <div class="col-3">
        <ul class="item-details d-flex flex-column gap-3">
          <li class="list-group-item">Brand:</li>
          <li class="list-group-item">Description:</li>
          <li class="list-group-item">Category:</li>
          <li class="list-group-item">Price per unit:</li>
          <li class="list-group-item">Vendor:</li>
          <li class="list-group-item">Status:</li>
        </ul>
      </div>
      <div class="col-4">
        <ul class="item-details ps-0 d-flex flex-column gap-3">
          <li class="list-group-item">
             <strong><span">${this.product.name}</span></strong>
          </li>
          <li class="list-group-item">
          <strong><span>${this.product.description}</span></strong>
          </li>
          <li class="list-group-item">
          <strong><span>${this.product.category}</span></strong>
          </li>
          <li class="list-group-item">
          <strong>$<span>${this.product.unitPrice}</span></strong>
          </li>
          <li class="list-group-item">
          <strong><span>${this.product.vendorId}</span></strong>
          </li>
          <li class="list-group-item">
          <strong><span>${
            this.product.IsDiscontinued ? "Discontinued" : "Not Discontinued"
          }</span></strong>
          </li>
        
        </ul>
      </div>
      <div class="col-4">
        <img src="${this.product.img_url}" alt="product-image">
      </div>
    </div>
      </div>
      
    </div>
    
   
    `;
  }
}

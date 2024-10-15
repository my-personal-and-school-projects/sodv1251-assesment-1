import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import productCrudForm from "../templates/forms/product-crud-form.js";

const PRDUCTS_ENDPOINT = "/api/prom";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Products CRUD");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <div class="pb-3">
        <h2>Edit Products</h2>
    </div>
    <div class="container border">            
            
    </div>
    `;
  }
}

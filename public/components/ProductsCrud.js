import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import productCrudForm from "../templates/forms/product-crud-form.js";

const PRDUCTS_ENDPOINT = "/api/products";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Products CRUD");
    this.state = "";
    this.product = "";
  }

  async getHtml() {
    //Get state and id from URL
    const UrlParams = new URLSearchParams(window.location.search);
    this.state = UrlParams.get("state");
    this.id = parseInt(UrlParams.get("id"));

    this.productsList = await getData(PRDUCTS_ENDPOINT);

    if (this.productsList.length === 0) {
      return `<div>No products found</div>`;
    }

    this.product =
      this.id > 0 ? this.productsList.find((prod) => prod.id === this.id) : "";

    return `
<div>
    <h2>${
      this.state === "new" ? "Add" : this.state === "delete" ? "Delete" : "Edit"
    } Products</h2>        
</div>
 <div class="container border">            
    ${productCrudForm(this.product)}
</div>
`;
  }

  renderHTML() {
    this.html = document.querySelector(".app").innerHTML = `
    <div>
        <h2>${
          this.state === "new"
            ? "Add"
            : this.state === "delete"
            ? "Delete"
            : "Edit"
        } Products</h2>        
    </div>
     <div class="container border">            
     ${productCrudForm(this.product)}
    </div>
    `;
  }

  manageState() {
    this.renderHTML();
    const btnSave = document.querySelector(".btn-save");
    btnSave.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
}

import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import customerCrudForm from "../templates/forms/customer-crud-form.js";

const CUSTOMERS_ENDPOINT = "/api/customers";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Customers CRUD");
    this.state = "";
    this.customer = "";
  }
  async getHtml() {
    //Get state and id from URL
    const UrlParams = new URLSearchParams(window.location.search);
    this.state = UrlParams.get("state");
    this.id = parseInt(UrlParams.get("id"));

    //get customers data
    this.customersList = await getData(CUSTOMERS_ENDPOINT);

    if (this.customersList.length === 0) {
      return `<div>No customers found</div>`;
    }

    this.customer =
      this.id > 0
        ? this.customersList.find((element) => element.id === this.id)
        : "";

    return this.manageState();
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
        } Customers</h2>        
    </div>
     <div class="container border">            
        ${customerCrudForm(this.customer)}
    </div>
    `;
  }

  manageState() {
    this.renderHTML();

    //get necessary componenents from the DOM
    const form = document.querySelector(".crud-form");
    const btnSave = document.querySelector(".btn-save");
    const btnClear = document.querySelector(".btn-clear");
    const btnDelete = document.querySelector(".btn-delete");
    const btnSaveContainer = document.querySelector(".btn-save-container");
    const btnDeleteContainer = document.querySelector(".btn-delete-container");
    const radioButtons = document.querySelector(".radio-buttons-group");
    const btnClearContainer = document.querySelector(".btn-clear-container");
    const inputs = document.querySelectorAll(".form-control");
    const selectCity = document.querySelector("#city");

    switch (this.state) {
      case "new":
        //hide unecessary elements
        btnDeleteContainer.setAttribute("style", "display: none;");
        radioButtons.setAttribute("style", "display: none;");
        break;

      case "edit":
        btnDeleteContainer.setAttribute("style", "display: none;");
        radioButtons.setAttribute("style", "display: none;");
        btnClearContainer.setAttribute("style", "display: none;");
        codeInput.disabled = true;
        break;
      case "delete":
        radioButtons.classList.add("d-flex");
        btnSaveContainer.setAttribute("style", "display: none;");
        btnClearContainer.setAttribute("style", "display: none;");
        inputs.forEach((input) => {
          input.disabled = true;
        });
        selectCity.disabled = true;
        break;
    }
  }
}

import AbstractView from "./AbstractView.js";
import promoCrudForm from "../templates/forms/promo-crud-form.js";
import { getData } from "../utils/api-utility.js";

const PROMOTIONS_ENDPOINT = "/api/promotions";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Promotions CRUD");
    this.state = "";
    this.promo = "";
  }
  async getHtml() {
    //Get state and id from URL
    const UrlParams = new URLSearchParams(window.location.search);
    this.state = UrlParams.get("state");
    this.id = parseInt(UrlParams.get("id"));

    //get promotions data
    this.promotionsList = await getData(PROMOTIONS_ENDPOINT);

    if (this.promotionsList.length === 0) {
      return `<div>No promos found</div>`;
    }

    this.promo =
      this.id > 0
        ? this.promotionsList.find((promotion) => promotion.id === this.id)
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
        } Promotions</h2>        
    </div>
     <div class="container border">            
        ${promoCrudForm(this.promo)}
    </div>
    `;
  }

  /**
   * TODO: need to add logic for crud operations
   */
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
    const codeInput = document.querySelector("#code");

    //add eventListeners
    btnSave.addEventListener("click", (event) => {
      event.preventDefault();
    });

    btnClear.addEventListener("click", (event) => {
      event.preventDefault();
    });

    btnDelete.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(`Promo ${this.promo.code} has been discontinued`);
    });

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
        break;
    }
  }
}

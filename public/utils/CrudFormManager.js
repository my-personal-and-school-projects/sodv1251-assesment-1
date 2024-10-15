class CrudFormManager {
  constructor(initialState = "new") {
    this.form = document.querySelector(".crud-form");
    this.btnSave = document.querySelector(".btn-save");
    this.btnClear = document.querySelector(".btn.clear");
    this.btnDelete = document.querySelector(".btn.delete");
    this.btnDeleteContainer = document.querySelector(".btn-delete-container");
    this.radioButtons = document.querySelector(".radio-buttons-group");
    this.isNew = initialState = "new";

    //set initial state
    this.setState(initialState, initialData);

    this.setupEventListeners();
  }
  setupEventListeners() {
    this.btnSave.addEventListener("click", () => this.handleAddItem());
    this.btnDelete.addEventListener("click", () => this.handleDeleteItem());
    this.btnClear.addEventListener("click", () => this.clearForm());

    //setup form in edit mode
    this.form.addEventListener("edit-mode", (event) => {
      event.preventDefault();
      this.handleEditMode(event.detail.data);
    });

    //setup form in delete mode
    this.form.addEventListener("delete-mode", (event) => {
      event.preventDefault();
      this.handleDeleteMode();
    });
  }

  //set the form state
  setState(state, data) {
    this.clearForm();
    this.isNew = state === "new";

    switch (state) {
      case "new":
        this.toggleDeactivateComponents(false);
        break;

      case "edit":
        this.handleEditMode(data);
        break;

      case "delete":
        this.handleDeleteMode(data);
        break;
    }
  }

  handleAddItem() {
    this.setState("new");
  }

  handleEditMode(data) {
    this.isNew = false;
    this.populateForm(data);
  }

  toggleDeactivateAndRadios(show) {
    this.toggleDeactivateComponents.style.display = show ? "block" : "none";
    this.radioButtons.style.display = show ? "block" : "none";
  }
}

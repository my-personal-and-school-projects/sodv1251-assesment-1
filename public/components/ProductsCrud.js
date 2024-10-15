import AbstractView from "./AbstractView.js";

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
        <form class="crud-form">
            <fieldset class="py-4">
                <legend>Product Details</legend>
                <div class="row row-cols-2 py-3">
                    <div class="col-6 d-flex flex-column gap-3">
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="name" class="col-3 form-label">Name:</label>
                            <input class="form-control" id="name"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="description" class="col-3 form-label">Description:</label>
                            <input type="text" class="form-control" id="description"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="category" class="col-3"> Category:</label>
                            <select class="form-select" id="category">
                                <option selected value=""> Select a Category</option>                            
                            </select>
                        </div>                    
                    </div>

                    <div class="col-6 d-flex flex-column gap-3">
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="price" class="col-3 form-label">Price:</label>
                            <input type="text" class="form-control" id="price"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="vendor" class="col-3 form-label">Vendor Id:</label>
                            <input type="text" class="form-control" id="vendor"/>
                        </div>
                        <div class="radio-buttons-group form-group row-cols-2 d-flex align-items-center py-2">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="discontinued" value="option1" checked>
                                <label class="form-check-label" for="discontinued">
                                    Discontinued
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="not-discontinued" value="option2">
                                <label class="form-check-label" for="not-discontinued">
                                    Not Discontinued
                                </label>
                            </div>    
                        </div>  

                    </div>                
                    
                </div>
                 <div class="menu-buttons pt-4 m-auto d-flex justify-content-evenly gap-4">                      
                    <div>
                        <button class="btn-save btn btn-outline-success">Save</button>
                    </div>
                    <div class="btn-delete-container">
                        <button class="btn-delete btn btn-danger">Deactivate Product</button>
                    </div>
                    <div>
                        <a href="/inventory" data-link class="btn btn-outline-danger">Cancel</a>
                    </div>
                    <div>
                        <button class="btn-clear btn btn-outline-primary">Clear</button>
                    </div>
                </div>
            </fieldset>
        </form>      
    </div>
    `;
  }
}

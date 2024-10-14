import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Promotions CRUD");
  }
  async getHtml() {
    return `
    <div>
        <h2>Edit Promotions</h2>        
    </div>
     <div class="container border">            
        <form class="crud-form">
            <fieldset class="py-4">
                <legend>Promo Details</legend>
                <div class="row row-cols-2">
                    <div class="col-6 d-flex flex-column gap-3">
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="code" class="col-3 form-label">Code:</label>
                            <input class="form-control" id="code"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="discount" class="col-3 form-label">Discount %:</label>
                            <input type="text" class="form-control" id="discount"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="city" class="col-3">City:</label>
                            <select class="form-select" id="city">
                                <option selected value=""> Select a city</option>                            
                            </select>
                        </div>                    
                    </div>                            
                    
                </div>
                 <div class="menu-buttons pt-4 m-auto d-flex justify-content-evenly gap-4">                      
                    <div>
                        <button class="btn btn-outline-success">Save</button>
                    </div>
                    <div>
                        <button class="btn btn-danger">Deactivate Promo</button>
                    </div>
                    <div>
                        <a href="/promotions" data-link class="btn btn-outline-danger">Cancel</a>
                    </div>
                    <div>
                        <button class="btn btn-outline-primary">Clear</button>
                    </div>
                </div>
            </fieldset>
        </form>      
    </div>
    `;
  }
}

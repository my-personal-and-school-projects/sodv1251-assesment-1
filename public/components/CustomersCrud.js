import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Customers CRUD");
  }
  async getHtml() {
    return `
    <div>
        <h2>Edit Customers</h2>        
    </div>
     <div class="container border">            
        <form class="crud-form">
            <fieldset class="py-4">
                <legend>Customer Details</legend>
                <div class="row row-cols-2">
                    <div class="col-6 d-flex flex-column gap-3">
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="name" class="col-3 form-label">Name:</label>
                            <input class="form-control" id="name"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="address" class="col-3 form-label">Address:</label>
                            <input type="text" class="form-control" id="address"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="city" class="col-3">City:</label>
                            <select class="form-select" id="city">
                                <option selected value=""> Select a city</option>                            
                            </select>
                        </div>                    
                    </div>

                    <div class="col-6 d-flex flex-column gap-3">
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="email" class="col-3 form-label">Email:</label>
                            <input type="email" class="form-control" id="email"/>
                        </div>
                        <div class="form-group row-cols-2 d-flex align-items-center">
                            <label for="phone" class="col-3 form-label">Phone:</label>
                            <input type="text" class="form-control" id="phone"/>
                        </div>
                        <div class="radios-group form-group row-cols-2 d-flex align-items-center">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="is-active" value="option1" checked>
                                <label class="form-check-label" for="is-active">
                                    Active
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="not-active" value="option2">
                                <label class="form-check-label" for="not-active">
                                    Inactive
                                </label>
                            </div>    
                        </div>  
                    </div>                
                    
                </div>
                 <div class="menu-buttons pt-4 m-auto d-flex justify-content-evenly gap-4">                      
                    <div>
                        <button class="btn btn-outline-success">Save</button>
                    </div>
                    <div>
                        <button class="btn btn-danger">Deactivate Customer</button>
                    </div>
                    <div>
                        <a href="/customers" data-link class="btn btn-outline-danger">Cancel</a>
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

const promoCrudForm = (promo) => `
<form class="crud-form">
    <fieldset class="py-4">
        <legend>Promo Details</legend>
        <div class="row row-cols-2 py-3">
            <div class="col-6 d-flex flex-column gap-3">
                <div class="form-group row-cols-2 d-flex align-items-center">
                    <label for="code" class="col-3 form-label">Promo Code:</label>
                    <input class="form-control" id="code" value="${
                      promo.code || ""
                    }"/>
                </div>
                <div class="form-group row-cols-2 d-flex align-items-center">
                    <label for="discount" class="col-3 form-label">Discount %:</label>
                    <input type="text" class="form-control" id="discount" value="${
                      promo.discountPercentage || ""
                    }"/>
                </div>                           
                <div class="radio-buttons-group form-group row-cols-2 align-items-center py-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="discontinued" value="option1" ${
                          promo.isDiscontinued === false ? "checked" : ""
                        }>
                        <label class="form-check-label" for="discontinued" >
                            Discontinued
                        </label>
                    </div>
                    <div class="form-check ">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="not-discontinued" value="option2" ${
                          promo.isDiscontinued === false ? "checked" : ""
                        }>
                        <label class="form-check-label" for="not-discontinued">
                            Not Discontinued
                        </label>
                    </div>    
                </div>                                       
            </div>                      
        </div>
        <div class="menu-buttons pt-4 m-auto d-flex justify-content-evenly gap-4">                      
            <div class="btn-save-container">
                <button class="btn btn-outline-success btn-save">Save</button>
            </div>
            <div class="btn-delete-container">
                <button class="btn btn-danger btn-delete">Deactivate Promo</button>
            </div>
            <div>
                <a href="/promotions" data-link class="btn btn-outline-danger">Cancel</a>
            </div>
            <div class="btn-clear-container">
                <button class="btn btn-outline-primary btn-clear">Clear</button>
            </div>
        </div>
    </fieldset>
</form>      
`;

export default promoCrudForm;

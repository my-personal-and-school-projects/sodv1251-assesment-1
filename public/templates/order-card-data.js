export const productOrderCard = (product) => `
<div class="col-6 food-order-card h-auto p-0 border border-secondary-subtle">
    <div class="p-0">
        <div class="order-card-image-container">
            <img src="${product.img_url}" alt="food image" />
        </div>
        <div class="w-80 m-auto d-flex justify-content-center gap-3 py-4">
            <input
                class="input-qty form-control w-25"
                type="number"
                value="${product.qty}"
            />
            <a
                href="/e-commerce"
                class="btn btn-info px-5 btn-add-to-cart"
                data-item=""
            >
                Add to Cart - $<span>${product.unitPrice || "0.00"}</span>
            </a>
        </div>
    </div>
</div>
<div class="col-6 order-card-description p-4">
    <div>
        <ul class="p-0">
            <li class="list-group-item">
                <a href="/e-commerce" class="">Cancel</a>                
            </li>
        </ul>
    </div>
    <h2>${product.name}</h2>
    <p><span>$${product.unitPrice}</span></p>
    <div class="reviews">
        <ul class="d-flex gap-2 style-none">
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star-fill"></i></li>
            <li><i class="bi bi-star"></i></li>
            <li><i class="bi bi-star"></i></li>
            <li class="mx-3">3.0 (740 Reviews)</li>
        </ul>
    </div> 
    <p>${product.description}</p>    

    <div class="services">
        <p class="text-white">Services:</p>
        <div class="row row-cols-3 w-100 m-auto p-0">            
            <div class="col-4 px-0 d-flex gap-3 align-items-center">     
                <i class="bi bi-truck"></i>
                <div>
                    <h5>Free<br/>Shiping</h5>
                    <p class="pt-2">Ships Same Day</p>
                </div>
            </div>
            <div class="col col-4 d-flex gap-3 align-items-center">     
                <i class="bi bi-arrow-return-left"></i>
                <div>
                    <h5>Easy<br/>Returns</h5>
                    <p class="pt-2">Free Returns</p>
                </div>
            </div>
            <div class="col-4 d-flex gap-3 align-items-center">     
                <i class="bi bi-tag"></i>          
                <div class="col-6">
                    <h5>Lowest<br/>Price</h5>
                    <p class="pt-2">Guarantee</p>
                </div>               
            </div>
        </div>
    </div>
</div>
`;

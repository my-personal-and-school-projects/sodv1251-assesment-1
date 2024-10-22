export const itemCardsRow = (product) => `
<div class="col-lg-3 col-sm-6 col-md-4">
    <div class="card suggestions-card">
        <div class="card-image-container">
        <img src="${product.img_url}" alt="product image" class="img-fluid" />
        </div>
        <div class="card-description">
        <div class="d-flex justify-content-between py-2 description-container">
            <p><strong>${product.name}</strong></p>
            <p><span>$ ${product.unitPrice}</span></p>
        </div>
        <a href="/store-order?id=${product.id}" class="order-item text-decoration-none text-primary">
            Order this item
        </a>
        </div>
    </div>
</div>
`;

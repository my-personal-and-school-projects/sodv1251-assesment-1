export const shoppingCartCard = (product) => `

<div class="row cart-card-wrapper border-bottom border-secondary-subtle">
    <div class="cart-item-card col-6">
    <p><strong>${product.name}</strong></p>
    <p class="py-3">${product.description}</p>
    <div>
        <button data-item="${product.id}" class="btn-remove-item">Remove</button>
    </div>
    </div>
    <div class="col-6 d-flex flex-column align-items-end">
    <p class="py-3">$<span class="price-tag" data-price="${product.price}">${product.unitPrice}</span></p>
    <input
        class="input-qty form-control w-50"
        type="number"
        value="${product.qty}"
    />
    </div>
</div>
`;

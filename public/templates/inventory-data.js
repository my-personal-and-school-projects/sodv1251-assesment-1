const inventoryDataRow = (inventory, product) => `
<tr>
     <td class="px-0">
        <div class="d-flex justify-content-center gap-3">
        <button class="btn btn-view">
            <i class="bi bi-binoculars"></i>
        </button>
        <button class="btn btn-edit">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="btn btn-delete">
            <i class="bi bi-trash"></i>
        </button>
        </div>
    </td>
    <td>${inventory.id}</td>
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td>$${product.unitPrice}</td>
    <td>${inventory.quantityInStock}</td>    
    <td>$${inventory.quantityInStock * product.unitPrice}</td>
    <td>${inventory.reorderLevel}</td>
    <td>${inventory.quantityInReorder}</td>
    <td>${product.IsDiscontinued ? "Yes" : "No"}</td>
</tr>    
`;

export default inventoryDataRow;

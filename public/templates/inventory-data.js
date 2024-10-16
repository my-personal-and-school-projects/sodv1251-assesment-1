const inventoryDataRow = (inventory, product) => `
<tr>
     <td class="px-0">
        <div class="d-flex justify-content-center gap-3">
        <a href="/product-detail?id=${
          product.id
        }" class="btn btn-view" data-link>
            <i class="bi bi-binoculars"></i>
        </a>
     <a class="btn btn-edit" data-link href="/products-crud?state=edit&id=${
       product.id
     }"> <i data-link class="bi bi-pencil"></i>
        </a>
    <a href="/products-crud?state=delete&id=${
      product.id
    }" class="btn btn-delete" data-link >
        <i data-link class="bi bi-trash"></i>       
     </a> 
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

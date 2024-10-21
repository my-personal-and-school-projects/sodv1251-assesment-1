const ordersDataRow = (order, name) => `
<tr>
     <td class="px-0">
        <div class="d-flex justify-content-center gap-3">       
        <a href="/orders-details?id=${order.id}" class="btn btn-view" data-link>
            <i class="bi bi-binoculars"></i>
        </a>
        <a href="/orders-crud?state=edit&id=${order.id}" class="btn btn-edit" data-link >
            <i class="bi bi-pencil"></i>
        </a>
        <a href="/orders-crud?state=delete&id=${order.id}"class="btn btn-delete" data-link >
            <i class="bi bi-trash"></i>
        </a>
        </div>
    </td>
    <td>${order.id}</td>
    <td>${name}</td>
    <td>${order.date}</td>    
    <td>$${order.totalPrice}</td>    
    <td>${order.paymentStatus}</td>    
    <td>${order.orderStatus}</td>   
</tr>    
`;

export default ordersDataRow;

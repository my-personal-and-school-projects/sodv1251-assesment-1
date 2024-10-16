const ordersDetailsDataRow = (orderDetails, product, coupon) => `
<tr>
     <td class="px-0">
        <div class="d-flex justify-content-center gap-3">       
        <a href="/order-details" class="btn btn-view" data-link>
            <i class="bi bi-binoculars"></i>
        </a>
        <a href="/orders-crud?state=edit&id=${
          orderDetails.id
        }" class="btn btn-edit" data-link >
            <i class="bi bi-pencil"></i>
        </a>
        <a href="/orders-crud?state=delete&id=${
          orderDetails.id
        }"class="btn btn-delete" data-link >
            <i class="bi bi-trash"></i>
        </a>
        </div>
    </td>
    <td>${orderDetails.orderId}</td>
    <td>${product.name}</td>
    <td>${orderDetails.itemQty}</td>    
    <td>$${orderDetails.unitPrice}</td>    
    <td>$${orderDetails.discount}</td>    
    <td>$${orderDetails.tax}</td>   
    <td>$${orderDetails.totalPrice}</td>
    <td>${orderDetails.couponId === null ? "N/A" : coupon.code}</td>
</tr>    
`;

export default ordersDetailsDataRow;

const customerDataRow = (customer) => `
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
    <td>${customer.name}</td>
    <td>${customer.address}</td>
    <td>${customer.city}</td>
    <td>${customer.email}</td>
    <td>${customer.phone}</td>
    <td>${customer.status}</td>
</tr>    
`;
export default customerDataRow;

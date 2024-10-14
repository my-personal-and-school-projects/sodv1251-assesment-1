const promotionsDataRow = (promo) => `
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
    <td>${promo.code}</td>
    <td>${promo.discountPercentage}</td>
    <td>${promo.isDiscontinued ? "Yes" : "No"}</td>    
</tr>    
`;

export default promotionsDataRow;

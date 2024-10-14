import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import promotionsDataRow from "../templates/promotions-data.js";

const PROMOTIONS_ENDPOINT = "/api/promotions";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Promotions");
  }

  async getHtml() {
    this.promotionsList = await getData(PROMOTIONS_ENDPOINT);

    if (this.promotionsList.length === 0) {
      return `<div>No promos found</div>`;
    }
    const rows = this.promotionsList
      .map((promo) => promotionsDataRow(promo))
      .join("");

    return `
    <div>
        <h2 class="pb-3">Current Promotions</h2>
        <button class="btn btn-success">+ Add Promos</button>
    </div>
    <div class="table-responsive py-4">
    <table class="table table-striped table-sm">
        <thead class="border-bottom border-secondary">
        <tr>
            <th scope="col" class="text-center">Action</th>
            <th scope="col">Code</th>
            <th scope="col">Discount %</th>
            <th scope="col">Discontinued?</th>            
        </tr>
        </thead>
        <tbody>
        ${rows}
        </tbody>
    </table>
    </div>
    `;
  }
}

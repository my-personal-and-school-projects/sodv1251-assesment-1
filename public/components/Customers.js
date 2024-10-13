import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import customerDataRow from "../templates/customer-data.js";

//Get the customers data
const CUSTOMERS_ENDPOINT = "/api/customers";

const customersList = [];

console.log(customersList.length);

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Customers");
  }

  /* TODO: find a way to map the data rows */
  async getHtml() {
    this.customersList = await getData(CUSTOMERS_ENDPOINT);

    if (this.customersList.length === 0) {
      return `<div>No customers found</div>`;
    }
    const rows = this.customersList
      .map((customer) => customerDataRow(customer))
      .join("");

    return `
    <div>
        <h2>Customers</h2>
        <p><strong>Welcome Manolin</strong>. This is a temporary Customers view</p>
        <button class="btn btn-success">+ Add Customers</button>
    </div>
    <div class="table-responsive py-4">
    <table class="table table-striped table-sm">
        <thead class="border-bottom border-secondary">
        <tr>
            <th scope="col" class="text-center">Action</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Email</th>            
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
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

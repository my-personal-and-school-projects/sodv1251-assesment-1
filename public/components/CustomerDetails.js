import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import ordersDataRow from "../templates/orders-data.js";

//Get the customers data
const CUSTOMERS_ENDPOINT = "/api/customers";
const ORDERS_ENDPOINT = "/api/orders";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Customer Details");
    this.customer = "";
    this.allCustomers = [];
    this.allOrders = [];
  }

  async getHtml() {
    const UrlParams = new URLSearchParams(window.location.search);
    this.id = parseInt(UrlParams.get("id"));

    this.customersList = await getData(CUSTOMERS_ENDPOINT);
    this.ordersList = await getData(ORDERS_ENDPOINT);

    //Get new customers from the localStorage
    this.localCustomersList =
      JSON.parse(localStorage.getItem("customers")) || [];

    //get new orders from he localStorage
    this.localOrdersList = JSON.parse(localStorage.getItem("orders")) || [];

    //Consolidate customer lists
    this.customersList.forEach((customer) => {
      this.allCustomers.push(customer);
    });

    this.localCustomersList.forEach((customer) => {
      this.allCustomers.push(customer);
    });

    //consolidate orders Lists

    if (this.allCustomers.length === 0 || this.ordersList.length === 0) {
      return `<div>No orders found</div>`;
    }

    this.customer =
      this.id > 0 ? this.allCustomers.find((item) => item.id === this.id) : "";

    const orders = this.ordersList.filter(
      (order) => order.customerId === this.customer.id
    );

    const rows = orders
      .map((order) => {
        order.customerId === this.customer.id;
        return ordersDataRow(order, this.customer);
      })
      .join("");

    return `
    <div class="pb-3">
        <h2 class="pb-3">Customer Details</h2>
        <a href="/customers" data-link class="btn btn-outline-info">Back to Customers</a>
    </div>
    <div>
      <ul class="item-details">
        <li><h3>${this.customer.name}</h3></li>
        <li>${this.customer.address}</li>
        <li>${this.customer.city}</li>
        <li>${this.customer.email}</li>
        <li>${this.customer.phone}</li>
        <li>${this.customer.status}</li>
      </ul>
    </div>

    <div class="table-responsive py-4 border-top">
      <table class="table table-striped table-sm">
          <thead class="border-bottom border-secondary">
          <tr>
              <th scope="col" class="text-center">Action</th>
              <th scope="col">Order ID</th>
              <th scope="col">Customer</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Order Status</th>
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

/**
 * TODO: need to get the recently created orderdetails
 *  from the local storage to map them
 */

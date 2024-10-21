import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import ordersDataRow from "../templates/orders-data.js";

const PRODUCTS_ENDPOINT = "/api/products";
const CUSTOMERS_ENDPOINT = "/api/customers";
const ORDERS_ENDPOINT = "/api/orders";
const ORDER_DETAILS_ENDPOINT = "/api/orders-details";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Orders");
    this.updatedOrdersList = [];
    this.updatedCustomersList = [];
  }
  async getHtml() {
    // this.productsList = await getData(PRODUCTS_ENDPOINT);
    this.customersList = await getData(CUSTOMERS_ENDPOINT);
    this.ordersList = await getData(ORDERS_ENDPOINT);

    //get the current orders from the localStorage
    this.localOrders = JSON.parse(localStorage.getItem("orders")) || [];
    //get any new customers
    this.newCustomers = JSON.parse(localStorage.getItem("customers")) || [];

    if (this.customersList.length === 0 || this.ordersList.length === 0) {
      return `<div>No orders found</div>`;
    }
    this.customersList.forEach((customer) => {
      this.updatedCustomersList.push(customer);
    });

    if (this.newCustomers.length > 0) {
      this.newCustomers.forEach((customer) => {
        this.updatedCustomersList.push(customer);
      });
    }

    this.ordersList.forEach((order) => {
      this.updatedOrdersList.push(order);
    });

    if (this.localOrders.length > 0) {
      this.localOrders.forEach((order) => {
        this.updatedOrdersList.push(order);
      });
    }

    console.log(this.updatedCustomersList);

    console.log(this.updatedOrdersList);

    const rows = this.updatedOrdersList
      .map((order) => {
        const matchingCustomer = this.updatedCustomersList.find(
          (customer) => parseInt(customer.id) === parseInt(order.customerId)
        );
        console.log(order);

        return ordersDataRow(order, matchingCustomer.name);
      })
      .join("");

    return `
    <div>
        <h2 class="pb-3">Orders</h2>
        <a href="/Orders-crud?state=new" data-link class="btn btn-success">+ Add Orders</a>
    </div>
    <div class="table-responsive py-4">
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

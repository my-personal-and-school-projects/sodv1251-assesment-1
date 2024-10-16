import AbstractView from "./AbstractView.js";
import { getData } from "../utils/api-utility.js";
import ordersDetailsDataRow from "../templates/orderDetails-data.js";

const PRODUCTS_ENDPOINT = "/api/products";
const ORDER_DETAILS_ENDPOINT = "/api/orders-details";
const PROMOTIONS_ENDPOINT = "/api/promotions";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Order Details");
  }

  async getHtml() {
    const UrlParams = new URLSearchParams(window.location.search);
    this.id = parseInt(UrlParams.get("id"));

    this.productsList = await getData(PRODUCTS_ENDPOINT);
    this.ordersDetailsList = await getData(ORDER_DETAILS_ENDPOINT);
    this.promotionsList = await getData(PROMOTIONS_ENDPOINT);

    if (
      this.ordersDetailsList.length === 0 ||
      this.productsList.length === 0 ||
      this.promotionsList.lenght === 0
    ) {
      return `<div>No details found</div>`;
    }

    this.orders =
      this.id > 0
        ? this.ordersDetailsList.filter((item) => item.orderId === this.id)
        : "";

    this.orders.forEach((element) => {
      console.log(element);
    });

    const rows = this.orders
      .map((orderDetail) => {
        const matchingProduct = this.productsList.find(
          (product) => product.id === orderDetail.productId
        );
        const matchingPromotion = this.promotionsList.find(
          (promo) => promo.id === orderDetail.couponId
        );
        return ordersDetailsDataRow(
          orderDetail,
          matchingProduct,
          matchingPromotion
        );
      })
      .join("");

    return `
    <div>
        <h2 class="pb-3">Order Details</h2>
        <div>
          <a href="/Orders-crud?state=new" data-link class="btn btn-success">+ Add Orders</a>
          <a href="/orders" data-link class="btn btn-outline-info">Back to orders Orders</a>
        </div>
    </div>
    <div class="table-responsive py-4">
    <table class="table table-striped table-sm">
        <thead class="border-bottom border-secondary">
        <tr>
            <th scope="col" class="text-center">Action</th>
            <th scope="col">Order ID</th>
            <th scope="col">Item</th>
            <th scope="col">Item Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Tax</th>
            <th scope="col">Total</th>
            <th scope="col">Coupon</th>
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

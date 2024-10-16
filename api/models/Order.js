class Order {
  constructor(id, customerId, date, totalPrice, paymentStatus, orderStatus) {
    this.id = id;
    this.customerId = customerId;
    this.date = date;
    this.totalPrice = totalPrice;
    this.paymentStatus = paymentStatus;
    this.orderStatus = orderStatus;
  }
}
module.exports = Order;

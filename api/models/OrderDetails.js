class OrderDetails {
  constructor(
    id,
    orderId,
    productId,
    itemQty,
    unitPrice,
    dicount,
    tax,
    totalPrice,
    couponId
  ) {
    this.id = id;
    this.orderId = orderId;
    this.productId = productId;
    this.itemQty = itemQty;
    this.unitPrice = unitPrice;
    this.discount = dicount;
    this.tax = tax;
    this.totalPrice = totalPrice;
    this.couponId = couponId;
  }
}

module.exports = OrderDetails;

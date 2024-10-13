class Customer {
  constructor(id, name, address, city, email, phone, status = "active") {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.status = status;
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  getTotalOrders() {
    return this.orders.length;
  }
}
module.exports = Customer;

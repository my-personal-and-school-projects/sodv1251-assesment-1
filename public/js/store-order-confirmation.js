const confirmationEmailLabel = document.querySelector("#confirmation-email");
const orderNumberLabel = document.querySelector("#order-number");
const orderTotalLabel = document.querySelector("#order-total");
const orderDateLabel = document.querySelector("#order-date");
const customerNameLabel = document.querySelector("#customer-name");
const customerAddressLabel = document.querySelectorAll(".customer-address");
const customerCityLabel = document.querySelectorAll(".customer-city");

//get the orderdetails from localStorage
let orderDetailsList = JSON.parse(localStorage.getItem("orderDetails")) || [];
//get the orders from the localStorage if any
let orders = JSON.parse(localStorage.getItem("orders")) || [];

//Get the current user if logged in
let currentCustomer = JSON.parse(localStorage.getItem("logedCustomer")) || "";

//get the current order Id
const UrlParams = new URLSearchParams(window.location.search);
let id = parseInt(UrlParams.get("id"));

(function onInit() {
  displayOrderDetails();
})();

function displayOrderDetails() {
  let currentOrder = orders.find((order) => order.id === parseInt(id));

  //Display currernt order details
  confirmationEmailLabel.textContent = currentCustomer.email;
  orderNumberLabel.textContent = parseInt(id);
  orderDateLabel.textContent = currentOrder.date;
  orderTotalLabel.textContent = currentOrder.totalPrice;
  customerNameLabel.textContent = currentCustomer.name;
  customerAddressLabel.forEach((label) => {
    label.textContent = currentCustomer.address;
  });
  customerCityLabel.forEach((label) => {
    label.textContent = currentCustomer.city;
  });
}

function calculateOrderTotal() {
  let orderTotal = 0

  orderDetailsList.forEach((detail) => {
    orderTotal += detail.
    
  })
  //
}

/**
 * TODO: need to calculate order details total and pass it the order and display it
 */

const confirmationEmailLabel = document.querySelector("#confirmation-email");

//get the orderdetails from localStorage
let orderDetailsList = JSON.parse(localStorage.getItem("orderDetails")) || [];

//Get the current user if logged in
let currentCustomer = JSON.parse(localStorage.getItem("logedCustomer")) || "";

console.log(currentCustomer.email);

(function onInit() {
  if (confirmationEmailLabel) {
    confirmationEmailLabel.textContent = currentCustomer.email;
  }
})();

# README

## sodv1251-assesment-1

### Overview

This project is a simple e-commerce web application that simulates an online store, allowing users to view products, register as customers, and manage orders. The backend of the application models data using JavaScript classes, while the frontend uses arrays and local storage to simulate CRUD operations (Create, Read, Update, Delete) for product, customer, and order management.
Backend Structure

The backend models customers and orders using JavaScript classes to represent the entities. This helps in organizing the data and making it easier to manage customer information and their associated orders. The key class in this project is the Customer class, which stores customer details and provides methods to add and retrieve order information.
Backend Data Models

1. Customer Class:

The Customer class models a customer with properties such as id, name, address, and orders. It also includes methods to manage customer orders.

```javascript
class Customer {
  constructor(
    id,
    name,
    address,
    city,
    email,
    phone,
    status = "active",
    username,
    password
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.status = status;
    this.username = username;
    this.password = password;
    this.orders = []; // Initialize with an empty order list
  }

  // Add a new order to the customer's list of orders
  addOrder(order) {
    this.orders.push(order);
  }

  // Retrieve the total number of orders placed by the customer
  getTotalOrders() {
    return this.orders.length;
  }
}

module.exports = Customer;
```

- Customer Attributes: The customer has attributes such as id, name, address, city, email, phone, status, username, and password.
- Order Management: The addOrder() method allows customers to add orders to their order list, while the getTotalOrders() method returns the total number of orders a customer has placed.

2. Sample Customer Data:

Customers are modeled based on the Customer class and stored in an array. This array acts as a temporary database for handling customer data during the simulation.

```javascript
const Customer = require("../models/Customer");

const customers = [
  new Customer(
    1,
    "John Doe",
    "123 Main St",
    "Calgary",
    "john.doe@example.com",
    "403-555-0101",
    "active",
    "username1",
    "password1"
  ),
  new Customer(
    2,
    "Jane Smith",
    "234 Elm St",
    "Airdrie",
    "jane.smith@example.com",
    "403-555-0202",
    "active",
    "username2",
    "password2"
  ),
];
```

Data Simulation: The customers array stores customer information for use in the backend, simulating a database-like environment.

Frontend Structure

The frontend leverages JavaScript arrays to store and manipulate product, customer, and shopping cart information. The key operations performed are filtering, sorting, and updating product lists, as well as handling customer registrations.
Usage of Arrays and Objects

1. Product Storage and Display:

Products are stored as objects in an array and dynamically filtered and displayed based on their categories.

```javascript
let productsList = await getData(PRODUCTS_ENDPOINT);

// Function to filter and sort products by category
function findAndSortInventoryByCategory(category) {
  let inventoryItems = productsList.filter(
    (item) => item.category === category && item.IsDiscontinued === false
  );

  const sortedItems = inventoryItems.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return sortedItems;
}
```

Read: Products are retrieved from an API and stored in the productsList array.
Display: The filtered and sorted product list is displayed on the page based on their category.

2. Customer Registration and Storage:

The application allows customers to register and stores their data in an array, which is saved in localStorage.

```javascript
// Register new customers and store in local storage
function registerNewCustomers(name, address, city, email, phone) {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];

  let newCustomer = {
    id: customers.length + 1,
    name: name,
    address: address,
    city: city,
    email: email,
    phone: phone,
    status: "Active",
  };

  let existingCustomer = customers.find(
    (customer) => customer.name === newCustomer.name
  );

  if (!existingCustomer) {
    customers.push(newCustomer); // Create
    localStorage.setItem("customers", JSON.stringify(customers)); // Save (Update)
    console.log("New customer registered: ", newCustomer);
  }
}
```

Create: The registerNewCustomers() function adds new customer objects to an array.
Read: Existing customer data is fetched from localStorage.
Update: After registering a new customer, the customers array in localStorage is updated.
Delete: Not implemented.

3. Shopping Cart Management:

The shopping cart system tracks product quantities and stores the cart data in localStorage.

```javascript
(function updateShoppingCartItemsCounter() {
  const totalQty = parseInt(localStorage.getItem("quantities")) || 0;
  const cartItemsCounterLabel = document.querySelector(".cart-items");
  cartItemsCounterLabel.textContent = totalQty;
})();
```

Read/Update: The cart quantity is stored and updated in localStorage, dynamically updating the counter on the page.

Missing Features (Due to Limited Scope)

Order Processing: Full order management is not implemented.
Product Deletion/Modification: Features to delete or modify products and customers are not covered in this project.

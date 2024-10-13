import Dashboard from "../components/Dashboard.js";
import Orders from "../components/Orders.js";
import Inventory from "../components/Inventory.js";
import Customers from "../components/Customers.js";
import Home from "../components/Home.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

//Create the routes for the existing pages
const router = async () => {
  const routes = [
    {
      path: "/",
      view: Home,
    },
    {
      path: "/dashboard",
      view: Dashboard,
    },
    {
      path: "/orders",
      view: Orders,
    },

    {
      path: "/inventory",
      view: Inventory,
    },
    {
      path: "/customers",
      view: Customers,
    },
  ];

  //Test Routes
  const potentialMatches = routes.map((route) => {
    return { route: route, isMatch: location.pathname === route.path };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  //TODO: customize the not found 404 if wanted
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();
  document.querySelector(".app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});

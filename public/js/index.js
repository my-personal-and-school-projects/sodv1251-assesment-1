import Dashboard from "../components/Dashboard.js";
import Orders from "../components/Orders.js";
import Inventory from "../components/Inventory.js";
import OrderView from "../components/orderView.js";
import Customers from "../components/Customers.js";
import Home from "../components/Home.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

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
      path: "/orders/:id",
      view: OrderView,
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
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  //TODO: customize the not found 404 if wanted
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
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

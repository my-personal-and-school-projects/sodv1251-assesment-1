document.querySelectorAll(".nav-item-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => console.log("Viewing Dashboard"),
    },
    {
      path: "/orders",
      view: () => console.log("Viewing Orders"),
    },
    {
      path: "/inventory",
      view: () => console.log("Viewing Inventory"),
    },
    {
      path: "/customers",
      view: () => console.log("Viewing Customers"),
    },
  ];

  //Test Routes
  const potentialMatches = routes.map((route) => {
    return { route, route, isMatch: location.pathname === route.path };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  //TODO: customize the not found 404 if wanted
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }
  console.log(match.route.view());
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});

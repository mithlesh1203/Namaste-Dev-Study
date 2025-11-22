import React from "react";
import { createRoot } from "react-dom/client";
import BodyTemplate from "./Components/Body/BodyTemplate";
import Header from "./Components/Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const App = () => {
  console.log("App render");
  return (
    <div>
      <Header />
      <Outlet />
      //it will render the matched child route component
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <h1>About Page</h1>, // add about component here
        errorElement: <h1>Could not load about page</h1>, //add error component here
      },
      {
        path: "/contact",
        element: <h1>Contact Page</h1>,
      },
      {
        path: "/body",
        element: <BodyTemplate />,
      },
    ],
  },
]);

// ...existing code...
const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("No #root element found in DOM");
} else {
  const root = createRoot(rootEl);
  // Render the router so direct URLs (like /contact) are handled
  root.render(<RouterProvider router={appRouter} />);

  // Parcel HMR: re-render App on updates (fast refresh if available)
  if (import.meta.hot) {
    import.meta.hot.accept(() => {
      root.render(<RouterProvider router={appRouter} />);
    });
  }
}
// ...existing code...

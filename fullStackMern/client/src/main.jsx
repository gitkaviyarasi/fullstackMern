import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// Styles
import "./index.css";
import "./assets/styles/navbar.css";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import LoginPage from "./pages/Loginpage.jsx";
import CreateAccount from "./pages/createAccount.jsx";
import auth from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: auth.loggedIn() ? (
          <HomePage />
        ) : (
          <Navigate to="/login" replace />
        ),
        //  element: <HomePage />
      },
      {
        path: "/CreateAccount",
        element: <CreateAccount />,
      },
      {
        path: "/Search",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}

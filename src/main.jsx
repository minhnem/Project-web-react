import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Pages/HomeLayout/Home.jsx";
import "./index.css";
import Electronics from "./components/Pages/ElectronicsLayout/Electronics.jsx";
import Details from "./components/Layout/ProductDetalis/Details.jsx";
import Cart from "./components/Pages/Cart/Cart.jsx";
import Signup from "./components/Pages/auth/Signup/Signup.jsx";
import Login from "./components/Pages/auth/Login/Login.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./features/UserContextProvider.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./components/Pages/Profile/Profile.jsx";
import Wish from "./components/Pages/Wish/Wish.jsx";


const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wish",
        element: <Wish />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </React.StrictMode>
);

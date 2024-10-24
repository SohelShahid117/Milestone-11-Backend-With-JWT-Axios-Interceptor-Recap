// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import Authproviders from "./Providers/Authproviders";
import Checkout from "./Pages/Checkout/Checkout";
import BookingsOrder from "./Pages/BookingsOrder/BookingsOrder";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:"checkout/:id",
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:"/bookingsOrder",
        element:<PrivateRoute>
          <BookingsOrder></BookingsOrder>
        </PrivateRoute>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <Authproviders>
        <RouterProvider router={router} />
      </Authproviders>
    </React.StrictMode>
  </div>
);

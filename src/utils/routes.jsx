import Home from "../Home";
import Store from "../components/Store/store";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import App from "../App";
import CartPage from "../components/CartPage/CartPage";
import { Detail } from "../components/Detail/Detail";


export const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage/>
      },
      {
        path: "category/:categoryId",
        element: <Store />,
        errorElement: <ErrorPage/>,
        children: []
    
      },

      {
        path: "product/:productId",
        element: <Detail/>,
        errorElement: <ErrorPage/>, 
      },

      {
        path: "Cart",
        element: <CartPage />,
        errorElement: <ErrorPage />,
      }
    ]
  }

  ];
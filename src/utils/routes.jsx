import Home from "../Home";
import Store from "../components/Store/store";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import App from "../App";
import CartPage from "../components/CartPage/CartPage";


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
      {path: "Cart",
        element: <CartPage />,
        errorElement: <ErrorPage />,
      }
    ]
  }

  ];
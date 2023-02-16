import Main from "./pages/Main";
import Products from "./components/Containers/Products/Products";
import Product from "./components/Containers/Product/Product";

import { MAIN_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, USER_ROUTE } from "./utilits/contsts";

export const pageRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main />,

    },
    {
        path: PRODUCTS_ROUTE,
        element: <Products />,
    },
    {
        path: PRODUCT_ROUTE,
        element: <Product />
    },
    // {
    //     path: USER_ROUTE,
    //     element: <User />
    // },
]
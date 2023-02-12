import Main from "./pages/Main";
import ProductsPage from "./pages/ProductsPage";
import User from "./pages/User";
import Product from "./components/Containers/Product/Product";

import { MAIN_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE, USER_ROUTE } from "./utilits/contsts";

export const pageRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main />,

    },
    {
        path: PRODUCTS_ROUTE,
        element: <ProductsPage />,
    },
    {
        path: PRODUCT_ROUTE,
        element: <Product />
    },
    {
        path: USER_ROUTE,
        element: <User />
    },
]
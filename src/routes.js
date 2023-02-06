import Main from "./pages/Main";
import ProductsPage from "./pages/ProductsPage";
import Product from "./components/Containers/Product/Product";

import { MAIN_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE } from "./utilits/contsts";

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
]
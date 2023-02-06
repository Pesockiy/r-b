import Main from "./pages/Main";
import PageUsers from "./pages/ProductsPage";
import User from "./components/Containers/Product/Product";

import { MAIN_ROUTE, PRODUCTS_ROUTE, PRODUCT_ROUTE } from "./utilits/contsts";

export const pageRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main />,

    },
    {
        path: PRODUCTS_ROUTE,
        element: <PageUsers />,
    },
    {
        path: PRODUCT_ROUTE,
        element: <User />
    },
]
export const MAIN_ROUTE = "/";
export const PRODUCTS_ROUTE = "/products";
export const PRODUCT_ROUTE = "/products/:id";

export const api = options => `https://dummyjson.com/${options}`;
export const categoriesPath = api("products/categories");
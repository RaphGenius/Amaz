import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('layout/globalLayout.tsx', [
        index("routes/home.tsx"),
        route('products', "./routes/products.tsx"),
        route('product/:id', './routes/product.tsx')
    ])] satisfies RouteConfig;

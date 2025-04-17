import ProductItem from "~/components/products/ProductItem";
import type { Route } from "./+types/products";
import { getProducts } from "~/api/product-api";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Amaz" },
    { name: "description", content: "Shop where you can find everything." },
  ];
}

export const loader = async () => {
  const data = await getProducts()
  return { data }
}

export default function Products({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData

  return <div className="container mx-auto grid grid-cols-1 px-4 sm:px-0 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4  mt-4">
    {
      data.products.map((product) => <ProductItem key={product.id} product={product} />)
    }
  </div>
}

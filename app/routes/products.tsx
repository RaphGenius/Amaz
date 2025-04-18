
import type { Route } from "./+types/products";
import { getProducts } from "~/api/product-api";
import { useState } from "react";
import ProductItemCard from "~/components/products/ProductItemCard";
import ProductItemDisplay from "~/components/products/ProductItemDisplay";

export type ProductLayout = "list" | "card"


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
  const [currentLayout, setCurrentLayout] = useState<ProductLayout>("card");

  const layout: Record<ProductLayout, string> = {
    card: "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ",
    list: "flex flex-col gap-4"
  }


  return <div className="mx-auto w-full max-w-6xl mt-4 flex">
    <div className="w-[300px] hidden md:block bg-primary text-primary-foreground rounded-e  p-4">
      FILTRE
    </div>
    <div className="w-full px-4 ">
      <div className="space-x-4">
        views
        <button onClick={() => setCurrentLayout("card")}>
          Card
        </button>
        <button onClick={() => setCurrentLayout("list")}>
          List
        </button>
      </div>

      <div className={`${layout[currentLayout]} w-full`}>
        {
          data.products.map((product) => <ProductItemDisplay key={product.id} product={product} layout={currentLayout} />)
        }
      </div>
    </div>
  </div>
}

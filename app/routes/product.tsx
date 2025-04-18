import { getProduct } from "~/api/product-api";
import type { Route } from "./+types/product";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion"

export const meta = ({ data }: Route.MetaArgs) => {
    const { title, description } = data.product
    return [
        {
            title
        }, {
            name: "description",
            content: description
        }
    ]

}

export async function loader({ params }: Route.LoaderArgs) {
    const id = parseInt(params.id);
    const product = await getProduct(id)
    return { product }
}

export default function Product({ loaderData }: Route.ComponentProps) {
    const { product } = loaderData

    const [src, setSrc] = useState(product.thumbnail)


    const calculDiscount = (product.price / product.discountPercentage * 100).toFixed(2)
    const isAvailable = product.stock > 0

    return (
        <div className="container mx-auto space-y-4">
            <div className="flex justify-between gap-4  mx-auto">
                <div className=" w-full space-y-4">
                    <div className="rounded">
                        <div className="max-w-[300px] mx-auto overflow-hidden ">
                            <img src={src} className="object-scale-down w-full" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {product.images.map((img) => {
                            return <button key={img} className="rounded border border-primary cursor-pointer">
                                <img onClick={() => setSrc(img)} src={img} alt={`${product.title} picture`} className="h-24 w-24 object-scale-down" />
                            </button>
                        })}
                    </div>

                </div>

                <div className="w-full p-4 space-y-4">
                    <h3 className="font-mono text-2xl">{product.title}</h3>
                    <p className="italic text-primary">{product.brand} </p>
                    <p className="space-x-2">
                        <span>{product.price}$</span>
                        <span className="line-through text-sm">{calculDiscount}</span>
                    </p>
                    <Button disabled={!isAvailable} variant={"outline"} className="text-primary-foreground  bg-primary">
                        {isAvailable ? "Add to cart" : "Out of stock"}
                    </Button>
                    <div>
                        <p className="">Description : </p>
                        <p className="text-sm mt-0.5 text-primary"> {product.description}</p>
                    </div>

                    <Separator />
                    <div className="flex items-center gap-4">
                        Tags:
                        {
                            product.tags.map((tag) => <Tag key={tag} title={tag} />)
                        }
                    </div>
                    <div>
                        <Accordion type="multiple" className="bg-gray-100  text-slate-900  rounded" >
                            <AccordionItem value="item-1" className="p-2 py-0">
                                <AccordionTrigger className="text-right">Product policy</AccordionTrigger>
                                <AccordionContent className="">
                                    <span>{product.returnPolicy} - {product.shippingInformation}</span>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="p-2 py-0">
                                <AccordionTrigger className="text-right">Characteristics</AccordionTrigger>
                                <AccordionContent>
                                    <li>width : {product.dimensions.width} cm</li>
                                    <li>height : {product.dimensions.height} cm</li>
                                    <li>depth : {product.dimensions.depth} cm</li>
                                    <li>SKU : {product.sku}</li>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Separator />

            <div className=" flex flex-row-reverse gap-4 w-full mx-auto  rounded">
                <div className="w-[250px]">
                    <div>
                        <img src="https://assets.dummyjson.com/public/qr-code.png" alt="" />
                    </div>
                    <p className="text-center mt-2 text-xl">Try out !</p>
                </div>
                <div className="w-full p-4  rounded space-y-4">
                    <h3 className="text-2xl font-bold">Reviews ({product.reviews.length ?? 0})</h3>
                    <div className="flex flex-col gap-2">
                        {product.reviews.map((review, i) => {
                            const { comment, date, reviewerName } = review
                            return (
                                <div key={`${reviewerName}#${i}`} className="bg-primary text-sm text-primary-foreground rounded p-4">
                                    <p className="uppercase font-bold">{reviewerName}</p>
                                    <small>posted on {date.split("T")[0]}</small>
                                    <p className="font-medium">{comment}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

const Tag = ({ title }: { title: string }) => <div className="border text-xs border-primary p-2 text-center rounded text-primary">
    {title}
</div>
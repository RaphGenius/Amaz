import type { ProductLayout } from '~/routes/products'
import type { Product } from '~/types/product'
import ProductItemList from './ProductItemList'
import ProductItemCard from './ProductItemCard'

type Props = {
    product: Product,
    layout: ProductLayout
}

function ProductItemDisplay({ product, layout }: Props) {
    switch (layout) {
        case "card":
            return <ProductItemCard key={product.id} product={product} />
        case "list":
            return <ProductItemList key={product.id} product={product} />
        default:
            break;
    }

}

export default ProductItemDisplay
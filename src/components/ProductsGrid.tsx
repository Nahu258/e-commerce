import ProductBox from './ProductBox';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface Props {
  products: Product[];
}


function ProductsGrid({products}: Props) {
  return (
    <div className='grid grid-cols-2 gap-20 md:grid-cols-4'>
      {products?.length > 0 && products.map(product => (
        <ProductBox key={product._id} {...product} />
      ))}
    </div>
  )
}

export default ProductsGrid
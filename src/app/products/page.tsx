import ProductsGrid from '@/components/ProductsGrid'

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products')

  return res.json()
}

async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className='max-w-[800px] my-0 mx-auto'>
      <h1 className='my-6 font-bold font text-2xl'>All Products</h1>
      <ProductsGrid products={products}/>
    </div>
  )
}

export default ProductsPage
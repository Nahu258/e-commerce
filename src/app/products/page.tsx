'use client'
import ProductsGrid from '@/components/ProductsGrid'
import { useEffect, useState } from 'react'

function ProductsPage() {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    const products = await res.json()
    return products
  }

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products))
  }, [])

  return (
    <div className='max-w-[800px] my-0 mx-auto'>
      <h1>All Products</h1>
      <ProductsGrid products={products}/>
    </div>
  )
}

export default ProductsPage
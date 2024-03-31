'use client'
import Link from 'next/link';

export default function Featured() {
  // const { addProduct } = useContext(CartContext);

  return (
    <div className="bg-[#222] text-white py-20">
      <div className='max-w-[880px] mx-auto px-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:[&>*:nth-child(1)]:order-1">
          <div className='flex items-center'>
            <img src='https://nahu-next-ecommerce.s3.amazonaws.com/1694553545264.png' className="max-w-full" alt='titulo' />
          </div>
          <div className='flex items-center'>
            <div>
              <h1 className="text-2xl md:text-4xl font-normal mb-4">titulo</h1>
              <p className="text-sm md:text-base text-gray-400 mb-4">descripcion</p>
              <div className="flex gap-4">
                {/* <Link href={'/product/' + product._id}>Read more</Link> */}
                <Link className='secondary-button' href={'/product/825'}>Read more</Link>
                {/* <Button white onClick={() => addProduct(product._id)}> */}
                <button className='primary-button'  onClick={() => {}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

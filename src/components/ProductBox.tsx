import Link from 'next/link';

interface Props {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
}

function ProductBox({_id, title, description, price, images}: Props) {
  return (
    <div>
      <Link href={'/'} className='bg-white p-5 h-[120px] flex text-center items-center justify-center rounded-lg'>
        <img src={images?.[0]} alt="" className="max-w-full max-h-20" />
      </Link>
      <div className="mt-2">
        <Link href={'/'} className="font-normal text-[.9rem] text-inherit no-underline">
          {title}
        </Link>
        <div className="block items-center justify-between mt-[2px] md:flex md:gap-1">
          <div className="text-right text-base font-normal md:text-left md:text-lg md:font-semibold">${price}</div>
          {/* <button className='primary-button' onClick={() => addProduct(_id)}> */}
          {/* border-0 px-3 py-1 rounded-md flex items-center no-underline font-poppins font-medium cursor-pointer block w-full bg-transparent border-primary text-primary */}
          <button className='border-0 px-3 py-1 rounded-md items-center no-underline font-poppins font-medium cursor-pointer block w-full bg-transparent border-1 md:flex' onClick={() => {}}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProductBox
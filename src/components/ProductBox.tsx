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
    <div className="mb-4">
      <Link href={'/'}>
        <a className="bg-white p-5 h-24 flex items-center justify-center rounded-md">
          <div>
            <img src={images?.[0]} alt="" className="max-w-full max-h-20" />
          </div>
        </a>
      </Link>
      <div className="mt-2">
        <Link href={'/'}>
          <a className="font-normal text-sm text-blue-600 hover:text-blue-800">{title}</a>
        </Link>
        <div className="flex justify-between items-center mt-1">
          <div className="text-right text-sm font-medium">${price}</div>
          {/* <button className='primary-button' onClick={() => addProduct(_id)}> */}
          <button className='primary-button' onClick={() => {}}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProductBox
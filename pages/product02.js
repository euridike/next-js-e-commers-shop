import Image from 'next/image';
import { useState } from 'react';
import { Counter } from '../components/Counter';
import yoga_matt from '../public/yoga_matt.jpeg';

export default function Product02() {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <h1>Yoga matt</h1>
      <div>
        <Image src={yoga_matt} alt="yoga_matt" />
      </div>

      <p>Product description:</p>
      <div>
        <Counter count={productQuantity} setCount={setProductQuantity} />
      </div>

      <div>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

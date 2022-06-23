import Image from 'next/image';
import { useState } from 'react';
import { Counter } from '../components/Counter';
import yoga_stuff from '../public/yoga_stuff.jpeg';

export default function Product04() {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <h1>Yoga stuff</h1>
      <div>
        <Image src={yoga_stuff} alt="yoga_stuff" />
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

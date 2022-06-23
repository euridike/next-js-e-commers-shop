import Image from 'next/image';
import { useState } from 'react';
import { Counter } from '../components/Counter';
import yoga_block from '../public/yoga_block.jpeg';

export default function Product01() {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <h1>Yoga block</h1>
      <div>
        <Image src={yoga_block} alt="yoga_block" />
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

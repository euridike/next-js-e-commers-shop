import Image from 'next/image';
import { useState } from 'react';
import { Counter } from '../components/Counter';
import yoga_pants from '../public/yoga_pants.jpeg';

export default function Product03() {
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <h1>Yoga pants</h1>
      <div>
        <Image src={yoga_pants} alt="yoga_pants" />
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

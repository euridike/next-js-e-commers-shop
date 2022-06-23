import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';

const animalsListStyles = css`
  background: #e1fae9;
  padding: 10px;
`;
const animalsListItemStyles = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f0fcf4;
  padding: 12px 16px;
  & + & {
    margin-bottom: 20px;
  }
`;

export default function Products() {
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="List of our products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Products</h1>

      <div css={animalsListStyles}>
        <Link href="/product01">Yoga block</Link>
      </div>
      <div css={animalsListStyles}>
        <Link href="/product02">Yoga matt</Link>
      </div>
      <div css={animalsListStyles}>
        <Link href="/product03">Yoga pants</Link>
      </div>
      <div css={animalsListStyles}>
        <Link href="/product04">Yoga stuff</Link>
      </div>
    </div>
  );
}

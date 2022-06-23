import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  padding: 8px 14px;
  background: #c3f7d5;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  > div > a + a {
    marging-left: 10px;
  }
`;

const footerStyles = css`
  padding: 8px 14px;
  background: #c3f7d5;
  border-radius: 5px;
  margin-top: 30px;
`;

export default function Layout(props) {
  return (
    <div>
      <header css={headerStyles}>
        <Link href="/">🐐</Link>
        <div>
          <Link href="/products">Products</Link>
        </div>

        <Link href="/about">About</Link>
      </header>

      {
        //Page content
        props.children
      }
      <footer css={footerStyles}>goat 🐐 copyright 2022</footer>
    </div>
  );
}

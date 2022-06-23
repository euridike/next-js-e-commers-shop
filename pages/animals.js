import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { animalsDatabase } from '../util/database';

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

export default function Animals(props) {
  return (
    <div>
      <Head>
        <title>Collection</title>
        <meta name="description" content="List of various animals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Collection</h1>

      <div>a: {props.a}</div>
      <div>b: {props.b}</div>

      <div css={animalsListStyles}>
        {props.animals.map((animal) => {
          return (
            <div key={`animal-${animal.id}`} css={animalsListItemStyles}>
              <div>
                Name:<Link href={`/animals/${animal.id}`}>{animal.name}</Link>
              </div>
              <div>Type: {animal.type}</div>
              <div>Accessory:{animal.accessory}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//Anithing that you pass in the props
//object will get passed to the component
//at the top in the 'props' parameter
export function getServerSideProps() {
  //everithyng what you write here will not be written on t
  return {
    props: {
      animals: animalsDatabase,
    },
  };
}

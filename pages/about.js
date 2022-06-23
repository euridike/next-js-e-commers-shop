import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name="description" content="About the goat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About the goat</h1>
        <p>Philosophy of our online shop</p>
      </main>
    </div>
  );
}

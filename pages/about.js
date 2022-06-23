import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
        <meta name="description" content="About the app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About the app</h1>
      </main>
    </div>
  );
}

import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <div>
      <Head>
        <title>Team page</title>
        <meta name="description" content="About the team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Team page</h1>
      </main>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import macaca from '../public/macaca.jpeg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop Home Page</title>
        <meta name="description" content="DAshboard for application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Shop</h1>

        <Image src={macaca} alt="Sassy macaca" />
      </main>
    </div>
  );
}

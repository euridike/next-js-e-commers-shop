import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import yoga_home from '../public/yoga_home.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop Home Page</title>
        <meta name="description" content="DAshboard for application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Goat Yoga Shop</h1>

        <Image src={yoga_home} alt="Yoga" />
        <p>Welcome to our goatly great yoga shop</p>
      </main>
    </div>
  );
}

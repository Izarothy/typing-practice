import type { NextPage } from 'next';
import Head from 'next/head';
import TypeInput from '../components/TypeInput';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Typing Practice</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="screen min-h-screen flex flex-col items-center justify-center p-4 bg-main">
        <div className="container bg-secondary-dark w-2/3">Typing practice</div>
        <TypeInput />
      </main>
    </>
  );
};

export default Home;
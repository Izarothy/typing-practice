import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PracticeText from '../components/PracticeText';
import TypeInput from '../components/TypeInput';
import { useAppSelector } from '../lib/hooks';
import { setPracticeText } from '../redux/slices/practiceTextSlice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/getPracticeText');

      if (!res.ok) return;

      const data = await res.json();
      dispatch(setPracticeText(data));
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Typing Practice</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="screen min-h-screen flex flex-col items-center justify-center p-4 bg-main">
        <div className="relative">
          <TypeInput />
          <PracticeText />
        </div>
      </main>
    </>
  );
};

export default Home;

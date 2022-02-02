import type { NextPage } from 'next';
import Head from 'next/head';

import PageContent from '@comps/PageContent';

import { classNames } from '@utils/classnames';

const Home: NextPage = () => {
  return (
    <PageContent
      Main={({ className = '' }) => (
        <div
          className={classNames(
            className,
            'flex justify-center items-center h-full'
          )}
        >
          <Head>
            <title>Plataforma de Conteúdo Inteligente</title>
          </Head>
          <h1>patricklima.dev</h1>
        </div>
      )}
    />
  );
};

export default Home;

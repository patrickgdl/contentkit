import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import CreateVideo from '@comps/Create/CreateVideo';
import PageContent from '@comps/PageContent';

import { classNames } from '@utils/classnames';

//const VIDEO_TYPES: Record<string, JSX.Element> = {};

const Create: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Evento</title>
      </Head>
      <PageContent
        Main={({ className = '' }) => (
          <div
            className={classNames(
              className,
              'flex-1 flex items-stretch overflow-hidden'
            )}
          >
            <CreateVideo className={className} />
          </div>
        )}
      />
    </React.Fragment>
  );
};

export default Create;

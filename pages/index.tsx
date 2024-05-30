import {
  CalendarIcon,
  MegaphoneIcon,
  ArrowsUpDownIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import EmptyStateTemplate from '@comps/EmptyStateTemplate/EmptyStateTemplate';
import PageContent from '@comps/PageContent';

import { classNames } from '@utils/classnames';

const templateItems = [
  {
    name: 'Gol',
    description: 'Vídeo template para momento de Gol',
    href: '/create',
    iconColor: 'bg-pink-500',
    icon: MegaphoneIcon,
  },
  {
    name: 'Substituição',
    description: 'Vídeo template de Substituição',
    href: '/create?change=true',
    iconColor: 'bg-purple-500',
    icon: ArrowsUpDownIcon,
  },
  {
    name: 'Evento',
    description: 'Gerar vídeo a partir de um evento ao-vivo/lance-a-lance',
    href: '/create/event',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
];

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
            <title>Plataforma de Conteúdo</title>
          </Head>

          <EmptyStateTemplate
            items={templateItems}
            route="/create"
            title="Crie seu primeiro vídeo"
          />
        </div>
      )}
    />
  );
};

export default Home;

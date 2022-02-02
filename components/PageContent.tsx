import {
  CalendarIcon,
  LinkIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import React from 'react';

import { useRouter } from 'next/router';

import { PasswordProtectedProvider } from '@comps/../passwordProtected/PasswordProtectedProvider';

import Header from './Navigation/Header';
import { MobileMenuProvider } from './Navigation/MobileMenuProvider';
import { NavigationProps } from './Navigation/Navigation.props';
import Sidebar from './Navigation/Sidebar';
import SidebarMobile from './Navigation/SidebarMobile';

const LINKS: Record<string, NavigationProps> = {
  create: {
    path: '/create',
    icon: VideoCameraIcon,
    title: 'Criar',
  },
  currentGame: {
    path: '/create/event',
    icon: CalendarIcon,
    title: 'Evento',
  },
  url: {
    path: '/url',
    icon: LinkIcon,
    title: 'URL',
  },
};

export default function PageContent({
  Main,
}: {
  className?: string;
  Main: Function;
}) {
  const { route } = useRouter();

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Narrow sidebar */}
      <Sidebar links={LINKS} route={route} />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header + Mobile Sidebar */}
        <MobileMenuProvider>
          <SidebarMobile links={LINKS} route={route} />
          <Header />
        </MobileMenuProvider>

        {/* Main content */}
        <div className="flex-1 flex items-stretch overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <section
              aria-labelledby="main-content"
              className="h-full overflow-hidden"
            >
              <PasswordProtectedProvider>
                <Main />
              </PasswordProtectedProvider>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

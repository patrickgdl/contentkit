import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { classNames } from '@utils/classnames';

import { GenericSidebarProps } from './Sidebar.props';

const Sidebar = ({ links, route }: GenericSidebarProps) => {
  return (
    <div className="hidden w-28 bg-red-500 overflow-y-auto md:block">
      <div className="w-full py-6 flex flex-col items-center">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/">

            <Image
              width={50}
              height={50}
              alt="CAP Logo"
              src="/cap-logo-white.svg"
            />

          </Link>
        </div>

        <div className="flex-1 mt-6 w-full px-2 space-y-1">
          {Object.entries(links).map(([key, link]) => (
            (<Link
              key={key}
              href={link.path}
              className={classNames(
                link.path === route
                  ? 'bg-red-800 text-white'
                  : 'text-red-100 hover:bg-red-800 hover:text-white',
                'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
              )}
              aria-current={link.path === route ? 'page' : undefined}>

              <link.icon
                className={classNames(
                  link.path === route
                    ? 'text-white'
                    : 'text-red-300 group-hover:text-white',
                  'h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="mt-2">{link.title}</span>

            </Link>)
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

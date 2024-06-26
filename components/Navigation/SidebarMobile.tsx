import { Dialog, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Fragment, useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { classNames } from '@utils/classnames';

import { MobileMenuContext } from './MobileMenuProvider';
import { GenericSidebarProps } from './Sidebar.props';

const SidebarMobile = ({ links, route }: GenericSidebarProps) => {
  const { menuOpen, toggleMenuOpen } = useContext(MobileMenuContext);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    toggleMenuOpen();
  };

  return (
    <Transition show={menuOpen} as={Fragment}>
      <Dialog as="div" className="md:hidden" onClose={toggleMenuOpen}>
        <div className="fixed inset-0 z-40 flex">
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-red-700 pt-5 pb-4 flex-1 flex flex-col">
              <TransitionChild
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => toggleMenuOpen()}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <div className="flex-shrink-0 px-4 flex items-center">
                <Link href="/">
                  <Image
                    width={50}
                    height={50}
                    alt="CAP Logo"
                    src="/cap-logo-white.svg"
                  />
                </Link>
              </div>
              <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {Object.entries(links).map(([key, link]) => (
                      <a
                        key={link.title}
                        href={link.path}
                        className={classNames(
                          link.path === route
                            ? 'bg-red-800 text-white'
                            : 'text-red-100 hover:bg-red-800 hover:text-white',
                          'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                        )}
                        aria-current={link.path === route ? 'page' : undefined}
                      >
                        <link.icon
                          className={classNames(
                            link.path === route
                              ? 'text-white'
                              : 'text-red-300 group-hover:text-white',
                            'mr-3 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        <span>{link.title}</span>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </TransitionChild>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SidebarMobile;

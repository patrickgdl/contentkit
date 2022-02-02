import { Menu, Transition } from '@headlessui/react';
import { MenuAlt2Icon, PlusIcon, SearchIcon } from '@heroicons/react/outline';
import { Fragment, useContext } from 'react';

import Image from 'next/image';

import { classNames } from '@utils/classnames';

import { MobileMenuContext } from './MobileMenuProvider';

const userNavigation = [
  { name: 'Seu perfil', href: '#' },
  { name: 'Sair', href: '#' },
];

const Header = () => {
  const { toggleMenuOpen } = useContext(MobileMenuContext);

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    toggleMenuOpen();
  };

  return (
    <header className="w-full">
      <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
        <button
          type="button"
          className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 md:hidden"
          onClick={(e) => handleOnClick(e)}
        >
          <span className="sr-only">Abrir barra lateral</span>

          <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="flex-1 flex justify-between px-4 sm:px-6">
          <div className="flex-1 flex">
            <form className="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Buscar
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <SearchIcon
                    className="flex-shrink-0 h-5 w-5"
                    aria-hidden="true"
                  />
                </div>
                <input
                  name="search-field"
                  id="search-field"
                  className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400"
                  placeholder="Buscar"
                  type="search"
                />
              </div>
            </form>
          </div>

          <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
            {/* Profile dropdown */}
            <Menu as="div" className="relative flex-shrink-0">
              <div>
                <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  <span className="sr-only">Abrir menu do usuário</span>
                  <Image
                    className="rounded-full"
                    width={32}
                    height={32}
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="flex bg-red-600 p-1 rounded-full items-center justify-center text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <PlusIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Adicionar vídeo</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

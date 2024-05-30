import { ChevronRightIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

import { classNames } from '@utils/classnames';

export interface IEmptyStateItem {
  name: string;
  description: string;
  href: string;
  iconColor: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

type EmptyStateProps = {
  items: IEmptyStateItem[];
  route: string;
  title: string;
};

const EmptyStateTemplate = ({ items, route, title }: EmptyStateProps) => {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>

      <p className="mt-1 text-sm text-gray-500">
        Selecione um modelo ou comece um projeto vazio.
      </p>

      <ul
        role="list"
        className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="relative group py-4 flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={classNames(
                    item.iconColor,
                    'inline-flex items-center justify-center h-10 w-10 rounded-lg'
                  )}
                >
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <Link href={item.href}>
                    <a href={item.href}>
                      <span className="absolute inset-0" aria-hidden="true" />
                      {item.name}
                    </a>
                  </Link>
                </div>

                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex">
        <Link href={route}>
          <a className="text-sm font-medium text-red-600 hover:text-red-500">
            Ou comece um projeto vazio<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EmptyStateTemplate;

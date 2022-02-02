import React from 'react';

import { classNames } from '@utils/classnames';

const InputText = ({
  name,
  value = '',
  className = '',
  type = 'text',
  ...props
}: {
  name: string;
  value?: string;
  className?: string;
  type?:
    | 'text'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week';
}) => (
  <input
    name={name}
    className={classNames(
      className,
      'bg-transparent border h-12 leading-10 py-1 px-2 border-gray-300 focus:outline-none'
    )}
    id={name}
    value={value}
    type={type}
    {...props}
  />
);

export default InputText;

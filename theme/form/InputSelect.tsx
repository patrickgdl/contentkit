import React from 'react';

import { classNames } from '@utils/classnames';

const InputSelect = ({
  name,
  value = '',
  className = '',
  options,
  optionProps = () => ({}),
  emptyOption = false,
  ...props
}: {
  name: string;
  value?: string;
  className?: string;
  options: Record<string, string>;
  optionProps?: (value: string, label: string) => Record<string, any>;
  emptyOption?: boolean;
}) => {
  return (
    <select
      value={value}
      id={name}
      name={name}
      className={classNames(
        className,
        'bg-transparent border h-12 leading-10 py-1 px-2 border-gray-300 focus:outline-none'
      )}
      {...props}
    >
      {emptyOption && <option value="" {...optionProps('', '')} />}
      {Object.entries(options || {}).map(([value, label]) => (
        <option
          value={value}
          key={value}
          {...optionProps(value, String(label))}
        >
          {label}
        </option>
      ))}
    </select>
  );
};

export default InputSelect;

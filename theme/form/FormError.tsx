import React from 'react';

import { classNames } from '@utils/classnames';

type FormErrorProps = {
  className?: string;
  children?: JSX.Element | string;
};

const FormError = ({ className = '', children }: FormErrorProps) => (
  <p className={classNames(className, 'text-right text-red-500 text-sm mt-4')}>
    {children}
  </p>
);

export default FormError;

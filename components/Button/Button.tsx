import { useButton } from '@react-aria/button';
import { AriaButtonProps } from '@react-types/button';
import { useRef, SVGProps } from 'react';

import cn, { classNames } from '@utils/classnames';

type ButtonProps = AriaButtonProps<'button'> & {
  className?: string;
  iconClassName?: string;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

function Button(props: ButtonProps): JSX.Element {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children, className, icon: IconProp, iconClassName } = props;

  return (
    <>
      <button
        {...buttonProps}
        ref={ref}
        className={cn(
          'inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
          className
        )}
      >
        {IconProp && (
          <IconProp
            className={classNames(
              'text-white hover:text-slate-100 h-6 w-6',
              iconClassName
            )}
            aria-hidden="true"
          />
        )}
        {children}
      </button>
    </>
  );
}

export default Button;

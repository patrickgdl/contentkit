import { AriaLinkOptions, useLink } from '@react-aria/link';
import { useRef, SVGProps } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { classNames } from '@utils/classnames';

type LinkProps = AriaLinkOptions &
  NextLinkProps & {
    children: React.ReactNode;
    href: string;
    target?: string;
    className?: string;
    iconClassName?: string;
    download?: boolean;
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  };

export default function Link(props: LinkProps): JSX.Element {
  let {
    children,
    className,
    target,
    download,
    iconClassName,
    icon: IconProp,
  } = props;

  let ref = useRef();
  let { linkProps } = useLink(props, ref);

  return (
    (<NextLink
      href={props.href}
      {...linkProps}
      ref={ref}
      target={target}
      className={className}
      download={download}>

      {IconProp && (
        <IconProp
          className={classNames(
            'text-white hover:text-slate-100 h-6 w-6 mr-1',
            iconClassName
          )}
          aria-hidden="true"
        />
      )}
      {children}

    </NextLink>)
  );
}

import { SVGProps } from 'react';

export type NavigationProps = {
  path: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
};

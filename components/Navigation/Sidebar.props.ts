import { NavigationProps } from './Navigation.props';

export type GenericSidebarProps = {
  links?: Record<string, NavigationProps>;
  route: string;
};

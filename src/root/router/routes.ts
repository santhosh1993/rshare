import {HomeProps} from '@src/screens/home/home';
import {MoreInterface} from '@src/screens/more/more';

export enum Routes {
  HOME = 'Home',
  MORE = 'More',
}

export type BaseRouteParams = {
  [Routes.HOME]: HomeProps;
  [Routes.MORE]: MoreInterface;
};

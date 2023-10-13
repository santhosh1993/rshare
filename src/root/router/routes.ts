import {HomeProps} from '@src/screens/home/home';
import {MoreInterface} from '@src/screens/more/more';
import {ProjectDetailFullScreenInterface} from '@src/screens/project-detail-fullscreen/project-detail-fullscreen.interface';
import {ProjectDetailInterface} from '@src/screens/project-detail/project-detail.interface';

export enum Routes {
  HOME = 'Home',
  MORE = 'More',
  PROJECTDETAIL = 'PROJECTDETAIL',
  PROJECTDETAILFULLSCREEN = 'PROJECTDETAILFULLSCREEN',
}

export type BaseRouteParams = {
  [Routes.HOME]: HomeProps;
  [Routes.MORE]: MoreInterface;
  [Routes.PROJECTDETAIL]: ProjectDetailInterface;
  [Routes.PROJECTDETAILFULLSCREEN]: ProjectDetailFullScreenInterface;
};

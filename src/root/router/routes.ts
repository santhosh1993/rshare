import {CreateProjectInterface} from '@src/screens/create-project/create-project.interface';
import {HomeProps} from '@src/screens/home/home';
import {MoreInterface} from '@src/screens/more/more';
import {ProjectDetailFullScreenInterface} from '@src/screens/project-detail-fullscreen/project-detail-fullscreen.interface';
import {ProjectDetailInterface} from '@src/screens/project-detail/project-detail.interface';
import {ShareProjectInterface} from '@src/screens/share-project/share-project.interface';

export enum Routes {
  HOME = 'Home',
  MORE = 'More',
  PROJECTDETAIL = 'PROJECTDETAIL',
  PROJECTDETAILFULLSCREEN = 'PROJECTDETAILFULLSCREEN',
  CreateProject = 'CreateProject',
  SHARE_SCREEN = 'ShareScreen',
}

export type BaseRouteParams = {
  [Routes.HOME]: HomeProps;
  [Routes.MORE]: MoreInterface;
  [Routes.PROJECTDETAIL]: ProjectDetailInterface;
  [Routes.PROJECTDETAILFULLSCREEN]: ProjectDetailFullScreenInterface;
  [Routes.CreateProject]: CreateProjectInterface;
  [Routes.SHARE_SCREEN]: ShareProjectInterface;
};

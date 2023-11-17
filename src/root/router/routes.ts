import {CreateProjectInterface} from '@src/screens/create-project/create-project.interface';
import {ShareCenterProps} from '@src/screens/share-center/ShareCenter';
import {MoreInterface} from '@src/screens/more/more';
import {ProjectDetailFullScreenInterface} from '@src/screens/project-detail-fullscreen/project-detail-fullscreen.interface';
import {ProjectDetailInterface} from '@src/screens/project-detail/project-detail.interface';
import {ShareProjectInterface} from '@src/screens/share-project/share-project.interface';

export enum Routes {
  SHARE_CENTER = 'SHARE_CENTER',
  MORE = 'More',
  PROJECTDETAIL = 'PROJECTDETAIL',
  PROJECTDETAILFULLSCREEN = 'PROJECTDETAILFULLSCREEN',
  CreateProject = 'CreateProject',
  SHARE_SCREEN = 'ShareScreen',
  HOME = 'HOME',
}

export type BaseRouteParams = {
  [Routes.SHARE_CENTER]: ShareCenterProps;
  [Routes.MORE]: MoreInterface;
  [Routes.PROJECTDETAIL]: ProjectDetailInterface;
  [Routes.PROJECTDETAILFULLSCREEN]: ProjectDetailFullScreenInterface;
  [Routes.CreateProject]: CreateProjectInterface;
  [Routes.SHARE_SCREEN]: ShareProjectInterface;
  [Routes.HOME]: {};
};

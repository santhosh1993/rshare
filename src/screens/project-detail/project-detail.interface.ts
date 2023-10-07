import {ProjectSharedInfo} from './components/projectSharedInfo';

export interface ProjectDetailInterface extends ProjectSharedInfo {
  id: string;
  sharedUserId?: string;
}

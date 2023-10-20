import {SectionData} from '../project-detail/project-detail.interface';

export interface CreateProjectInterface {}

export interface CreateProjectStoreInterface {
  data: Array<SectionData>;
  addNewSection: () => void;
}

import {SectionData} from '../project-detail/project-detail.interface';

export interface CreateProjectInterface {}

export interface AddNewContent {
  uri: string;
  type: string | null;
}

export interface CreateProjectStoreInterface {
  data: Array<SectionData>;
  addNewSection: () => void;
  addNewContent: (content: Array<AddNewContent>, index: number) => void;
}

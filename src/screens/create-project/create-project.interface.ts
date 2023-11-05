import {SectionData} from '../project-detail/project-detail.interface';

export interface CreateProjectInterface {}

export interface AddNewContent {
  uri: string;
  type: string | null;
}

export interface ProjectDetails {
  title: string;
  descrption: string;
  keywords: string;
}

export enum InputType {
  title,
  description,
  keywords,
  sectionTitle,
  sectionDescription,
}

export interface CreateProjectStoreInterface {
  isLoading: boolean;
  data: Array<SectionData>;
  tabs: Array<string>;
  details: ProjectDetails;
  collapseDetails: boolean;
  setIsLoading: (show: boolean) => void;
  updateCollapse: (collapse: boolean) => void;
  updateText: (type: InputType, value: string, index?: number) => void;
  addNewSection: () => void;
  addNewContent: (content: Array<AddNewContent>, index: number) => void;
}

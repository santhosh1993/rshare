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
  data: Array<SectionData>;
  tabs: Array<string>;
  details: ProjectDetails;
  updateText: (type: InputType, value: string, index?: number) => void;
  addNewSection: () => void;
  addNewContent: (content: Array<AddNewContent>, index: number) => void;
}

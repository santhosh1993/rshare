import {
  ContentData,
  SectionData,
} from '../project-detail/project-detail.interface';
import {AddNewContent} from './create-project.interface';

export const mapAddNewContentToContentData: (
  data: AddNewContent,
  index: number,
) => ContentData = (data: AddNewContent, index: number) => {
  return {
    url: data.uri,
    fileType: data.type ?? 'unknown',
    id: Date().toLocaleString(),
    index: index,
  };
};

export const createNewProject: (title: string, index: number) => SectionData = (
  title,
  index,
) => {
  return {
    title: title + ' ' + (index + 1),
    index: index,
    content: [],
  };
};

import {create} from 'zustand';
import {
  AddNewContent,
  CreateProjectStoreInterface,
} from './create-project.interface';
import {
  createNewProject,
  mapAddNewContentToContentData,
} from './create-project.utils';

export const useCreateProjectStore = create<CreateProjectStoreInterface>(
  (set, get) => {
    return {
      data: [createNewProject('Untitled', 0)],
      addNewSection: () => {
        let data = get().data;
        data.push({
          title: 'Untitled' + data.length,
          index: data.length,
          content: [],
        });
        console.log(data, '------>>>>>>');
        set({
          data: data,
        });
      },
      addNewContent: (content: Array<AddNewContent>, index: number) => {
        let data = get().data;
        let updatedContent = data[index].content;

        for (let i = 0; i < content.length; i++) {
          updatedContent.push(mapAddNewContentToContentData(content[i], i));
        }

        data[index].content = updatedContent;

        set({data: data});
      },
    };
  },
);

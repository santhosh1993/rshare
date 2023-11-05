import {create} from 'zustand';
import {
  AddNewContent,
  CreateProjectStoreInterface,
  InputType,
} from './create-project.interface';
import {
  createNewProject,
  mapAddNewContentToContentData,
} from './create-project.utils';

const initalProject = createNewProject('Category', 0);

export const useCreateProjectStore = create<CreateProjectStoreInterface>(
  (set, get) => {
    return {
      isLoading: false,
      data: [initalProject],
      tabs: [initalProject.title],
      collapseDetails: false,
      details: {title: '', descrption: '', keywords: ''},
      setIsLoading: show => {
        set({isLoading: show});
      },
      updateCollapse: collapse => {
        set({
          collapseDetails: collapse,
        });
      },
      updateText: (type, value, index) => {
        let details = get().details;
        let data = get().data;
        switch (type) {
          case InputType.title:
            details.title = value;
            break;
          case InputType.description:
            details.descrption = value;
            break;
          case InputType.keywords:
            details.keywords = value;
            break;
          case InputType.sectionTitle:
            data[index ?? 0].title = value;
            break;
          case InputType.sectionDescription:
            data[index ?? 0].description = value;
            break;
        }

        set({
          details: details,
          data: data,
        });
      },
      addNewSection: () => {
        let data = get().data;
        data.push(createNewProject('Category', data.length));
        let tabs = get().tabs;
        tabs.push(data[data.length - 1].title);

        set({
          data: data,
          tabs: tabs,
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

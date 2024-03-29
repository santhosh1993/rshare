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


let categoryIndex = 0

export const useCreateProjectStore = create<CreateProjectStoreInterface>(
  (set, get) => {
    const initalProject = createNewProject('Category', 0);

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
        categoryIndex += 1
        data.push(createNewProject('Category', categoryIndex));
        let tabs = get().tabs;
        tabs.push(data[data.length - 1].title);

        set({
          data: data,
          tabs: tabs,
        });
      },
      deleteItem: (sectionIndex, index) => {
        const sectionData = get().data;
        sectionData[sectionIndex].content.splice(index, 1);
        set({
          data: sectionData,
        });
      },
      addNewContent: (content: Array<AddNewContent>, index: number) => {
        let data = get().data;
        let updatedContent = data[index].content;

        for (let i = 0; i < content.length; i++) {
          updatedContent.push(mapAddNewContentToContentData(content[i], i));
        }

        data[index].content = updatedContent;

        set({data: data, collapseDetails: true});
      },
      deleteTab: (index: number) => {
        let tabs = get().tabs
        let data = get().data

        tabs.splice(index, 1)
        data.splice(index, 1)

        if (tabs.length == 0) {
          categoryIndex+=1
          const newProject = createNewProject('Category', categoryIndex);
          data.push(newProject)
          tabs.push(newProject.title)
        }

        set({
          tabs: tabs,
          data: data
        })        
      },
      reset: () => {
        const initalProject = createNewProject('Category', 0);
        categoryIndex = 0
        set({
          isLoading: false,
          data: [initalProject],
          tabs: [initalProject.title],
          collapseDetails: false,
          details: {title: '', descrption: '', keywords: ''},
        });
      },
    };
  },
);

import {create} from 'zustand';
import {CreateProjectStoreInterface} from './create-project.interface';
import {MockData} from '../project-detail/project-detail.interface';

export const useCreateProjectStore = create<CreateProjectStoreInterface>(
  (set, get) => {
    return {
      data: [MockData[0]],
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
    };
  },
);

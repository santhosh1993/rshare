import {create} from 'zustand';
import {CreateProjectStoreInterface} from './create-project.interface';
import {MockData} from '../project-detail/project-detail.interface';

export const useCreateProjectStore = create<CreateProjectStoreInterface>(() => {
  return {
    data: [MockData[0]],
  };
});

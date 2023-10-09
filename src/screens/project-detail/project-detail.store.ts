import {create} from 'zustand';
import {
  SectionData,
  ProjectDetailStoreInterface,
  MockData,
} from './project-detail.interface';

export const useProjectDetailStore = create<ProjectDetailStoreInterface>(
  set => {
    return {
      props: undefined,
      data: MockData,
      updateData: (data: Array<SectionData>) => {
        set({
          data: data,
        });
      },
    };
  },
);

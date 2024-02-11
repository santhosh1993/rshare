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
      isLoading: false,
      setIsLoading: (isLoading: boolean) => {
        set({
          isLoading: isLoading,
        });
      },
      updateData: (data: Array<SectionData>) => {
        set({
          data: data,
        });
      },
    };
  },
);

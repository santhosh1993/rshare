import {ProjectSharedInfo} from './components/projectSharedInfo';

export interface ProjectDetailInterface extends ProjectSharedInfo {
  id: string;
  sharedUserId?: string;
}

export interface ContentData {
  url: string;
  fileType: string;
}

export interface SectionData {
  title: string;
  index: number;
  content: Array<ContentData>;
}

export interface ProjectDetailStoreInterface {
  props?: ProjectDetailInterface;
  data: Array<SectionData>;
  updateData: (data: Array<SectionData>) => void;
}

export const MockData = [
  {
    title: 'Santhosh',
    index: 0,
    content: [
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
    ],
  },
  {
    title: 'Santhosh 35',
    index: 0,
    content: [
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
    ],
  },
  {
    title: 'Santhosh 1',
    index: 1,
    content: [
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
    ],
  },
  {
    title: 'Santhosh 2',
    index: 2,
    content: [
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
      {
        url: 'http://',
        fileType: 'IMG',
      },
    ],
  },
];

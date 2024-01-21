import {ProjectSharedInfo} from './components/projectSharedInfo';

export interface ProjectDetailInterface extends ProjectSharedInfo {
  id: string;
  enableShare?: boolean;
  sharedUserId?: string;
  rconName: string;
}

export interface ContentData {
  url: string;
  fileType: string;
  id: string;
}

export interface SectionData {
  title: string;
  description?: string;
  content: Array<ContentData>;
}

export interface ProjectDetailStoreInterface {
  props?: ProjectDetailInterface;
  data: Array<SectionData>;
  isLoading: boolean;
  updateData: (data: Array<SectionData>) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const MockData = [
  {
    title: 'Santhosh',
    index: 0,
    description: 'OM Namo Venkateshaya',
    content: [
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '1',
        index: 0,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '2',
        index: 1,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '3',
        index: 2,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '4',
        index: 3,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '5',
        index: 4,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '6',
        index: 5,
      },
    ],
  },
  {
    title: 'Santhosh 35',
    index: 1,
    content: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTON_DJGh5dd0_SmRMJUzq0tD8wLG_iWQtA&usqp=CAU',
        fileType: 'IMG',
        id: '1',
        index: 0,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '2',
        index: 1,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '3',
        index: 2,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '4',
        index: 3,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '5',
        index: 4,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '6',
        index: 5,
      },
    ],
  },
  {
    title: 'Santhosh 1',
    index: 2,
    content: [
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '1',
        index: 0,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '2',
        index: 1,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '3',
        index: 2,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '4',
        index: 3,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '5',
        index: 4,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '6',
        index: 5,
      },
    ],
  },
  {
    title: 'Santhosh 2',
    index: 3,
    content: [
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '1',
        index: 0,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '2',
        index: 1,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '3',
        index: 2,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '4',
        index: 3,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '5',
        index: 4,
      },
      {
        url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/01/19120130/Mandir-Design-for-Small-Flats-12-Elegant-small-mandir-designs-for-Indian-homes-11.jpg',
        fileType: 'IMG',
        id: '6',
        index: 5,
      },
    ],
  },
];

import {ProjectSharedInfo} from './components/projectSharedInfo';

export interface ProjectDetailInterface extends ProjectSharedInfo {
  id: string;
  sharedUserId?: string;
}

export interface ContentData {
  url: string;
  fileType: string;
  id: string;
  index: number;
}

export interface SectionData {
  title: string;
  index: number;
  description?: string;
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
    index: 0,
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
    title: 'Santhosh 1',
    index: 1,
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
];

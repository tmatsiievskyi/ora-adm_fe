import { TMongoDoc } from '../api';

export type TEmployee = {
  firstName: string;
  lastName: string;
  surname: string;
  imgUrl: string;
  smImgUrl: string;
  position: string;
  index: number;
  department: string;
  illness: string[];
  achievements: string[];
} & TMongoDoc;

export type TSubservice = {
  label: string;
  category: string;
  subCategory: string;
  outsource: boolean;
  description: string;
  price: number;
  searchTags: string[];
  index: number;
} & TMongoDoc;

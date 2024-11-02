import { TMongoDoc } from '../api';

export type TUser = {
  login: string;
  isVerified: boolean;
} & TMongoDoc;

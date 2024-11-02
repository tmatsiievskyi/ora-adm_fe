import {
  sendAuthGuardedRequest,
  sendProtectedRequest,
  sendRequest,
} from '@global/utils';

export const useApi = () => {
  return { sendRequest, sendProtectedRequest, sendAuthGuardedRequest };
};

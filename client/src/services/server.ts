const BASE_URL = 'http://172.29.135.135:3000';

export const createUri = (path: string): string => {
  return BASE_URL + '/' + path + '/';
};

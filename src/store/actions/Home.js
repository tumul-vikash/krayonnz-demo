import {types} from '../types';

export const getNewsData = () => {
  return {
    type: types.GET_NEWS_DATA_REQUEST,
  };
};

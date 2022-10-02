import {types} from '../types';

const initialState = {
  NewsData: [],
  loading: false,
  error: null,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_DATA_REQUEST:
      console.log('PAYLOAD REDUCER', action);
      return {
        ...state,
        loading: true,
      };
    case types.GET_NEWS_DATA_SUCCESS:
      return {
        ...state,
        NewsData: [...action.payload.articles],
        loading: false,
      };
    case types.GET_NEWS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

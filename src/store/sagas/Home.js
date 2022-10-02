import {put, call, takeLatest} from 'redux-saga/effects';

import * as Api from '../../api';

import {types} from '../types';

export function* fetchNews() {
  try {
    const response = yield call(Api.getNews);
    yield put({
      type: types.GET_NEWS_DATA_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: types.GET_NEWS_DATA_FAILURE,
      error: error.message,
    });
  }
}

export function* fetchNewsWatcher() {
  yield takeLatest(types.GET_NEWS_DATA_REQUEST, fetchNews);
}

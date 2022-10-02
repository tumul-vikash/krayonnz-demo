import {all} from 'redux-saga/effects';

import {fetchNewsWatcher} from './Home';

export default function* rootSaga() {
  yield all([fetchNewsWatcher()]);
}

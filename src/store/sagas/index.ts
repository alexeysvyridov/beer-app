import { AxiosError } from 'axios'
import { all, fork, takeEvery, call, put } from 'redux-saga/effects'
import { getBeersFailur, getBeersSuccess } from '../actionCreators'
import { ACTION_TYPES } from '../actionTypes'
import { getBeers } from '../api'


function* getBeersWorker(action: GetBeersAction):any {
  try {
    const beers = yield call(getBeers)
    yield put(getBeersSuccess(beers))
  } catch (error) {
    const errorAxios = error as AxiosError;
    const errorMessage = errorAxios.message || 'something went wrong';
    yield put(getBeersFailur(errorMessage))
  }
}
function* watchGetBeers():Generator {
  yield takeEvery(ACTION_TYPES.GET_BEERS_FETCH, getBeersWorker);
}
export function* rootSaga():Generator {
  yield all([
    fork(watchGetBeers)
  ])
}
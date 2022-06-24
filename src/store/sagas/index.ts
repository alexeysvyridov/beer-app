import { AxiosError } from 'axios'
import { all, fork, takeEvery, call, put } from 'redux-saga/effects'
import { getBeersFailur, getBeersLoading, getBeersSuccess } from '../actionCreators'
import { ACTION_TYPES } from '../actionTypes'
import { getBeers } from '../api'


function* getBeersWorker(action: GetBeersAction):any {
  yield put(getBeersLoading(true))
  try {
    const beers = yield call(getBeers, action.payload)
    yield put(getBeersSuccess(beers))
  } catch (error) {
    const errorAxios = error as AxiosError;
    const errorMessage = errorAxios.message || 'something went wrong';
    yield put(getBeersFailur(errorMessage))
  } 
  finally {
    yield put(getBeersLoading(false));
  }
}
function* watchGetBeers():Generator {
  yield takeEvery(ACTION_TYPES.GET_BEERS_FETCH, getBeersWorker);
}
function* watchSearchBeers():Generator {
  yield takeEvery(ACTION_TYPES.FETCH_SEARCH_BEER, getBeersWorker);
}
export function* rootSaga():Generator {
  yield all([
    fork(watchGetBeers),
    fork(watchSearchBeers)
  ])
};

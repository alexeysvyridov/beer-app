import { AxiosError } from 'axios'
import { all, fork, takeEvery, call, put, select } from 'redux-saga/effects'
import { addToFavorite, getBeersFailur, getBeersLoading, getBeersSuccess } from '../actionCreators'
import { ACTION_TYPES } from '../actionTypes'
import { getBeersFetch } from '../api'
import { getBeers } from '../selectors'


function* getBeersWorker(action: GetBeersAction):Generator {
  yield put(getBeersLoading(true))
  try {
    const beers = yield call(getBeersFetch, action.payload)
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

function* addToFavoriteWorker(action: AddToFavoriteAction):Generator {
  try {
    const beers:any = yield select(getBeers);

    const currentBeer = beers.find((beer: BeersValues) => beer.id === action.payload);
    
    yield put(addToFavorite(currentBeer));
  } catch (error) {
    
  }
}

function* watchGetBeers():Generator {
  yield takeEvery(ACTION_TYPES.GET_BEERS_FETCH, getBeersWorker);
}
function* watchSearchBeers():Generator {
  yield takeEvery(ACTION_TYPES.FETCH_SEARCH_BEER, getBeersWorker);
}
function* watchAddToFavorite():Generator {
  yield takeEvery(ACTION_TYPES.ADD_TO_FAVORITE_FETCH, addToFavoriteWorker);
}
export function* rootSaga():Generator {
  yield all([
    fork(watchGetBeers),
    fork(watchSearchBeers),
    fork(watchAddToFavorite)
  ])
};

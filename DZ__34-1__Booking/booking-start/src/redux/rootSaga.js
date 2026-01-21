import { call, spawn, all,  } from 'redux-saga/effects';
import {destinationWatcher} from './destination/saga/watchers';
import {hotelsWatcher} from './hotels/saga/watchers';

function* rootSaga() {
  const sagas = [destinationWatcher, hotelsWatcher];
  const retrySagas = sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log("Error rootSagas : ", e);
        }
      }
    })
  });

  yield all(retrySagas);
}

export default rootSaga;
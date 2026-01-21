import { takeEvery } from "redux-saga/effects";
import hotelsAsyncAction from './asyncActions';
import { callGetHotelsWorker } from "./workers";

export function* hotelsWatcher(){
    yield takeEvery(hotelsAsyncAction.getHotelsAction.type, callGetHotelsWorker);
}
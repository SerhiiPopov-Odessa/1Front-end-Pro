import { takeEvery } from "redux-saga/effects";
import destinationAsyncAction from './asyncActions';
import { callGetDestinationWorker } from "./workers";

export function* destinationWatcher(){
    yield takeEvery(destinationAsyncAction.getDestinationAction.type, callGetDestinationWorker);
}
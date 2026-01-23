import {call, put} from 'redux-saga/effects';
import api from '../../../api/axiosApi';
import { setLoading, setItems } from '../slice';

export function* callGetDestinationWorker() {
    try {
        
        yield put(setLoading(true));

        const { data } = yield call(api.getDestination);

        yield put(setItems(data));
    } catch (e) {
        console.error(e);
    } finally {
        yield put(setLoading(false));
    }
}
import {call, put} from 'redux-saga/effects';
import api from '../../../api/axiosApi';
import { setLoading, setItems } from '../slice';
import {push} from 'redux-first-history';
import {routes} from '../../../constants/routes';

export function* callGetHotelsWorker(action) {
    const { payload } = action;

    try {
        yield put(setLoading(true));

        const { data } = yield call(api.getHotels, payload);

        yield put(setItems(data));
        yield put(push(routes.hotels.path));
    } catch (e) {
        console.error(e);
    } finally {
        yield put(setLoading(false));
    }
}
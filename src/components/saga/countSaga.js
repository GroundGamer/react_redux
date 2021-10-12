import {put, takeEvery} from 'redux-saga/effects'
import {addCash, ASYNC_ADD_CASH, ASYNC_GET_CASH, getCash} from "../store/cashReducer";

function* addCashWorker() {
    yield put(addCash())
}

function* getCashWorker() {
    yield put(getCash())
}

export function* cashWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, addCashWorker)
    yield takeEvery(ASYNC_GET_CASH, getCashWorker)
}
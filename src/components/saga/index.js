import {all} from 'redux-saga/effects'
import {cashWatcher} from "./countSaga";
import {customerWatcher} from "./userSaga";

export function* rootWatcher() {
    yield all([cashWatcher(), customerWatcher()])
}
import {put, takeEvery, call} from 'redux-saga/effects'
import axios from "axios";
import {addManyCostumer, ASYNC_ADD_MANY_COSTUMER} from "../store/customerReducer";

const fetchCustomerFromApi = () => axios.get('https://jsonplaceholder.typicode.com/users')

function* fetchCustomerWorker() {
    const response = yield call(fetchCustomerFromApi)
    yield put(addManyCostumer(response.data))
}

export function* customerWatcher() {
    yield takeEvery(ASYNC_ADD_MANY_COSTUMER, fetchCustomerWorker)
}

import axios from "axios";
import {addManyCostumer} from "../store/customerReducer";

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(addManyCostumer(response.data))
    }
}
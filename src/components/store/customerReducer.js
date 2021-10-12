const defaultState = {
    customers: [],
}

export const ADD_COSTUMER = 'ADD_COSTUMER'
export const ADD_MANY_COSTUMER = 'ADD_MANY_COSTUMER'
export const ASYNC_ADD_MANY_COSTUMER = 'ASYNC_ADD_MANY_COSTUMER'
export const REMOVE_COSTUMER = 'REMOVE_COSTUMER'

export const costumerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COSTUMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case ADD_MANY_COSTUMER:
            return {
                ...state,
                customers: [...state.customers, ...action.payload]
            }
        case REMOVE_COSTUMER:
            return {
                ...state,
                customers: state.customers.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export const addCostumer = (costumer) => ({type: ADD_COSTUMER, payload: costumer})
export const addManyCostumer = (costumers) => ({type: ADD_MANY_COSTUMER, payload: costumers})
export const asyncAddManyCostumer = (costumers) => ({type: ASYNC_ADD_MANY_COSTUMER, payload: costumers})
export const removeCostumer = (costumer_id) => ({type: REMOVE_COSTUMER, payload: costumer_id})

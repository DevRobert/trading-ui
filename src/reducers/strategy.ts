import { FETCH_STRATEGY_PARAMETERS_REQUESTED, FETCH_STRATEGY_PARAMETERS_SUCCEEDED, FETCH_STRATEGY_PARAMETERS_FAILED } from "../actions";

const defaultState = {
    isLoading: false,
    errorMessage: "",
    trading: {
        name: "",
        parameters: [{
            name: "",
            value: ""
        }]
    },
    commission: {
        name: "",
        parameters: [{
            name: "",
            value: ""
        }]
    }
}

const strategyReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_STRATEGY_PARAMETERS_REQUESTED:
            return {
                ...state,
                isLoading: true,
                errorMessage: "",
                trading: {
                    name: "",
                    parameters: []
                },
                commission: {
                    name: "",
                    parameters: []
                }
            }

        case FETCH_STRATEGY_PARAMETERS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                trading: action.trading,
                commission: action.commission
            }

        case FETCH_STRATEGY_PARAMETERS_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }

        default:
            return state
    }
}

export default strategyReducer

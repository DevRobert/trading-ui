import { UPDATE_REGISTER_TRANSACTION_FIELDS, REGISTER_TRANSACTION_REQUESTED, REGISTER_TRANSACTION_SUCCEEDED, REGISTER_TRANSACTION_FAILED } from "../../actions";

const defaultState = {
    submitting: false,
    errorMessage: "",
    fields: {
        transactionType: "Buy",
        isin: "DE00",
        quantity: 1,
        totalPrice: 0.0,
        commission: 0.0
    }
}

const registerTransactionReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case UPDATE_REGISTER_TRANSACTION_FIELDS:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...action.fields,
                }
            }

        case REGISTER_TRANSACTION_REQUESTED:
            return {
                ...state,
                submitting: true,
                errorMessage: ""
            }

        case REGISTER_TRANSACTION_SUCCEEDED:
            return {
                ...state,
                submitting: false
            }

        case REGISTER_TRANSACTION_FAILED:
            return {
                ...state,
                submitting: false,
                errorMessage: action.error.message
            }

        default:
            return state
    }
}

export default registerTransactionReducer

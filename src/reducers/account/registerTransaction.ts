import { UPDATE_REGISTER_TRANSACTION_FIELDS, REGISTER_TRANSACTION_REQUESTED, REGISTER_TRANSACTION_SUCCEEDED, REGISTER_TRANSACTION_FAILED, FETCH_REGISTER_TRANSACTION_INSTRUMENTS_FAILED, FETCH_REGISTER_TRANSACTION_INSTRUMENTS_REQUESTED, FETCH_REGISTER_TRANSACTION_INSTRUMENTS_SUCCEEDED } from "../../actions";

const defaultState = {
    succeeded: false,
    submitting: false,
    errorMessage: "",
    fields: {
        transactionType: "Buy",
        isin: "DE00",
        quantity: 1,
        totalPrice: 0.0,
        commission: 0.0
    },
    instruments: [{
        isin: "A",
        name: "AA"
    }]
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
                succeeded: false,
                submitting: true,
                errorMessage: ""
            }

        case REGISTER_TRANSACTION_SUCCEEDED:
            return {
                ...state,
                succeeded: true,
                submitting: false
            }

        case REGISTER_TRANSACTION_FAILED:
            return {
                ...state,
                submitting: false,
                errorMessage: action.error.message
            }

        case FETCH_REGISTER_TRANSACTION_INSTRUMENTS_REQUESTED:
            return {
                ...state,
                instruments: []
            }

        case FETCH_REGISTER_TRANSACTION_INSTRUMENTS_SUCCEEDED:
            return {
                ...state,
                instruments: action.instruments
            }

        default:
            return state
    }
}

export default registerTransactionReducer

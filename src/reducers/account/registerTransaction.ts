import { UPDATE_REGISTER_TRANSACTION_FIELDS, REGISTER_TRANSACTION_REQUESTED, REGISTER_TRANSACTION_SUCCEEDED, REGISTER_TRANSACTION_FAILED, FETCH_REGISTER_TRANSACTION_INSTRUMENTS_FAILED, FETCH_REGISTER_TRANSACTION_INSTRUMENTS_REQUESTED, FETCH_REGISTER_TRANSACTION_INSTRUMENTS_SUCCEEDED } from "../../actions";

// Note: toISOString() returns always UTC string
// So, the timezone offset needs to be considered in order to get always the current local date string
const date = new Date()
const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
const localDateString = localDate.toISOString().substr(0, 10)

const defaultState = {
    succeeded: false,
    submitting: false,
    errorMessage: "",
    fields: {
        date: localDateString,
        transactionType: "Buy",
        isin: "DE00",
        quantity: 1,
        totalPrice: 0.0,
        commission: 0.0,
        amount: 0.0,
        profitCategory: "Sale",
        taxPeriodYear: new Date().getFullYear(),
        taxedProfit: 0.0,
        paidTaxes: 0.0
    },
    show: {
        isin: true,
        quantity: true,
        totalPrice: true,
        commission: true,
        amount: false,
        profitCategory: false,
        taxPeriodYear: false,
        taxedProfit: false,
        paidTaxes: false
    },
    instruments: [{
        isin: "A",
        name: "AA"
    }]
}

const registerTransactionReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case UPDATE_REGISTER_TRANSACTION_FIELDS:
            let newState = {
                ...state,
                fields: {
                    ...state.fields,
                    ...action.fields,
                }
            }

            if(newState.fields.transactionType === 'Dividend') {
                newState.show = {
                    ...newState.show,
                    isin: true,
                    quantity: false,
                    totalPrice: false,
                    commission: false,
                    amount: true,
                    taxPeriodYear: false,
                    profitCategory: false,
                    taxedProfit: false,
                    paidTaxes: false
                }
            }
            else if(newState.fields.transactionType === 'TaxPayment') {
                newState.show = {
                    ...newState.show,
                    isin: false,
                    quantity: false,
                    totalPrice: false,
                    commission: false,
                    amount: false,
                    taxPeriodYear: true,
                    profitCategory: true,
                    taxedProfit: true,
                    paidTaxes: true
                }
            }
            else {
                newState.show = {
                    ...newState.show,
                    isin: true,
                    quantity: true,
                    totalPrice: true,
                    commission: true,
                    amount: false,
                    taxPeriodYear: false,
                    profitCategory: false,
                    taxedProfit: false,
                    paidTaxes: false
                }
            }

            return newState

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

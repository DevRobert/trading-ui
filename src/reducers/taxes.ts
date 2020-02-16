import { FETCH_TAX_REPORT_REQUESTED, FETCH_TAX_REPORT_SUCEEDED, FETCH_TAX_REPORT_FAILED } from '../actions'

const defaultState = {
    isLoading: false,
    errorMessage: '',
    taxPeriods: [{
        year: 2000,
        profitCategories: [{
            name: "Sale",
            lossCarryforward: 0.0,
            accruedProfit: 0.0,
            clearedProfit: 0.0,
            reservedTaxes: 0.0,
            paidTaxes: 0.0
        }]
    }]
}

const taxesReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_TAX_REPORT_REQUESTED:
            return {
                ...state,
                taxPeriods: [],
                isLoading: true,
                errorMessage: null,
            }

        case FETCH_TAX_REPORT_SUCEEDED:
            return {
                ...state,
                taxPeriods: action.taxPeriods,
                isLoading: false
            }

        case FETCH_TAX_REPORT_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }

        default:
            return state
    }
}

export default taxesReducer

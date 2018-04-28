import { FETCH_SCORES_REQUESTED, FETCH_SCORES_SUCCEEDED, FETCH_SCORES_FAILED } from "../actions";

const defaultState = {
    scores: [
        {
            isin: 'DE0008430026',
            name: 'Münchener Rückversicherungs-Gesellschaft',
            score: 0.8322323213123,
            text: 'Buy'
        },
        {
            isin: 'DE0008232125',
            name: 'Lufthansa',
            score: 0.00020020,
            text: 'Do not buy'
        }
    ],
    isLoading: false,
    errorMessage: ""
}

const scoringReducer = (state = defaultState, action: any) => {
    switch(action.type) {
        case FETCH_SCORES_REQUESTED:
            return {
                ...state,
                scores: [],
                isLoading: true,
                errorMessage: undefined
            }

        case FETCH_SCORES_SUCCEEDED:
            return {
                ...state,
                scores: action.scores,
                isLoading: false
            }
        
        case FETCH_SCORES_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }

        default:
            return state
    }
}

export default scoringReducer

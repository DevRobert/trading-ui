export const FETCH_SCORES_REQUESTED = 'FETCH_SCORES_REQUESTED'
export const FETCH_SCORES_SUCCEEDED = 'FETCH_SCORES_SUCCEEDED'
export const FETCH_SCORES_FAILED = 'FETCH_SCORES_FAILED'

import * as ScoringApi from '../models/scoring_api'

function fetchScoresRequested() {
    return {
        type: FETCH_SCORES_REQUESTED
    }
}

function fetchScoresSucceeded(scores: any) {
    return {
        type: FETCH_SCORES_SUCCEEDED,
        scores
    }
}

function fetchScoresFailed(error: any) {
    return {
        type: FETCH_SCORES_FAILED,
        error
    }
}

export function fetchScores() {
    return (dispatch: any) => {
        dispatch(fetchScoresRequested())

        ScoringApi.getScores().then(response => {
            dispatch(fetchScoresSucceeded(response.scores))
        }).catch(error => [
            dispatch(fetchScoresFailed(error))
        ])
    }
}

export const FETCH_ACCOUNT_POSITIONS_REQUESTED = 'FETCH_ACCOUNT_POSITIONS_REQUESTED'
export const FETCH_ACCOUNT_POSITIONS_SUCCEEDED = 'FETCH_ACCOUNT_POSITIONS_SUCEEDED'
export const FETCH_ACCOUNT_POSITIONS_FAILED = 'FETCH_ACCOUNT_POSITIONS_FAILED'

export const FETCH_ACCOUNT_TRANSACTIONS_REQUESTED = 'FETCH_ACCOUNT_TRANSACTIONS_REQUESTED'
export const FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED = 'FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED'
export const FETCH_ACCOUNT_TRANSACTIONS_FAILED = 'FETCH_ACCOUNT_TRANSACTIONS_FAILED'

export const FETCH_SCORES_REQUESTED = 'FETCH_SCORES_REQUESTED'
export const FETCH_SCORES_SUCCEEDED = 'FETCH_SCORES_SUCCEEDED'
export const FETCH_SCORES_FAILED = 'FETCH_SCORES_FAILED'

import * as AccountApi from '../models/account_api'
import * as ScoringApi from '../models/scoring_api'

function fetchAccountPositionsRequested() {
    return {
        type: FETCH_ACCOUNT_POSITIONS_REQUESTED
    }
}

function fetchAccountPositionsSucceeded(positions: any, summary: any) {
    return {
        type: FETCH_ACCOUNT_POSITIONS_SUCCEEDED,
        positions,
        summary
    }
}

function fetchAccountPositionsFailed(error: any) {
    return {
        type: FETCH_ACCOUNT_POSITIONS_FAILED,
        error
    }
}

export function fetchAccountPositions() {
    return (dispatch: any) => {
        dispatch(fetchAccountPositionsRequested())

        AccountApi.getAccountPositions().then(response => {
            dispatch(fetchAccountPositionsSucceeded(response.positions, response.summary))
        }).catch(error => {
            dispatch(fetchAccountPositionsFailed(error))
        })
    }
}

function fetchAccountTransactionsRequested() {
    return {
        type: FETCH_ACCOUNT_TRANSACTIONS_REQUESTED
    }
}

function fetchAccountTransactionsSucceeded(transactions: any) {
    return {
        type: FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED,
        transactions
    }
}

function fetchAccountTransactionsFailed(error: any) {
    return {
        type: FETCH_ACCOUNT_TRANSACTIONS_FAILED,
        error
    }
}

export function fetchAccountTransactions() {
    return (dispatch: any) => {
        dispatch(fetchAccountTransactionsRequested())

        AccountApi.getAccountTransactions().then(response => {
            dispatch(fetchAccountTransactionsSucceeded(response.transactions))
        }).catch(error => {
            dispatch(fetchAccountTransactionsFailed(error))
        })
    }
}

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

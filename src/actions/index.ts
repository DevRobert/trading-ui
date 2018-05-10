export const FETCH_ACCOUNT_POSITIONS_REQUESTED = 'FETCH_ACCOUNT_POSITIONS_REQUESTED'
export const FETCH_ACCOUNT_POSITIONS_SUCCEEDED = 'FETCH_ACCOUNT_POSITIONS_SUCEEDED'
export const FETCH_ACCOUNT_POSITIONS_FAILED = 'FETCH_ACCOUNT_POSITIONS_FAILED'

export const FETCH_ACCOUNT_TRANSACTIONS_REQUESTED = 'FETCH_ACCOUNT_TRANSACTIONS_REQUESTED'
export const FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED = 'FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED'
export const FETCH_ACCOUNT_TRANSACTIONS_FAILED = 'FETCH_ACCOUNT_TRANSACTIONS_FAILED'

export const FETCH_SCORES_REQUESTED = 'FETCH_SCORES_REQUESTED'
export const FETCH_SCORES_SUCCEEDED = 'FETCH_SCORES_SUCCEEDED'
export const FETCH_SCORES_FAILED = 'FETCH_SCORES_FAILED'

export const UPDATE_REGISTER_TRANSACTION_FIELDS = 'UPDATE_REGISTER_TRANSACTION_FIELDS'
export const REGISTER_TRANSACTION_REQUESTED = 'REGISTER_TRANSACTION_REQUESTED'
export const REGISTER_TRANSACTION_SUCCEEDED = 'REGISTER_TRANSACTION_SUCCEEDED'
export const REGISTER_TRANSACTION_FAILED = 'REGISTER_TRANSACTION_FAILED'

import * as AccountApi from '../models/account_api'
import * as ScoringApi from '../models/scoring_api'

function fetchAccountPositionsRequested() {
    return {
        type: FETCH_ACCOUNT_POSITIONS_REQUESTED
    }
}

function fetchAccountPositionsSucceeded(positions: any, summary: any, marketPricesDate: string) {
    return {
        type: FETCH_ACCOUNT_POSITIONS_SUCCEEDED,
        positions,
        summary,
        marketPricesDate
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
            dispatch(fetchAccountPositionsSucceeded(response.positions, response.summary, response.marketPricesDate))
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

function fetchScoresSucceeded(scores: any, marketPricesDate: string) {
    return {
        type: FETCH_SCORES_SUCCEEDED,
        scores,
        marketPricesDate
    }
}

function fetchScoresFailed(error: any) {
    return {
        type: FETCH_SCORES_FAILED,
        error
    }
}

export function fetchScores(type: string) {
    return (dispatch: any) => {
        dispatch(fetchScoresRequested())

        ScoringApi.getScores(type).then(response => {
            dispatch(fetchScoresSucceeded(response.scores, response.marketPricesDate))
        }).catch(error => [
            dispatch(fetchScoresFailed(error))
        ])
    }
}

export function updateRegisterTransactionFields(fields: any) {
    return {
        type: UPDATE_REGISTER_TRANSACTION_FIELDS,
        fields
    }
}

function registerTransactionRequested() {
    return {
        type: REGISTER_TRANSACTION_REQUESTED
    }
}

function registerTransactionSucceeded(transactionId: number) {
    return {
        type: REGISTER_TRANSACTION_SUCCEEDED,
        transactionId
    }
}

function registerTransactionFailed(error: any) {
    return {
        type: REGISTER_TRANSACTION_FAILED,
        error
    }
}

export function registerTransaction() {
    return (dispatch: any, getState: any) => {
        dispatch(registerTransactionRequested())

        const transation = {
            ...getState().account.registerTransaction.fields
        }

        AccountApi.registerTransaction(transation).then(transationId => {
            dispatch(registerTransactionSucceeded(transationId))
        }).catch(error => {
            dispatch(registerTransactionFailed(error))
        })
    }
}

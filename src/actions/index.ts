export const FETCH_ACCOUNT_POSITIONS_REQUESTED = 'FETCH_ACCOUNT_POSITIONS_REQUESTED'
export const FETCH_ACCOUNT_POSITIONS_SUCCEEDED = 'FETCH_ACCOUNT_POSITIONS_SUCEEDED'
export const FETCH_ACCOUNT_POSITIONS_FAILED = 'FETCH_ACCOUNT_POSITIONS_FAILED'

export const FETCH_ACCOUNT_TRANSACTIONS_REQUESTED = 'FETCH_ACCOUNT_TRANSACTIONS_REQUESTED'
export const FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED = 'FETCH_ACCOUNT_TRANSACTIONS_SUCCEEDED'
export const FETCH_ACCOUNT_TRANSACTIONS_FAILED = 'FETCH_ACCOUNT_TRANSACTIONS_FAILED'

export const FETCH_STRATEGY_PARAMETERS_REQUESTED = 'FETCH_STRATEGY_PARAMETERS_REQUESTED'
export const FETCH_STRATEGY_PARAMETERS_SUCCEEDED = 'FETCH_STRATEGY_PARAMETERS_SUCCEEDED'
export const FETCH_STRATEGY_PARAMETERS_FAILED = 'FETCH_STRATEGY_PARAMETERS_FAILED'

export const FETCH_SCORES_REQUESTED = 'FETCH_SCORES_REQUESTED'
export const FETCH_SCORES_SUCCEEDED = 'FETCH_SCORES_SUCCEEDED'
export const FETCH_SCORES_FAILED = 'FETCH_SCORES_FAILED'

export const UPDATE_REGISTER_TRANSACTION_FIELDS = 'UPDATE_REGISTER_TRANSACTION_FIELDS'
export const REGISTER_TRANSACTION_REQUESTED = 'REGISTER_TRANSACTION_REQUESTED'
export const REGISTER_TRANSACTION_SUCCEEDED = 'REGISTER_TRANSACTION_SUCCEEDED'
export const REGISTER_TRANSACTION_FAILED = 'REGISTER_TRANSACTION_FAILED'

export const FETCH_TRADES_REQUESTED = 'FETCH_TRADES_REQUESTED'
export const FETCH_TRADES_SUCCEEDED = 'FETCH_TRADES_SUCCEEDED'
export const FETCH_TRADES_FAILED = 'FETCH_TRADES_FAILED'

export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'
export const FETCH_INSTRUMENTS_FAILED = 'FETCH_INSTRUMENTS_FAILED'

import * as AccountApi from '../models/account_api'
import * as StrategyApi from '../models/strategy_api'
import * as ScoringApi from '../models/scoring_api'
import * as TradesApi from '../models/trades_api'
import * as MarketApi from '../models/market_api'

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

function fetchStrategyParametersRequested() {
    return {
        type: FETCH_STRATEGY_PARAMETERS_REQUESTED
    }
}

function fetchStrategyParametersSucceeded(trading: any, commission: any) {
    return {
        type: FETCH_STRATEGY_PARAMETERS_SUCCEEDED,
        trading,
        commission
    }
}

function fetchStrategyParametersFailed(error: any) {
    return {
        type: FETCH_STRATEGY_PARAMETERS_FAILED,
        error
    }
}

export function fetchStrategyParameters() {
    return (dispatch: any) => {
        dispatch(fetchStrategyParametersRequested())

        StrategyApi.getStrategyParameters().then((response: any) => {
            dispatch(fetchStrategyParametersSucceeded(response.trading, response.commission))
        }).catch((error: any) => {
            dispatch(fetchStrategyParametersFailed(error))
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

function fetchTradesRequested() {
    return {
        type: FETCH_TRADES_REQUESTED
    }
}

function fetchTradesSuceeded(response: any) {
    return {
        type: FETCH_TRADES_SUCCEEDED,
        trades: response.trades,
        marketPricesDate: response.marketPricesDate
    }
}

function fetchTradesFailed(error: any) {
    return {
        type: FETCH_TRADES_FAILED,
        error
    }
}

export function fetchTrades() {
    return (dispatch: any) => {
        dispatch(fetchTradesRequested())

        TradesApi.getTrades().then((response: any) => {
            dispatch(fetchTradesSuceeded(response))
        }).catch((error: any) => {
            dispatch(fetchTradesFailed(error))
        })
    }
}

function fetchInstrumentsRequested() {
    return {
        type: FETCH_INSTRUMENTS_REQUESTED
    }
}

function fetchInstrumentsSucceeded(date: string, instruments: any) {
    return {
        type: FETCH_INSTRUMENTS_SUCCEEDED,
        date,
        instruments
    }
}

function fetchInstrumentsFailed(error: any) {
    return {
        type: FETCH_INSTRUMENTS_FAILED,
        error
    }
}

export function fetchInstruments() {
    return (dispatch: any) => {
        dispatch(fetchInstrumentsRequested())

        MarketApi.getInstruments().then((response: any) => {
            dispatch(fetchInstrumentsSucceeded(response.date, response.instruments))
        }).catch((error: any) => {
            dispatch(fetchInstrumentsFailed(error))
        })
    }
}

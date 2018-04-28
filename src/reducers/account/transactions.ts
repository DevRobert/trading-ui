const defaultState = {
    transactions: [
        {
            date: '2018-04-23',
            type: 'Buy',
            isin: 'DE000BAY0017',
            name: 'Bayer',
            quantity: 1000,
            marketPrice: 2132.23232,
            totalPrice: 23432432.32424,
            commission: 10.0
        },
        {
            date: '2018-04-24',
            type: 'Sell',
            isin: 'DE000BAY0017',
            name: 'Bayer',
            quantity: 1000,
            marketPrice: 2132.23232,
            totalPrice: 23432432.32424,
            commission: 10.0
        }
    ]    
}

const transactionsReducer = (state = defaultState, action: any) => {
    return state
}

export default transactionsReducer

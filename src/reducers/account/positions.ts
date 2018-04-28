const defaultState = {
    positions: [
        {
            isin: "DE0008404005",
            name: "Allianz",
            quantity: 3243,
            marketPrice: 1234.23213,
            totalPrice: 43242342.1321231
        },
        {
            isin: "DE000BAY0017",
            name: "Bayer",
            quantity: 0,
            marketPrice: 213.123123,
            totalPrice: 0
        },
        {
            isin: "DE0008430026",
            name: "Münchener Rückversicherungs-Gesellschaft",
            quantity: 10,
            marketPrice: 123.21313,
            totalPrice: 1232.13130
        }
    ],
    summary: {
        totalStocksQuantity: 32323,
        totalStocksPrice: 234324.2342,
        availableMoney: 500.0,
        totalBalance: 23233.2323
    }
}

const positionsReducer = (state = defaultState, action: any) => {
    return state
}

export default positionsReducer

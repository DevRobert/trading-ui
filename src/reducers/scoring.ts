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
    ]
}

const scoringReducer = (state = defaultState, action: any) => {
    return state
}

export default scoringReducer

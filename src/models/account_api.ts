import validateResponse from './validate_response'

const baseUri = 'http://localhost:8080/api'

export async function getAccountPositions() {
    const requestUri = baseUri + '/account/positions/'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

export async function getAccountTransactions() {
    const requestUri = baseUri + '/account/transactions/'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

export async function registerTransaction(transaction: any): Promise<number> {
    const requestUri = baseUri + '/account/transactions/'
    
    const response = await fetch(requestUri, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            ...transaction
        })
    })

    await validateResponse(response)

    const responseData = await response.json()
    return responseData.transactionId
}

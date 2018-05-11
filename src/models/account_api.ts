import validateResponse from './validate_response'
import ApiConfiguration from './api_configuration'

export async function getAccountPositions() {
    const requestUri = ApiConfiguration.baseUri + '/account/positions/'

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
    const requestUri = ApiConfiguration.baseUri + '/account/transactions/'

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
    const requestUri = ApiConfiguration.baseUri + '/account/transactions/'
    
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

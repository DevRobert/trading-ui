import validateResponse from './validate_response'
import ApiConfiguration from './api_configuration'

export async function getScores(type: string) {
    if(type !== 'buy' && type !== 'sell') {
        throw new Error('Type must be "buy" or "sell".')
    }
    
    const requestUri = ApiConfiguration.baseUri + '/scoring/' + type

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

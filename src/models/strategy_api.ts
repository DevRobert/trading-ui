import validateResponse from './validate_response'
import ApiConfiguration from './api_configuration'

export async function getStrategyParameters() {
    const requestUri = ApiConfiguration.baseUri + '/strategy'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

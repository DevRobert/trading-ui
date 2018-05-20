import validateResponse from './validate_response'
import ApiConfiguration from './api_configuration'

export async function getInstruments() {
    const requestUri = ApiConfiguration.baseUri + '/market/instruments/'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

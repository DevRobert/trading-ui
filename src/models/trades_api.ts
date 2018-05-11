import ApiConfiguration from './api_configuration';
import validateResponse from './validate_response';

export async function getTrades() {
    const requestUri = ApiConfiguration.baseUri + '/trades/'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

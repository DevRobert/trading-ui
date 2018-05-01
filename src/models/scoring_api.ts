import validateResponse from './validate_response'

const baseUri = 'http://localhost:8080/api'

export async function getScores() {
    const requestUri = baseUri + '/scoring'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    await validateResponse(response)

    return response.json()
}

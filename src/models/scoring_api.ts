const baseUri = 'http://localhost:8080/api'

async function validateResponse(response: Response) {
    if(response.ok) {
        return
    }

    const responseData = await response.json()

    const error = new Error(responseData)
    throw error
}

export async function getScores() {
    const requestUri = baseUri + '/scoring'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json'
        })
    })

    validateResponse(response)

    return response.json()
}

export default async function validateResponse(response: Response) {
    if(response.ok) {
        return
    }

    const responseData = await response.json()

    const error = new Error(responseData)
    throw error
}

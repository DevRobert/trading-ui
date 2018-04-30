export default async function validateResponse(response: Response) {
    if(response.ok) {
        return
    }

    const responseData = await response.json()

    throw new Error(responseData.message)
}

import { expect } from '@playwright/test';
async function postRequest(request, endpoint, requestBody) {
    try {
        const response = await request.post(endpoint, {
            data: {
                requestBody
            }
        })
        console.log(`Sending POST request to ${endpoint}`)
        console.log(`Setting payload to ${JSON.stringify(requestBody)}`)
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toEqual(201)
        return response
    }
    catch(error) {
        console.log(error)
        return error
    }
}
export default postRequest
import { expect } from '@playwright/test';
async function getRequest(request, endpoint) {
    try {
        const response = await request.get(endpoint)
        console.log(`Sending GET request to ${endpoint}`)
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toEqual(200)
        return response
    }
    catch(error) {
        console.log(error)
        return error
    }
}
export default getRequest;
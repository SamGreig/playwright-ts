import { test, expect } from '@playwright/test';
import postRequest from '../helpers/api/requests/postRequest';
import getRequest from '../helpers/api/requests/getRequest';
import jsonplaceholderGetResponse from '../helpers/api/responses/get/jsonPlaceholderGetResponse.json';
import createPost from '../helpers/api/requests/requestBody/post/createPost.json'

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

test.beforeEach(async ({ page }) => {

});

test.describe('API Tests', () => {
    /* Get Request */
    test('Given I do a get request', async ({ request }) => {
        const responseBody = jsonplaceholderGetResponse;
        const get = await getRequest(request, `${endpoint}/1`)
        expect( await get.json() === responseBody );
    });

    /* Post Request */
    test('Given I do a post request', async ({ request }) => {
        const post = await postRequest(request, endpoint, createPost)
    });
});
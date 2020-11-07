import { apiClient } from '../util/apiClient';

const baseUrl = 'https://reqres.in/api/users';
const posteUrl = 'http://127.0.0.1:8081/users';

export const userService = {
    getAll,
    getById,
    create
};

function getAll() {
    return apiClient.get(baseUrl);
}

function getById(id) {
    return apiClient.get(`${baseUrl}/${id}`);
}

function create(params,id) {
    return apiClient.post(`${posteUrl}/${id}`, params);
}



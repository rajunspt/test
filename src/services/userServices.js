import { apiClient } from '../util/apiClient';

const baseUrl = 'https://reqres.in/api/users';

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
    return apiClient.post(`${baseUrl}/${id}`, params);
}



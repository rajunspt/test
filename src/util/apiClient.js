import axios from 'axios';

export const apiClient = {
    get,
    post
}

function get(url) {
    
    return axios.get(url)
    .then(response => {
        if(response.data.data){
            return response.data.data;
        } else {
            return [];
        }
       
    });
}

function post(url, body) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: body
    // };
    return axios.post(url, body)
        .then(response => response)
        .catch((error) => {
          throw error;
        });
}


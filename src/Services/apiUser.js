import axios from 'axios'

const apiUrl = 'http://localhost:5000/users'

export async function getAllUsers(){
    return await axios.get(`${apiUrl}/getAllUsers`)
}

export async function AddUserClient(userdata){
    return await axios.get(`${apiUrl}/AddUserClient`,userdata)
}

export async function deleteUser(id){
    return await axios.get(`${apiUrl}/deleteUser/${id}`)
}
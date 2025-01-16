import axios from 'axios'

const apiUrl = 'http://localhost:5000/users'

export async function getAllUsers(){
    return await axios.get(`${apiUrl}/getAllUsers`)
}

export async function AddUserClient(userdata){
    return await axios.post(`${apiUrl}/addUser`,userdata)
}

export async function deleteUser(id){
    return await axios.delete(`${apiUrl}/deleteUser/${id}`)
}
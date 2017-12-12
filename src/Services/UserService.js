import axios from 'axios'
import AuthService from '../Services/AuthService'

const UserService = {
  save: function(user) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('authToken')
    return axios.post(process.env.REACT_APP_BASE_URL + '/myroute/', user)
  },

  getUsers: function() {
    return axios
      .get(process.env.REACT_APP_BASE_URL + '/users/')
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },

  getUser: function(id) {
    return axios
      .get(process.env.REACT_APP_BASE_URL + '/myroute/' + id)
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },

  getSelf: function() {
    axios.defaults.headers.common['authorization'] = AuthService.getToken()

    return axios
      .get(process.env.REACT_APP_BASE_URL + '/identity/user.json')
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },
}

export default UserService

import axios from "axios";
const USERAPI_URL = "https://62.84.114.46:8080/v1/";
axios.defaults.withCredentials = true

class UserApiService {
  login(email, password) {
    return axios
      .post(USERAPI_URL + "login", { email, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
	return axios
	  .post(USERAPI_URL + "logout", {})
	  .then((response) => {
		 
		  return response.data;
	  });
  }
  register(email, name, password,  patronymic,  phone, surname) {
    return axios
	.post(USERAPI_URL + "user", { email, name, password,  patronymic,  phone, surname})
	.then((response)=>{
		if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
	}); 
  }
}
export default new UserApiService();
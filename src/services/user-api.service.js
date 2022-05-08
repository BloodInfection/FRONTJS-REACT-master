import axios from "axios";
const USERAPI_URL = "http://62.84.114.46:8079/v1/";
const sessionid = "sessionid"

class UserApiService {
  buildHeader() {
    axios.defaults.headers.common[sessionid] = localStorage.getItem(sessionid)
  }

  login(email, password) {
    this.buildHeader();

    return axios
      .post(USERAPI_URL + "login", { email, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem(sessionid, response.data.session);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
  this.buildHeader();
	return axios
	  .post(USERAPI_URL + "logout", {})
	  .then((response) => {
		  return response.data;
	  });
  }
  register(email, name, password,  patronymic,  phone, surname) {
    this.buildHeader();
    return axios
	.post(USERAPI_URL + "user", { email, name, password,  patronymic,  phone, surname}, {headers: {
    sessionid: localStorage.getItem(sessionid)
  }})
	.then((response)=>{
    return response.data;
	}); 
  }
}
export default new UserApiService();
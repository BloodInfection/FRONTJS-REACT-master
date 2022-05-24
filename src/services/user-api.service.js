import axios from "axios";
import store from '../store'
import { logout } from '../actions/user-api.action';
import { ReactReduxContext } from "react-redux";
const USERAPI_URL = "http://62.84.114.46:8080/v1/";
const sessionid = "sessionid"

class UserApiService {
  buildHeader() {
    let session = localStorage.getItem(sessionid);
    console.log("session:", session)
    if (session === null) {
      console.log("deleting:", session)
      delete axios.defaults.headers.common[sessionid];
    } else {
      axios.defaults.headers.common[sessionid] = session;
    }
  }

  login(email, password) { //-------------------------------P O S T-----------------------------------
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
	  .post(USERAPI_URL + "user", { email, name, password,  patronymic,  phone, surname})
	.then((response)=>{
    return response.data;
	}); 
  }

  addToCart(finalProductId, quantity) {
    this.buildHeader();
    return axios
      .post(USERAPI_URL + "cart", { finalProductId, quantity })
      .then((response) => {
        return response.data;
      });
  }

  postOrder() {
    this.buildHeader();
    return axios
      .post(USERAPI_URL + "order")
      .then((response) => {
        return response.data;
      });
  }

  postFavorite(productId) {
    this.buildHeader();
    return axios
      .post(USERAPI_URL + "favorite", {productId})
      .then((response) => {
        return response.data;
      });
  }

  GetCartList() {//----------------------G E T-------------------------------------------------------------------------
    this.buildHeader();
    return axios
      .get(USERAPI_URL + "cart/list")
      .then((response) => {
        return response.data;
      });
  }

  GetOrderList() {
    this.buildHeader();
    return axios
      .get(USERAPI_URL + "order/list")
      .then((response) => {
        return response.data;
      });
  }

  GetFavorite() {
    this.buildHeader();
    return axios
      .get(USERAPI_URL + "favorite")
      .then((response) => {
        return response.data;
      });
  }

  DeleteCartItem(id) {//----------------------D E L E T E----------------------------------------------------------------------
    this.buildHeader();
    return axios
      .delete(USERAPI_URL + "cart", {params:{id}})
      .then((response) => {
        return
      });
  }
  
  DeleteCartAll() {
    this.buildHeader();
    return axios
      .delete(USERAPI_URL + "cart/all")
      .then((response) => {
        return response.data;
      });
  }

  DeleteFavorite(id) {
    this.buildHeader();
    return axios
      .delete(USERAPI_URL + "favorite", {params:{id}})
      .then((response) => {
        return response.data;
      });
  }

  UpdateCart(finalProductId, quantity) {//----------------------P U T / U P D A T E----------------------------------------------------------------------
    this.buildHeader();
    return axios
      .put(USERAPI_URL + "cart", {finalProductId, quantity})
      .then((response) => {
        return 
      });
  }

}
export default new UserApiService();
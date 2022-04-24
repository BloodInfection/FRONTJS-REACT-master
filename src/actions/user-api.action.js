import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "../actions/types";
import UserAPIservice from "../services/user-api.service";

export const register = (email, name, password, patronymic, phone, surname) => (dispatch) => {
  return UserAPIservice.register(email, name, password, patronymic, phone, surname).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: response},
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const login = (email, password) => (dispatch) => {
  return UserAPIservice.login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response },
      });
      return Promise.resolve();
    },
    (error) => {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      if (error.response.status === 400) {
        message = "Неправильный логин или пароль"
      }
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ //когда вызываем диспатч кладется новая инфа в редьюсер. Сессия протухла, меня там уже нет, но  я и так уже вышла. Из редьюсера они удалялись только в случае успеха логаута, а не в случае просроченной сессии.
    type: LOGOUT,
  });
  UserAPIservice.logout().then(() => {
  
    return Promise.resolve();
  },
  (error) => {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
    return Promise.reject();
  });
};
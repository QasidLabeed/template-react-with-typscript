/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import * as authType from "./auth.types";
import * as commonType from "../common/common.types";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/baseUrl";
//For Login
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/SetAuthToken"
// import store from "../../store";
// import messages from "../../constants/messages";
// import swal from "sweetalert";




export const signIn = (userData, errorCallback) => async (dispatch) => {
  dispatch({
    type: commonType.ADD_LOADER,
    payload: "SILoading",
  });
  try {
    await axios
      .post(`${baseUrl}/auth/signin`, userData)
      .then((res) => {
        console.log('res', res)
        dispatch({
          type: commonType.REMOVE_LOADER,
          payload: "SILoading",
        });
        const { accessToken } = res.data?.data;
        localStorage.setItem("jwtToken", accessToken);
        setAuthToken(accessToken);

        //Decode Token
        const decodedUser = jwt_decode(accessToken);

        //Set current User
        dispatch(setCurrentUser(decodedUser));
      })
      .catch((err) => {
        const errors: Array<any> = [];
        dispatch({
          type: commonType.REMOVE_LOADER,
          payload: "SILoading",
        });
        console.log("err.response", err?.response);
        if (err?.response?.data?.errors[0]?.message?.includes('email') || err?.response?.data?.errors[0]?.message?.includes('Email')) {
          errors.push(["email", err.response.data.errors[0].message]);
        }
        // if (err?.response?.data?.errors[0].message?.includes("password")) {
        //   errors.push(["password", err.response.data.errors[0].message]);
        // }


        errorCallback("loginFormError", errors);
        dispatch({
          type: commonType.GET_ERRORS,
          payload: null,
        });
      });
  } catch (e) {
    alert(e)
    toast.configure();
    toast("Backend Service unavailable", {
      position: toast.POSITION.TOP_RIGHT,
      className: "failure",
      autoClose: 2000,
      toastId: 2,
    });
  }
};

export const forgotPassword = (data, errorCallback) => (dispatch) => {
  dispatch({
    type: commonType.ADD_LOADER,
    payload: "forgetPasswordLoading",
  });
  axios({
    url: `${baseUrl}/forgot`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  })
    .then(function (resp) {
      console.log("rsp from backend:", resp);
      if (resp.data.success === true) {
        toast.configure();
        toast(resp.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "Success",
          autoClose: 2000,
          toastId: 2,
        });

        dispatch({
          type: authType.FORGOT_PASSWORD,
          payload: resp.data.message,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: commonType.REMOVE_LOADER,
        payload: "forgetPasswordLoading",
      });
      const errors = [];

      if (err.response) {
        // if (
        //   err.response &&
        //   // err.response.data.message === messages.auth.user_not_found
        // ) {
        //   errors.push([
        //     messages.auth.user_not_found,
        //     messages.auth.user_not_found,
        //   ]);
        // }
        // if (
        //   err.response &&
        //   // err.response.data.message === messages.auth.EMAIL_SEND_FAIL
        // ) {
        //   swal(messages.auth.EMAIL_SEND_FAIL);
        //   swal("OOPS!", messages.auth.EMAIL_SEND_FAIL, "error");
        // }

        // unexpected error form server
        if (err.response.status === 500) {
          // swal("OOPS!", messages.commonError.SOMETHING_WENT_WRONG, "error");
        }
        errorCallback("formError", errors);
        dispatch({
          type: commonType.GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        // unexptec error like server is not responding or any other
        // swal("OOPS!", err.message, "error");
      }
    });
};

export const confirmPassword = (data) => (dispatch) => {
  console.log("confirm pass");
};


export const setCurrentUser = (decodedUser) => {
  return {
    type: authType.SET_CURRENT_USER,
    payload: decodedUser,
  };
};


//WIP on Register
export const register = (registerData, errorCallback) => async (dispatch) => {
  const errors = [];
  if (registerData.password !== registerData.password2) {
    // errors.push(["password", "password do not match"]);
    errorCallback("registerErrors", errors);
    return;
  }
  dispatch({
    type: commonType.ADD_LOADER,
    payload: "registerLoading",
  });
  await axios
    .post(`${baseUrl}/api/register`, registerData)
    .then((res) => {
      dispatch({
        type: commonType.REMOVE_LOADER,
        payload: "registerLoading",
      });
      dispatch({
        type: authType.REGISTER_USER,
        payload: res.data,
      });
      toast.configure();
      toast(res.data.msg, {
        position: toast.POSITION.TOP_RIGHT,
        className: "Success",
        autoClose: 2000,
        toastId: 2,
      });
    })
    .catch((err) => {
      const errors = [];
      if (err.response && err.response.data.msg.includes("email")) {
        // errors.push(["email", err.response.data.msg]);
      }
      if (err.response && err.response.data.msg.includes("password")) {
        // errors.push(["password", err.response.data.msg]);
      }
      errorCallback("registerErrors", errors);
      dispatch({
        type: commonType.REMOVE_LOADER,
        payload: "registerLoading",
      });
    });
};




import { API } from "../../API";

const SET_AUTH_DATA = "SET_AUTH_DATA";

const initialState = {
   login: null,
   email: null,
   id: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_DATA:
         return {
            ...state,
            login: action.login,
            email: action.email,
            id: action.id,
            isAuth: true,
         }

      default:
         return state;
   }
}

export const setAuthDataAC = (login, email, id) => {
   return { type: SET_AUTH_DATA, login, email, id }
}

export const getCurrentUserInfoThunkCreator = () => {
   return (dispatch) => {
      API.auth.getInfo()
         .then(res => {
            console.log(res.data.resultCode)
            if (!res.data.resultCode) {
               const { login, email, id } = res.data.data;
               dispatch(setAuthDataAC(login, email, id));
            }
         })
   }
}

export default authReducer;
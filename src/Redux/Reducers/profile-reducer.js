import { API } from "../../API";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

const initialState = {
   profile: null,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PROFILE_DATA:
         return {
            ...state,
            profile: { ...action.profile }
         }

      default:
         return state;
   }
}

export const setProfileDataAC = (profile) => {
   return { type: SET_PROFILE_DATA, profile }
}

export const getUserProfileThunkCreator = (userId) => {
   return (dispatch) => API.profile.getUserProfile(userId)
      .then(res => dispatch(setProfileDataAC(res.data)))
}
export default profileReducer;
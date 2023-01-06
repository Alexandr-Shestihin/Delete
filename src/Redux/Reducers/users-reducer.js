import { API } from '../../API/index';

const CHANGE_FOLLOW = "CHANGE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
   users: [],
   pageSize: 100,
   currentPage: 1,
   totalUsersCount: 0,
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHANGE_FOLLOW:
         return {
            ...state,
            users: state.users.map(el => {
               if (action.userID === el.id) {
                  return {
                     ...el,
                     followed: !el.followed
                  }
               }
               return el;
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }

      case SET_TOTAL_PAGE_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalCount,
         }

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage,
         }

      default:
         return state;
   }
}

export const changeFollowAC = (userID) => {
   return { type: CHANGE_FOLLOW, userID: userID }
}
export const setUsersAC = (users) => {
   return { type: SET_USERS, users: users }
}
export const setTotalCountAC = (totalCount) => {
   return { type: SET_TOTAL_PAGE_COUNT, totalCount: totalCount }
}
export const setCurrentPageAC = (currentPage) => {
   return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}

export const getUsersThunkCreator = (pageSize, currentPage) => {
   return (dispatch) => {
      API.users.getUsers(pageSize, currentPage)
         .then(res => {
            dispatch(setUsersAC(res.data.items));
            dispatch(setTotalCountAC(res.data.totalCount));
         });
   }
}

export default usersReducer;
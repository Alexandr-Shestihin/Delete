import axios from 'axios';

const inctance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f"
   }
})

export const API = {
   users: {
      getUsers(pageCount, currentPage) {
         return inctance.get(`users?count=${pageCount}&page=${currentPage}`)
      }
   },
   profile: {
      getUserProfile(userId) {
         return inctance.get(`profile/${userId}`)
      }
   },
   auth: {
      getInfo() {
         return inctance.get(`auth/me`)
      }
   }
}
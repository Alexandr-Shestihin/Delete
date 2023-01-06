const ADD_POST = "ADD_POST";
const ADD_TEXT_VALUE = "ADD_TEXT_VALUE";

const initialState = {
   posts: [
      { id: 1, text: 'Hellow' },
      { id: 2, text: 'Cześć' },
      { id: 3, text: 'Sieg heil' },
      { id: 4, text: 'Ca va!' },
   ],
   postTextValue: 'ddsdsds',
}

const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postTextValue: '',
            posts: [...state.posts, { id: state.posts.length, text: state.postTextValue }]
         };

      case ADD_TEXT_VALUE:
         return {
            ...state,
            postTextValue: action.text
         };

      default:
         return state;
   }
}

export const addPostAC = () => {
   return { type: ADD_POST }
}
export const addTextValueAC = (text) => {
   return { type: ADD_TEXT_VALUE, text: text }
}

export default postReducer;
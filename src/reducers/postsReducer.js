import * as actions from '../actions/constants';

const initialState = {
  posts: [],
  isLoading: false,
  hasError: false
}

const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_SUCCESS:
    return {
      posts: action.payload,
      isLoading: false,
      hasError: false
    }

    case actions.FETCH_ERROR:
    return {
      ...state,
      isLoading: false,
      hasError: true
    }

    case actions.FETCH_LOADING:
    return {
      ...state,
      isLoading: true,
      hasError: false
    }
    default: 
    return state
  }
}

export default postsReducer;
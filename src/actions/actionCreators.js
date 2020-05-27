import * as actions from './constants';

export const fetchSuccess = data => ({
  type: actions.FETCH_SUCCESS,
  payload: data
})

export const fetchError = () => ({
  type: actions.FETCH_ERROR
})

export const fetchLoading = () => ({
  type: actions.FETCH_LOADING
})

export const fetchData = () => async dispatch => {
  dispatch(fetchLoading());
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    console.log('json', json)
    dispatch(fetchSuccess(json.slice(0,10)));

  } catch(err) {
    dispatch(fetchError())
  }

}
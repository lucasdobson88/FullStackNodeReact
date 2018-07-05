import axios from 'axios';
import { SUBMIT_RAFFLE, FETCH_USER } from './types';


export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
}


export const submitRaffle = (values, history) => async dispatch => {
  const res = await axios.post('/api/raffles', values);
console.log(res);
  history.push('/raffles');
  dispatch({type: FETCH_USER, payload: res.data});
}

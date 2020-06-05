import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_CARS, DELETE_CAR, ADD_CAR } from './types';

// GET CARS
export const getCars = () => (dispatch, getState) => {
  axios
    .get('/api/cars/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CARS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE CAR
export const deleteCar = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/cars/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteCar: 'Car Deleted' }));
      dispatch({
        type: DELETE_CAR,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD CAR
export const addCar = (car) => (dispatch, getState) => {
  axios
    .post('/api/cars/', car, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addCar: 'Car Added' }));
      dispatch({
        type: ADD_CAR,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
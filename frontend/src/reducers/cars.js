import { GET_CARS, DELETE_CAR, ADD_CAR, CLEAR_CARS } from '../actions/types.js';

const initialState = {
  cars: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    case ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case CLEAR_CARS:
      return {
        ...state,
        cars: [],
      };
    default:
      return state;
  }
}
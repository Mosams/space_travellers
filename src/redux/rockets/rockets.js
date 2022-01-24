const ADD_ROCKET = 'ADD_ROCKET';
const ADD_ROCKETS = 'ADD_BOOKS';
const initialState = [];

export const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

export const addMultiRockets = (payload) => ({
  type: ADD_ROCKETS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...action.payload];
    case ADD_ROCKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;

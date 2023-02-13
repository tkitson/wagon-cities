const cityReducer = (state, action) => {
  if (state === undefined) {
    return [];
  } else if (action.type === 'SET_CITIES') {
    return action.payload;
  }
  return state;
};

export default cityReducer;

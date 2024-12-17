export const heroesReducer = (state, action) => {
  switch (action.type) {
    case "SET_HEROES":
      return { ...state, heroes: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

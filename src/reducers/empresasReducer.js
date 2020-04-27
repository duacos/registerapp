const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };

    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

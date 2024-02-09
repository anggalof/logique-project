const initialState = {
  loading: false,
  musics: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MUSICS_REQUEST":
      return {
        loading: true,
      };
    case "FETCH_MUSICS_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_MUSICS_FAILURE":
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

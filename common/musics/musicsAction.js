import { SERVICES } from "../../configs";
import axios from "axios";

export const fetchMusics = (payload) => {
  return async (dispatch) => {
    dispatch(fetchMusicsRequest());
    axios
      .get(`${SERVICES.GET_MUSIC_LIST}?term=${payload}&limit=25`)
      .then((response) => {
        const musics = response.data;
        dispatch(fetchMusicsSuccess(musics));
      })
      .catch((error) => {
        dispatch(fetchMusicsFailure(error.message));
      });
  };
};

export const fetchMusicsRequest = () => {
  return {
    type: "FETCH_MUSICS_REQUEST",
  };
};

export const fetchMusicsSuccess = (musics) => {
  return {
    type: "FETCH_MUSICS_SUCCESS",
    payload: musics,
  };
};

export const fetchMusicsFailure = (error) => {
  return {
    type: "FETCH_MUSICS_FAILURE",
    payload: error,
  };
};

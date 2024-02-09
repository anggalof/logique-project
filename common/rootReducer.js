import { combineReducers } from "redux";
import musicsReducer from "./musics/musicsReducer";

const rootReducer = combineReducers({
  musics: musicsReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const persistConfig = {
  // the key is the point at which we want to start storing things and the white list is a list of reducers we want to persist
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

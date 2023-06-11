import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterReducer";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

export default configureStore({
  reducer: {
    counter: counterSlice,
    data: dataReducer,
  },
  middleware: [thunk],
});

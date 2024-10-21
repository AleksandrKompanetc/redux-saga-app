import { createStore, combineReducers} from "redux"
import countReducer from "./countReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
  countReducer,
  userReducer
})

export const store = createStore(rootReducer)
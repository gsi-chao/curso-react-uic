import { TAction } from "./actions";
import { HomeStateType } from "./initialState";

const reducer = (state: HomeStateType, action: TAction): HomeStateType => {
  const { type } = action;
  switch (type) {
    case "SET_POSTS":
      return { ...state, posts: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "ADD_POST":
      return { ...state, posts: [action.payload, ...state.posts ] };
    default:
      return state;
  }
};
export default reducer;

import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {

}

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  {
    isSignedIn: false,
  }
);

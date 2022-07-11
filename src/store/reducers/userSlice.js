import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser(state, action) {
      if (action.payload != null) {
        state.user = User.createFrom(action.payload);
      } else {
        state.user = null;
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

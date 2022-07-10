import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser(state, action) {
      state.user = User.createFrom(action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

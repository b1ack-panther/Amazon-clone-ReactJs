import { createSlice } from "@reduxjs/toolkit";

const credentialSlice = createSlice({
  name: 'users',
  initialState: {user:null},
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user
    },
  },
})

export default credentialSlice.reducer;
export const { setUser } = credentialSlice.actions;
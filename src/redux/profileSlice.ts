import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Profile {
  name: string;
  email: string;
  age?: number;
}

interface ProfileState {
  data: Profile | null;
}

const initialState: ProfileState = {
  data: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload));
    },
    clearProfile: (state) => {
      state.data = null;
      localStorage.removeItem("profile");
    },
    loadFromStorage: (state) => {
      const saved = localStorage.getItem("profile");
      if (saved) {
        state.data = JSON.parse(saved);
      }
    },
  },
});

export const { setProfile, clearProfile, loadFromStorage } = profileSlice.actions;
export default profileSlice.reducer;

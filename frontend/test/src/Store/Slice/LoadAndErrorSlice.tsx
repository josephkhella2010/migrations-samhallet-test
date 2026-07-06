import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface LoadingErrorType {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: LoadingErrorType = {
  isLoading: false,
  error: null,
  success: false,
};

const LoadAndErrorSlice = createSlice({
  name: "LoadAndErrorSlice",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    setClearLoading: (state) => {
      state.isLoading = false;
      state.error = null;
    },

    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
  },
});
export const { setLoading, setError, setClearLoading, setSuccess } =
  LoadAndErrorSlice.actions;

export default LoadAndErrorSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthUserModel } from '@/src/models/user';
import { AppState } from '@/src/store';
import { HYDRATE } from 'next-redux-wrapper';

interface IAuthUserState {
	user: IAuthUserModel | null;
	token: string | null;
}

const initialState: IAuthUserState = {
	user: null,
	token: null,
};

const authUserSlice = createSlice({
	name: 'authUserSlice',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IAuthUserModel | null>) => {
			state.user = action.payload;
		},
		setToken: (state, action: PayloadAction<string | null>) => {
			state.token = action.payload;
		},
		setAuthUser: (state, action: PayloadAction<IAuthUserState>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			if (!action.payload.authUserSlice) {
				return state;
			}
			state.user = action.payload.authUserSlice.user;
			state.token = action.payload.authUserSlice.token;
		});
	},
});
export const selectAuthUserSlice = (state: AppState) => state.authUserSlice;

export const { setUser, setAuthUser, setToken } = authUserSlice.actions;

export default authUserSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@/src/store';
import { HYDRATE } from 'next-redux-wrapper';

interface IAuthUserState {
	lang: string | null;
}

const initialState: IAuthUserState = {
	lang: null,
};

const utilitiesSlice = createSlice({
	name: 'utilitiesSlice',
	initialState,
	reducers: {
		setLang: (state, action: PayloadAction<string | null>) => {
			state.lang = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			if (!action.payload.utilitiesSlice) {
				return state;
			}
			state.lang = action.payload.utilitiesSlice.lang;
		});
	},
});
export const selectUtilitiesSlice = (state: AppState) => state.utilitiesSlice;

export const { setLang } = utilitiesSlice.actions;

export default utilitiesSlice.reducer;

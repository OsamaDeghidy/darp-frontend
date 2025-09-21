import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface IGeneralDataState {
	data: any;
}

const initialState: IGeneralDataState = {
	data: null,
};

export const generalDataSlice = createSlice({
	name: 'general',
	initialState,
	reducers: {
		setHomeData: (state, action: PayloadAction<any>) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action: any) => {
			state.data = action.payload.generalDataSlice?.data?.data;
		});
	},
});

export const { setHomeData } = generalDataSlice.actions;

export default generalDataSlice.reducer;
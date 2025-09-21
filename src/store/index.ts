import authUserReducer from './reducers/authUserSlice';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';
import { rtkQueryErrorLogger } from '@/src/store/rtkQueryErrorLogger';
import { apiService } from '@/src/store/RTKQuery/apiService';
import utilitiesReducer from '@/src/store/reducers/utilitiesSlice';
import generalReducer from '@/src/store/reducers/generalSlice';
import { homeApi } from '@/src/store/RTKQuery/home/homeApi';
import { aboutUsApi } from '@/src/store/RTKQuery/about-us/aboutUsApi';
import { newsApi } from '@/src/store/RTKQuery/news/newsApi';
import { membershipApi } from '@/src/store/RTKQuery/membership/membershipApi';
import { commonApi } from '@/src/store/RTKQuery/common/commonApi';
import { mediaCenterApi } from '@/src/store/RTKQuery/media-center/mediaCenterApi';
import { contactUsApi } from '@/src/store/RTKQuery/contact-us/contactUsApi';
import { authApi } from '@/src/store/RTKQuery/auth/authApi';
import { paymentApi } from '@/src/store/RTKQuery/payment/paymentApi';
import { trackApi } from '@/src/store/RTKQuery/track/trackApi';
import { profileApi } from '@/src/store/RTKQuery/profile/profileApi';
import { policyApi } from '@/src/store/RTKQuery/policy/policyApi';

const makeStore = () => {
	const store = configureStore({
		reducer: {
			authUserSlice: authUserReducer,
			generalDataSlice: generalReducer,
			utilitiesSlice: utilitiesReducer,
			[apiService.reducerPath]: apiService.reducer,
			[homeApi.reducerPath]: homeApi.reducer,
			[aboutUsApi.reducerPath]: aboutUsApi.reducer,
			[newsApi.reducerPath]: newsApi.reducer,
			[membershipApi.reducerPath]: membershipApi.reducer,
			[commonApi.reducerPath]: commonApi.reducer,
			[mediaCenterApi.reducerPath]: mediaCenterApi.reducer,
			[contactUsApi.reducerPath]: contactUsApi.reducer,
			[authApi.reducerPath]: authApi.reducer,
			[paymentApi.reducerPath]: paymentApi.reducer,
			[trackApi.reducerPath]: trackApi.reducer,
			[profileApi.reducerPath]: profileApi.reducer,
			[policyApi.reducerPath]: policyApi.reducer,
		},

		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }).concat(
				rtkQueryErrorLogger,
				apiService.middleware,
				homeApi.middleware,
				aboutUsApi.middleware,
				newsApi.middleware,
				membershipApi.middleware,
				commonApi.middleware,
				mediaCenterApi.middleware,
				contactUsApi.middleware,
				authApi.middleware,
				paymentApi.middleware,
				trackApi.middleware,
				profileApi.middleware,
				policyApi.middleware,
			),
		devTools: true,
	});
	setupListeners(store.dispatch);
	return store;
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);

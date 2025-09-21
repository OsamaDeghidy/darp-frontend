import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { AppState } from '@/src/store/index';

//let baseUrl = (process.env.BASE_URL || 'https://darb-be.v4.mmd-technology.com') + '/api/';
let baseUrl = (process.env.BASE_URL || 'https://darb0org-001-site1.mtempurl.com') + '/api/';

export const getFetchBaseQuery = fetchBaseQuery({
	baseUrl,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as AppState).authUserSlice.token;
		const lang = (getState() as AppState).utilitiesSlice.lang;
		headers.set('Accept', 'application/json');
		headers.set('Accept', '*/*');
		if (lang) {
			headers.set('Accept-Language', lang);
		}
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

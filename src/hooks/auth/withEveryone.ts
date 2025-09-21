import { GetServerSideProps } from 'next';
import { CookieEnum } from '@/src/utilities/cookie';
import { wrapper } from '@/src/store';
import { setAuthUser } from '@/src/store/reducers/authUserSlice';
import { setLang } from '@/src/store/reducers/utilitiesSlice';
import { authApi } from '@/src/store/RTKQuery/auth/authApi';
import { HRef } from '@/src/utilities/href';

const withEveryone = (getServerSideProps: GetServerSideProps) => {
	return wrapper.getServerSideProps((store) => async (context) => {
		const token = context.req.cookies[CookieEnum.token];
		const lang = context.req.cookies[CookieEnum.lang];
		store.dispatch(setLang(lang || 'ar-SA'));
		if (token) {
			const data = await store.dispatch(
				authApi.endpoints.getAuthUser.initiate({ token: token }),
			);
			if (data.data == undefined) {
				context.res.setHeader('Set-Cookie', [
					`${CookieEnum.token}=deleted; Path=/; Max-Age=0`,
				]);
			}
			if (data.data != undefined) {
				store.dispatch(
					setAuthUser({
						user: data.data.data,
						token: token,
					}),
				);
				if (!data.data.data.emailConfirmed) {
					return {
						redirect: {
							permanent: false,
							destination: HRef.resendVerifyEmail,
						},
					};
				}
			}
		}

		return await getServerSideProps(context);
	});
};

export default withEveryone;

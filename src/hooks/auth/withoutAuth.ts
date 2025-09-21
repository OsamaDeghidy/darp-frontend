import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { CookieEnum } from '@/src/utilities/cookie';
import { HRef } from '@/src/utilities/href';
import { wrapper } from '@/src/store';
import { setLang } from '@/src/store/reducers/utilitiesSlice';

const withoutAuth = (getServerSideProps: GetServerSideProps) => {
	return wrapper.getServerSideProps(
		(store) => async (context: GetServerSidePropsContext) => {
			const lang = context.req.cookies[CookieEnum.lang];
			const token = context.req.cookies[CookieEnum.token];
			store.dispatch(setLang(lang || 'ar-SA'));
			if (token) {
				return {
					redirect: {
						permanent: false,
						destination: HRef.home,
					},
				};
			}
			return await getServerSideProps(context);
		},
	);
};

export default withoutAuth;

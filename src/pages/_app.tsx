import '@/src/assets/styles/globals.scss';
import { I18nProvider } from '@/src/locales';
import type { AppProps } from 'next/app';
import { wrapper } from '@/src/store';
import { Provider } from 'react-redux';
import Layout from '@/src/components/ui/layouts/base/Layout';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, ...rest }: AppProps) {
	const {
		store,
		props: { session, locale, ...props },
	} = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<I18nProvider locale={locale}>
					<Layout>
						<Component {...props} />
					</Layout>
				</I18nProvider>
			</SessionProvider>
		</Provider>
	);
}

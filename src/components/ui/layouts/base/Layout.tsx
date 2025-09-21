import React, { FC, ReactNode, useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { useCurrentLocale } from '@/src/locales';
import { CookieEnum, setCookie } from '@/src/utilities/cookie';
import { ThemeProvider, useTheme } from 'next-themes';
import { ConfigProvider } from 'antd/lib';

interface IProps {
	children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
	const { children } = props;
	const currentLocale = useCurrentLocale();
	const { themes } = useTheme();
	useEffect(() => {
		if (currentLocale == 'en') {
			setCookie(CookieEnum.lang, 'en-US');
		} else {
			setCookie(CookieEnum.lang, 'ar-SA');
		}
		document
			.querySelector('html')
			?.setAttribute('dir', currentLocale == 'ar' ? 'rtl' : 'ltr');
		document
			.querySelector('html')
			?.setAttribute('lang', currentLocale || 'EN_us');
	}, [currentLocale]);

	return (
		<ThemeProvider
			themes={themes}
			enableSystem={false}
			defaultTheme={'light'}
		>
			<ConfigProvider
				direction={currentLocale == 'ar' ? 'rtl' : 'ltr'}
				theme={{
					token: {
						fontFamily:
							currentLocale == 'ar'
								? 'var(--primary-font-ar)'
								: 'var(--primary-font-en)',
					},
				}}
			>
				<NextNProgress
					options={{ showSpinner: false }}
					color={'blue'}
				/>
				{children}
			</ConfigProvider>
		</ThemeProvider>
	);
};

export default Layout;

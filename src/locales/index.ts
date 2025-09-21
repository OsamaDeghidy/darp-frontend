import { createI18n } from 'next-international';

export const {
	I18nProvider,
	useI18n,
	useChangeLocale,
	useCurrentLocale,
	useScopedI18n,
} = createI18n({
	en: () => import('./en'),
	ar: () => import('./ar'),
});

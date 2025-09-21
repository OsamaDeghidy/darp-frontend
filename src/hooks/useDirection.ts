import { useCurrentLocale } from '@/src/locales';

export const useDirection = () => {
    const locale = useCurrentLocale();
    return locale == 'ar' ? 'rtl' : 'ltr';
};

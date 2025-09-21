import Cookies from 'js-cookie';

export enum CookieEnum {
	token = 'darbToken',
	lang = 'darbLang',
}

export const setCookie = (name: CookieEnum, value: string) => {
	Cookies.set(name, value, { expires: 356, path: '/' });
};

export const getCookie = (name: CookieEnum): string | undefined => {
	return Cookies.get(name);
};

export const deleteCookie = (name: CookieEnum) => {
	Cookies.remove(name);
};

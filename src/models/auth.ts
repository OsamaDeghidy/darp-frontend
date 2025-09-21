export interface IRegisterModel {
	fullName: string;
	email: string;
	phoneNumber: string;
	password: string;
	confirmPassword: string;
}

export class RegisterModel implements IRegisterModel {
	fullName = '';
	email = '';
	phoneNumber = '';
	password = '';
	confirmPassword = '';
}

export interface ILoginModel {
	email: string;
	password: string;
}

export class LoginModel implements ILoginModel {
	email = '';
	password = '';
}

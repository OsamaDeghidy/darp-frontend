import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import { ILoginModel, IRegisterModel } from '@/src/models/auth';
import { IAuthUserModel } from '@/src/models/user';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		register: build.mutation<IResponseModel<any>, Partial<IRegisterModel>>({
			query: (data) => ({
				url: 'ApplicationUser/user/create',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		login: build.mutation<
			IResponseModel<{ token: string }>,
			Partial<ILoginModel>
		>({
			query: (data) => ({
				url: 'Authentication/SignIn',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		getAuthUser: build.query<
			IResponseModel<IAuthUserModel>,
			Partial<{ token: string }>
		>({
			query: (data) => ({
				url: 'Authentication/get-auth-member',
				headers: {
					authorization: `Bearer ${data.token}`,
				},
			}),
			onQueryStarted: (arg, api) => {},
		}),
		loginWithGoogle: build.mutation<
			IResponseModel<{ token: string }>,
			Partial<{ token: string }>
		>({
			query: (data) => ({
				url: 'Authentication/login-with-google',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		loginWithApple: build.mutation<
			IResponseModel<{ token: string }>,
			Partial<{ token: string }>
		>({
			query: (data) => ({
				url: 'Authentication/login-with-apple',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		loginWithFacebook: build.mutation<
			IResponseModel<{ token: string }>,
			Partial<{ token: string }>
		>({
			query: (data) => ({
				url: 'Authentication/login-with-facebook',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		resendEmailConfirmation: build.mutation<IResponseModel<boolean>, void>({
			query: () => ({
				url: 'Authentication/resend-email-confirmation',
				method: 'POST',
				body: {},
			}),
		}),
		confirmEmail: build.mutation<
			IResponseModel<boolean>,
			Partial<{ token: string }>
		>({
			query: (data) => ({
				url: 'Authentication/confirm-email',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		forgetPassword: build.mutation<
			IResponseModel<boolean>,
			Partial<{ email: string }>
		>({
			query: (data) => ({
				url: 'Authentication/forget-password',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		canResetPassword: build.mutation<
			IResponseModel<boolean>,
			Partial<{
				email: string;
				token: string;
			}>
		>({
			query: (data) => ({
				url: 'Authentication/can-reset-password',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		resetPassword: build.mutation<
			IResponseModel<boolean>,
			Partial<{
				email: string;
				token: string;
				password: string;
				confirmPassword: string;
			}>
		>({
			query: (data) => ({
				url: 'Authentication/reset-password',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		changePassword: build.mutation<
			IResponseModel<boolean>,
			Partial<{
				password: string;
				newPassword: string;
				newConfirmPassword: string;
			}>
		>({
			query: (data) => ({
				url: 'Authentication/change-password',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		deleteAccount: build.mutation<
			IResponseModel<boolean>,
			Partial<{
				password: string;
			}>
		>({
			query: (data) => ({
				url: 'my-profile',
				method: 'DELETE',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLoginWithGoogleMutation,
	useLoginWithAppleMutation,
	useLoginWithFacebookMutation,
	useResendEmailConfirmationMutation,
	useConfirmEmailMutation,
	useForgetPasswordMutation,
	useCanResetPasswordMutation,
	useResetPasswordMutation,
	useGetAuthUserQuery,
	useChangePasswordMutation,
	useDeleteAccountMutation,
} = authApi;

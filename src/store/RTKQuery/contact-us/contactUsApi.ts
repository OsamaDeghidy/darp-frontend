import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import {
	IComplaintsAndSuggestionsModel,
	IComplaintsAndSuggestionsPageModel,
	IContactUsModel,
	IContactusPageModel,
	IContributePageModel,
	IJobsPageModel,
	ISurveyPageModel,
	IVolunteeringModel,
	IVolunteeringPageModel,
} from '@/src/models/contact-us';

export const contactUsApi = createApi({
	reducerPath: 'contactUsApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getContactUsPage: build.query<
			IResponseModel<IContactusPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'contact-us/contact-us-page',
			}),
		}),
		sendContactUs: build.mutation<
			IResponseModel<any>,
			Partial<IContactUsModel>
		>({
			query: (data) => ({
				url: 'contact-us/contact-us-form',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		getSurveyPage: build.query<
			IResponseModel<ISurveyPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'contact-us/survey',
			}),
		}),
		getComplaintsAndSuggestions: build.query<
			IResponseModel<IComplaintsAndSuggestionsPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'contact-us/complaints-and-suggestions-page',
			}),
		}),
		sendComplaintsAndSuggestions: build.mutation<
			IResponseModel<any>,
			Partial<IComplaintsAndSuggestionsModel>
		>({
			query: (data) => ({
				url: 'contact-us/complaint-suggestion',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		getVolunteering: build.query<
			IResponseModel<IVolunteeringPageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'contact-us/volunteering-page',
			}),
		}),
		sendVolunteering: build.mutation<
			IResponseModel<any>,
			Partial<IVolunteeringModel>
		>({
			query: (data) => ({
				url: 'contact-us/volunteering-form',
				method: 'POST',
				body: JSON.parse(JSON.stringify(data)),
			}),
		}),
		getJobsPage: build.query<IResponseModel<IJobsPageModel>, Partial<void>>(
			{
				query: (data) => ({
					url: 'contact-us/jobs',
				}),
			},
		),
		getContributePage: build.query<
			IResponseModel<IContributePageModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'contact-us/contribute',
			}),
		}),
	}),
});

export const {
	useSendContactUsMutation,
	useSendComplaintsAndSuggestionsMutation,
	useSendVolunteeringMutation,
} = contactUsApi;

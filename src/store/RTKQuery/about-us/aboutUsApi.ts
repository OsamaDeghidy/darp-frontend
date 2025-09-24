import { IResponseModel } from '@/src/models/response';
import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/getFetchBaseQuery';
import {
	IAboutOrganizationModel,
	IAsssociationLicenseCertificateModel,
	IBoardOfDirectorsModel,
	ICouncilMeetingsDetailsModel,
	ICouncilMeetingsModel,
	IExecutiveManagementModel,
	IFinancialReportsDetailsModel,
	IFinancialReportsModel,
	IFoundersModel,
	IMembersOfTheGeneralAssemblyModel,
	IOrganizationStructureModel,
	IRegulationsAndPoliciesDetailsModel,
	IRegulationsAndPoliciesModel,
	IStandingCommitteesModel,
	IStrategicDirectionsModel,
} from '@/src/models/about-us';

export const aboutUsApi = createApi({
	reducerPath: 'aboutUsApi',
	baseQuery: getFetchBaseQuery,
	endpoints: (build) => ({
		getAboutOrganization: build.query<
			IResponseModel<IAboutOrganizationModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/about-organization',
			}),
		}),
		getBoardOfDirectors: build.query<
			IResponseModel<IBoardOfDirectorsModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/board-of-directors',
			}),
		}),
		getStandingCommittees: build.query<
			IResponseModel<IStandingCommitteesModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/standing-committees',
			}),
		}),
		getFounders: build.query<IResponseModel<IFoundersModel>, Partial<void>>(
			{
				query: (data) => ({
					url: 'about-us/founders',
				}),
			},
		),
		getExecutiveManagement: build.query<
			IResponseModel<IExecutiveManagementModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/executive-management',
			}),
		}),
		getFinancialReports: build.query<
			IResponseModel<IFinancialReportsModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/financial-reports',
			}),
		}),
		getCouncilMeetings: build.query<
			IResponseModel<ICouncilMeetingsModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/council-meetings',
			}),
		}),
		getCouncilMeetingsById: build.query<
			IResponseModel<ICouncilMeetingsDetailsModel>,
			Partial<{ id: number }>
		>({
			query: (data) => ({
				url: `about-us/council-meetings/${data.id}`,
			}),
		}),
		getRegulationsAndPoliciesById: build.query<
			IResponseModel<IRegulationsAndPoliciesDetailsModel>,
			Partial<{ id: number }>
		>({
			query: (data) => ({
				url: `about-us/regulations-policies/${data.id}`,
			}),
		}),
		getFinancialReportsById: build.query<
			IResponseModel<IFinancialReportsDetailsModel>,
			Partial<{ id: number }>
		>({
			query: (data) => ({
				url: `about-us/financial-reports/${data.id}`,
			}),
		}),
		getRegulationsAndPolicies: build.query<
			IResponseModel<IRegulationsAndPoliciesModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/regulations-and-policies',
			}),
		}),
		getStrategicDirections: build.query<
			IResponseModel<IStrategicDirectionsModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/strategic-directions',
			}),
		}),

		getMembersOfAssembly: build.query<
			IResponseModel<IMembersOfTheGeneralAssemblyModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/members-of-assembly',
			}),
		}),
		getLicenseCertificate: build.query<
			IResponseModel<IAsssociationLicenseCertificateModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/association-license-certificate',
			}),
		}),
		getOrganizationStructure: build.query<
			IResponseModel<IOrganizationStructureModel>,
			Partial<void>
		>({
			query: (data) => ({
				url: 'about-us/organization-structure',
			}),
		}),
	}),
});

export const {
	useGetAboutOrganizationQuery,
	useGetBoardOfDirectorsQuery,
	useGetStandingCommitteesQuery,
	useGetFoundersQuery,
	useGetExecutiveManagementQuery,
	useGetFinancialReportsQuery,
	useGetCouncilMeetingsQuery,
	useGetCouncilMeetingsByIdQuery,
	useGetRegulationsAndPoliciesByIdQuery,
	useGetFinancialReportsByIdQuery,
	useGetRegulationsAndPoliciesQuery,
	useGetStrategicDirectionsQuery,
	useGetMembersOfAssemblyQuery,
	useGetLicenseCertificateQuery,
	useGetOrganizationStructureQuery,
} = aboutUsApi;

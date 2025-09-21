import { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import Link from 'next/link';
import { MenuProps } from 'antd';
import { getString } from '@/src/utilities/string';
import CustomMenuSidebar from '@/src/components/ui/CustomMenuSidebar';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	className?: string;
	data: IHeaderModel;
}

const AboutUsSidebar: FC<IProps> = (props) => {
	const { className, data } = props;
	const t = useI18n();

	const items: MenuProps['items'] = [
		{
			key: 'who-are-we',
			label: data.whoAreWe,
			children: [
				{
					key: HRef.introductionToTheAssociation,
					label: (
						<Link href={HRef.introductionToTheAssociation}>
							{data.aboutTheAssociation}
						</Link>
					),
				},
				{
					key: 'associationLicenseCertificate',
					label: (
						<Link href={HRef.certification}>
							{data.associationLicenseCertificate}
						</Link>
					),
				},
				{
					key: 'organizationalChart',
					label: (
						<Link href={HRef.OrganizationStructure}>
							{data.organizationalChart}
						</Link>
					),
				},
			],
		},
		{
			key: HRef.strategicDirections,
			label: (
				<Link href={HRef.strategicDirections}>
					{data.strategicDirections}
				</Link>
			),
		},
		{
			key: '3',
			label: data.boardOfDirectors,
			children: [
				{
					key: HRef.boardOfDirectors,
					label: (
						<Link href={HRef.boardOfDirectors}>
							{data.membersOfTheBoardOfDirectors}
						</Link>
					),
				},
				{
					key: HRef.projectsCommittee,
					label: (
						<Link href={HRef.projectsCommittee}>
							{data.standingCommittees}
						</Link>
					),
				},

				// {
				// 	key: HRef.standingCommittees,
				// 	label: (
				// 		<Link href={HRef.standingCommittees}>
				// 			{t('standingCommittees')}
				// 		</Link>
				// 	),
				// },
			],
		},
		{
			key: HRef.founders,
			label: <Link href={HRef.founders}>{data.founders}</Link>,
		},
		{
			key: HRef.executiveManagement,
			label: (
				<Link href={HRef.executiveManagement}>
					{data.executiveManagement}
				</Link>
			),
		},
		{
			key: HRef.financialReports,
			label: <Link href={HRef.financialReports}>{data.reports}</Link>,
		},
		{
			key: HRef.councilMeetings,
			label: (
				<Link href={HRef.councilMeetings}>
					{data.minutesOfAssociationMeetings}
				</Link>
			),
		},
		{
			key: HRef.regulationsAndPolicies,
			label: (
				<Link href={HRef.regulationsAndPolicies}>
					{data.regulationsAndPolicies}
				</Link>
			),
		},
	];
	return (
		<aside
			className={
				'border rounded-[10px] p-[20px] bg-c_white ' +
				getString(className)
			}
		>
			<h3 className={'f-24-700 c_004053 mb-[30px]'}>
				{t('aboutDarbAssociation')}
			</h3>
			<CustomMenuSidebar items={items} />
		</aside>
	);
};
export default AboutUsSidebar;

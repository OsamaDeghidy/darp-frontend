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

	// Safe data access with fallback
	const safeData = data || {};

	const items: MenuProps['items'] = [
		{
			key: 'who-are-we',
			label: safeData.whoAreWe || t('whoAreWe'),
			children: [
				{
					key: HRef.introductionToTheAssociation,
					label: (
						<Link href={HRef.introductionToTheAssociation}>
							{safeData.aboutTheAssociation || t('aboutTheAssociation')}
						</Link>
					),
				},
				{
					key: 'associationLicenseCertificate',
					label: (
						<Link href={HRef.certification}>
							{safeData.associationLicenseCertificate || t('associationLicenseCertificate')}
						</Link>
					),
				},
				{
					key: 'organizationalChart',
					label: (
						<Link href={HRef.OrganizationStructure}>
							{safeData.organizationalChart || t('organizationalChart')}
						</Link>
					),
				},
			],
		},
		{
			key: HRef.strategicDirections,
			label: (
				<Link href={HRef.strategicDirections}>
					{safeData.strategicDirections || t('strategicDirections')}
				</Link>
			),
		},
		{
			key: '3',
			label: safeData.boardOfDirectors || t('boardOfDirectors'),
			children: [
				{
					key: HRef.boardOfDirectors,
					label: (
						<Link href={HRef.boardOfDirectors}>
							{safeData.membersOfTheBoardOfDirectors || t('membersOfTheBoardOfDirectors')}
						</Link>
					),
				},
				{
					key: HRef.projectsCommittee,
					label: (
						<Link href={HRef.projectsCommittee}>
							{safeData.standingCommittees || t('standingCommittees')}
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
			label: <Link href={HRef.founders}>{safeData.founders || t('founders')}</Link>,
		},
		{
			key: HRef.executiveManagement,
			label: (
				<Link href={HRef.executiveManagement}>
					{safeData.executiveManagement || t('executiveManagement')}
				</Link>
			),
		},
		{
			key: HRef.financialReports,
			label: <Link href={HRef.financialReports}>{safeData.reports || t('reports')}</Link>,
		},
		{
			key: HRef.councilMeetings,
			label: (
				<Link href={HRef.councilMeetings}>
					{safeData.minutesOfAssociationMeetings || t('minutesOfAssociationMeetings')}
				</Link>
			),
		},
		{
			key: HRef.regulationsAndPolicies,
			label: (
				<Link href={HRef.regulationsAndPolicies}>
					{safeData.regulationsAndPolicies || t('regulationsAndPolicies')}
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

import { FC } from 'react';
import { MenuProps } from 'antd';
import { useI18n } from '@/src/locales';
import DropdownBase from '@/src/components/ui/dropdowns/DropdownBase';
import { DropdownChildrenType, DropdownTriggerType } from '@/src/models/dropdown';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { IHeaderModel } from '@/src/models/page';

interface IProps {
	trigger?: DropdownTriggerType;
	childrenType?: DropdownChildrenType;
	data: IHeaderModel;
}

const AboutAssociationDropdown: FC<IProps> = (props) => {
	const { trigger, childrenType = "divider", data } = props;
	const t = useI18n();
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: data.whoAreWe,
			type: childrenType,
			children: [
				{
					key: 'aboutTheAssociation',
					label: (
						<Link href={HRef.introductionToTheAssociation}  aria-label="about The Association">
							{data.aboutTheAssociation}
						</Link>
					),
				},
				{
					key: 'associationLicenseCertificate',
					label: (
						<Link href={HRef.certification} aria-label="association License Certificate">
							{data.associationLicenseCertificate}
						</Link>
					),
				},
				{
					key: 'organizationalChart',
					label: (
						<Link href={HRef.OrganizationStructure} aria-label="organizational Chart">
							{data.organizationalChart}
						</Link>
					),
				},
			],
		},
		{
			key: '2',
			label: (
				<Link href={HRef.strategicDirections} aria-label="strategic Directions">
					{data.strategicDirections}
				</Link>
			),
		},
		{
			key: '3',
			label: data.boardOfDirectors,
			type: childrenType,
			children: [
				{
					key: 'membersOfTheBoardOfDirectors',
					label: (
						<Link href={HRef.boardOfDirectors} aria-label="members Of The Board Of Directors">
							{data.membersOfTheBoardOfDirectors}
						</Link>
					),
				},
				{
					key: 'standingCommittees',
					label: (
						<Link href={HRef.standingCommittees} aria-label="standing Committees">
							{data.standingCommittees}
						</Link>
					),
				},
			],
		},
		{
			key: '4',
			label: <Link href={HRef.founders} aria-label="founders">{data.founders}</Link>,
		},
		{
			key: '5',
			label: (
				<Link href={HRef.executiveManagement} aria-label="executive Management">
					{data.executiveManagement}
				</Link>
			),
		},
		{
			key: '6',
			label: <Link href={HRef.financialReports} aria-label="financial Reports">{data.reports}</Link>,
		},
		{
			key: '7',
			label: (
				<Link href={HRef.councilMeetings} aria-label="minutes Of Association Meetings">
					{data.minutesOfAssociationMeetings}
				</Link>
			),
		},
		{
			key: '8',
			label: (
				<Link href={HRef.regulationsAndPolicies} aria-label="regulations And Policies">
					{data.regulationsAndPolicies}
				</Link>
			),
		},
	];
	return (
		<DropdownBase
			trigger={trigger}
			title={data.aboutTheAssociation}
			items={items}
		/>
	);
};
export default AboutAssociationDropdown;

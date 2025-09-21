import React, { FC } from 'react';
import { useI18n } from '@/src/locales';

interface IProps {}

const CallUs: FC<IProps> = (props) => {
	const t = useI18n();
	const members = [
		{
			text: t('activeMember'),
			value: t(
				'theAnnualMembershipFeeIs_500RiyalsTakingIntoAccountTheMembershipConditionsBelow',
			),
		},
		{
			text: t('associateMember'),
			value: t('theAnnualMembershipFeeIs_100Riyals'),
		},
		{
			text: t('honoraryMember'),
		},
		{
			text: t('honoraryMember2'),
		},
	];
	return (
		<section>
			<h2 className={'mb-[20px] c_004053 f-32-700'}>
				{t('typesOfMembershipAndConditionsOfJoining')}
			</h2>
			<p className={'f-16-600 c_2D2D2D mb-[20px]'}>
				{t('typesOfMembershipAndConditionsOfJoiningDescription')}
			</p>
			<div className="grid grid-cols-12 gap-[24px] mb-[30px]">
				{members.map((item, index) => (
					<div key={index} className={'md:col-span-6 col-span-12'}>
						<div
							className={
								'h-full p-[15px] border b-c_F1F2EC rounded-[10px] gap-[10px]'
							}
						>
							<h6 className={'f-18-700 c_F47B3D'}>{item.text}</h6>
							{item.value && (
								<p className={'f-14-400 c_black mt-[5px]'}>
									{item.value}
								</p>
							)}
						</div>
					</div>
				))}
			</div>
			<h2 className={'mb-[10px] c_004053 f-24-700'}>
				{t('typesOfMembershipAndConditionsOfJoining')}
			</h2>
			<ul className={'info-list'}>
				<li>{t('conditionsForAWorkingMemberOfTheAssociationList1')}</li>
				<li>{t('conditionsForAWorkingMemberOfTheAssociationList2')}</li>
				<li>{t('conditionsForAWorkingMemberOfTheAssociationList3')}</li>
				<li>{t('conditionsForAWorkingMemberOfTheAssociationList4')}</li>
			</ul>
		</section>
	);
};
export default CallUs;

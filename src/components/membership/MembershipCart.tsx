import React, { FC, useEffect } from 'react';
import { useI18n } from '@/src/locales';
import MembershipCard from '@/src/components/ui/cards/MembershipCard';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import MembershipWideCard from '@/src/components/ui/cards/MembershipWideCard';
import OrderSummeryCard from '@/src/components/ui/cards/OrderSummeryCard';
import { IMembershipModel } from '@/src/models/membership';
import { useCreateHonoraryMembershipMutation } from '@/src/store/RTKQuery/membership/membershipApi';
import { notification } from 'antd/lib';
import { useRouter } from 'next/router';

interface IProps {
	data: IMembershipModel;
	membershipList: IMembershipModel[];
}

const MembershipCart: FC<IProps> = (props) => {
	const { data, membershipList } = props;
	const t = useI18n();
	const [createHonoraryMembership, creatHonoraryMembershipResult] =
		useCreateHonoraryMembershipMutation();
	const router = useRouter();

	useEffect(() => {
		if (creatHonoraryMembershipResult.isSuccess) {
			notification.success({
				message: creatHonoraryMembershipResult.data.data,
			});
			router.push(HRef.home);
		}
	}, [creatHonoraryMembershipResult.isSuccess]);

	return (
		<div>
			<div className="container">
				<CustomBreadcrumb
					className={'mb-[20px] mt-[20px]'}
					data={[
						{
							title: <Link href={HRef.home}>{t('home')}</Link>,
						},
						{
							title: (
								<Link href={HRef.membership + '/' + data.id}>
									{t('membershipDetails')}
								</Link>
							),
						},
						{
							title: t('cart'),
						},
					]}
				/>
				<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
					<div className="lg:col-span-8 col-span-12">
						<MembershipWideCard
							className={'mb-[60px]'}
							image={data.image.url}
							name={data.title}
							description={data.description}
							price={data.price}
						/>
						<h3 className={'f-32-700 c_004053 mb-[30px]'}>
							{t('youMayAlsoLike')}
						</h3>
						<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
							{membershipList.map((item, index) => (
								<MembershipCard
									className={'xl:col-span-6 col-span-12'}
									key={index}
									data={item}
								/>
							))}
						</div>
					</div>

					<div className="lg:col-span-4 col-span-12">
						{data && Number(data?.price) > 0 ? (
							<OrderSummeryCard
								membershipId={data.id}
								total={data.price + ' ' + t('SAR')}
								duration={'شهر'}
								finalTotal={data.price + ' ' + t('SAR')}
								link={{
									href: HRef.membershipPay,
									text: t('continueToPay'),
								}}
							/>
						) : (
							<OrderSummeryCard
								membershipId={data.id}
								total={data.price + ' ' + t('SAR')}
								duration={'شهر'}
								finalTotal={data.price + ' ' + t('SAR')}
								button={{
									text: t('continueToPay'),
									onClick: () => {
										createHonoraryMembership();
									},
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default MembershipCart;

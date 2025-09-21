import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import CustomBreadcrumb from '@/src/components/ui/CustomBreadcrumb';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import MembershipCard from '@/src/components/ui/cards/MembershipCard';
import CheckIcon from '@/src/components/ui/icons/CheckIcon';
import { IMembershipModel } from '@/src/models/membership';
import CustomImage from '@/src/components/ui/CustomImage';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import NotAuthModal from '../ui/modals/NotAuthModal';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

interface IProps {
	data: IMembershipModel;
	membershipList: IMembershipModel[];
}

const MembershipDetails: FC<IProps> = (props) => {
	const [isModalOpen, setIsModalOpen] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);

	const { data, membershipList } = props;
	const t = useI18n();
	const { user } = useSelector(selectAuthUserSlice);
	return (
		<>
			<div>
				<div className="container">
					<CustomBreadcrumb
						className={'mb-[20px] mt-[20px]'}
						data={[
							{
								title: (
									<Link href={HRef.home} aria-label="home">
										{t('home')}
									</Link>
								),
							},
							{
								title: t('membershipDetails'),
							},
						]}
					/>
					<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
						<div className="md:col-span-4 col-span-12  ">
							<div
								className={
									'flex items-center rounded-[10px] py-5 bg-c_white border justify-center h-full w-full'
								}
							>
								<CustomImage
									src={data.image.url}
									className=" w-[150px] h-[150px] mx-auto "
								/>
							</div>
						</div>
						<div className="md:col-span-8 col-span-12 bg-c_white">
							<div className="rounded-[10px] border p-[25px]">
								<h1 className={'f-24-700 c_004053 mb-[15px]'}>
									{data.title}
								</h1>
								<p className={'f-16-500 c_2D2D2D mb-[30px]'}>
									{data.description}
								</p>
								<ul
									className={
										'flex flex-col gap-[10px] mb-[25px]'
									}
								>
									{data.features.map((item, index) => (
										<li
											key={index}
											className={'flex gap-[10px]'}
										>
											<CheckIcon />
											<p className={'f-14-600 c_black'}>
												{item.title}
											</p>
										</li>
									))}
								</ul>
								<p className={'f-24-700 c_black mb-[25px]'}>
									{data.price + ' ' + t('SAR')}
								</p>
								<Link
									className={
										'button button-secondary inline-block'
									}
									aria-label={t('subscribe')}
									href={
										user
											? HRef.membership +
												'/' +
												data.id +
												'/cart'
											: HRef.login
									}
									onClick={(e) => {
										if (!user?.id) {
											e.preventDefault();
											setIsModalOpen({
												statusChange:
													!isModalOpen.statusChange,
												value: true,
											});
										}
									}}
								>
									{t('subscribe')}
								</Link>
							</div>
						</div>
					</div>
					<h2 className={'f-32-700 c_004053 mb-[30px]'}>
						{t('youMayAlsoLike')}
					</h2>
					<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
						{membershipList.map((item, index) => (
							<MembershipCard
								className={
									'lg:col-span-4 md:col-span-6 col-span-12'
								}
								key={index}
								data={item}
							/>
						))}
					</div>
				</div>
			</div>
			<NotAuthModal openModal={isModalOpen} />
		</>
	);
};
export default MembershipDetails;

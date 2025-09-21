import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import UserIcon from '@/src/components/ui/icons/UserIcon';
import DateIcon from '@/src/components/ui/icons/DateIcon';
import Location2Icon from '@/src/components/ui/icons/Location2Icon';
import MessageIcon from '@/src/components/ui/icons/MessageIcon';
import Phone2Icon from '@/src/components/ui/icons/Phone2Icon';
import WorldIcon from '@/src/components/ui/icons/WorldIcon';
import PremiumIcon from '@/src/components/ui/icons/PremiumIcon';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import TrackCard from '@/src/components/ui/cards/TrackCard';
import Link from 'next/link';
import { HRef } from '@/src/utilities/href';
import { ITrackLikeMyProfile, ITrackModel } from '@/src/models/track';
import Image from 'next/image';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';
import CancelModal from '@/src/components/ui/modals/CancelModal';
import utc from 'dayjs/plugin/utc';
import { IProfileModel } from '@/src/models/user';
import { isEmpty } from 'lodash';

dayjs.extend(localizedFormat);
dayjs.extend(utc);

interface IProps {
	data?: { data: IProfileModel };
	isViewProfile?: boolean;
	TrackLikeMyProfile?: ITrackLikeMyProfile;
	refetch?: () => void;
}

const Profile: FC<IProps> = (props) => {
	const { data, isViewProfile, TrackLikeMyProfile, refetch } = props;
	const t = useI18n();
	const [donationId, setDonationId] = useState<number>();

	const [cancelMembershipModal, setCancelMembershipModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	const [cancelDonationModal, setCancelDonationModal] =
		useState<IStatusChangeModel>(new StatusChangeModel());
	return (
		<div>
			{data && (
				<>
					<div className="grid grid-cols-12 gap-[24px] mb-[40px]">
						<div
							className={`${!isViewProfile ? 'xl:col-span-7 ' : 'xl:col-span-12'} col-span-12`}
						>
							{!isViewProfile && (
								<div className="py-[25px] px-[20px] rounded-[10px] border b-c_EDF4F2 bg-c_white">
									<h3
										className={
											'f-24-700 c_004053 mb-[20px]'
										}
									>
										{t('personalInformation')}
									</h3>

									<div className="grid grid-cols-12 gap-[24px]">
										<div
											className={`md:col-span-6 col-span-12`}
										>
											<ul
												className={
													'flex flex-col gap-[20px]'
												}
											>
												<li
													className={
														'flex items-center gap-[15px]'
													}
												>
													<UserIcon
														className={
															'fill-c_004053'
														}
													/>
													<span
														className={
															'f-18-600 c_737373'
														}
													>
														{data.data.name}
													</span>
												</li>
												<li
													className={
														'flex items-center gap-[15px]'
													}
												>
													<DateIcon
														className={
															'fill-c_004053'
														}
													/>
													<span
														className={
															'f-18-600 c_737373'
														}
													>
														{dayjs(
															data.data.birthDay,
														)
															.utc()
															.format('LL')}
													</span>
												</li>
												<li
													className={
														'flex items-center gap-[15px]'
													}
												>
													<Location2Icon
														className={
															'fill-c_004053'
														}
													/>
													<span
														className={
															'f-18-600 c_737373'
														}
													>
														{data.data.city}
													</span>
												</li>
											</ul>
										</div>
										<div
											className={
												'md:col-span-6 col-span-12'
											}
										>
											<ul
												className={
													'flex flex-col gap-[20px]'
												}
											>
												<li
													className={
														'flex items-center gap-[15px] line-clamp-2 '
													}
												>
													<MessageIcon />
													<span
														className={
															'f-18-600 c_737373'
														}
													>
														{data.data.email}
													</span>
												</li>

												<li
													className={
														'flex items-center gap-[15px]'
													}
												>
													<Phone2Icon />
													<span
														className={
															'f-18-600 c_737373'
														}
													>
														{data.data.mobile}
													</span>
												</li>
												<li
													className={
														'flex items-center gap-[15px]'
													}
												>
													<WorldIcon />
													<span
														className={
															'f-18-600 c_737373'
														}
													>
														{data.data.country}
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							)}
						</div>
						{!isViewProfile && (
							<>
								<div className={'xl:col-span-5 col-span-12 '}>
									<div className="py-[25px] px-[20px] rounded-[10px] border b-c_EDF4F2 bg-c_white h-full">
										<h3
											className={
												'f-24-700 c_004053 mb-[20px] text-center'
											}
										>
											{t('yourMembership')}
										</h3>
										{data.data.subscription ? (
											<div className="flex items-center gap-[20px]">
												<div className={'w-full'}>
													<p
														className={
															'f-14-500 c_black mb-[15px] w-full'
														}
													>
														انت الان على{' '}
														{
															data.data
																.subscription
																.title
														}
													</p>
													{data.data.subscription
														.isActive ? (
														<button
															onClick={() => {
																setCancelMembershipModal(
																	{
																		statusChange:
																			!cancelMembershipModal.statusChange,
																		value: true,
																	},
																);
															}}
															className={
																'button button-warning w-full'
															}
														>
															{t(
																'cancelSubscription',
															)}
														</button>
													) : (
														<Link
															href={
																HRef.membership
															}
															className={
																'button button-secondary'
															}
														>
															{t(
																'changeYourMembership',
															)}
														</Link>
													)}
												</div>
												<div className="image relative w-[80px] h-[80px]">
													<Image
														fill
														src={
															data.data
																.subscription
																.logo
														}
														alt={''}
													/>
												</div>
											</div>
										) : (
											<div className="flex items-center gap-[20px]">
												<div className={'w-full'}>
													<p
														className={
															'f-14-500 c_black mb-[15px]'
														}
													>
														انت الان غير مشترك فى اى
														عضويه
													</p>
													<Link
														href={HRef.membership}
														className={
															'button button-secondary'
														}
													>
														أشترك الأن
													</Link>
												</div>
												<PremiumIcon
													className={'shrink-0'}
												/>
											</div>
										)}
									</div>
								</div>
								{data.data.honoraryMembership &&
									data.data.honoraryMembership.isActive && (
										<div
											className={
												'xl:col-span-6 col-span-12'
											}
										>
											<div className="py-[25px] px-[20px] rounded-[10px] border b-c_EDF4F2 bg-c_white">
												<h3
													className={
														'f-24-700 c_004053 mb-[20px] text-center'
													}
												>
													{t('yourMembership')}
												</h3>

												<div className="flex items-center gap-[20px]">
													<p
														className={
															'f-14-500 c_black mb-[15px] w-full'
														}
													>
														انت الان على{' '}
														{
															data.data
																.honoraryMembership
																.title
														}
													</p>

													<div className="image relative w-[80px] h-[80px]">
														<Image
															fill
															src={
																data.data
																	.honoraryMembership
																	.logo
															}
															alt={''}
														/>
													</div>
												</div>
											</div>
										</div>
									)}

								{data.data.donations.map((donation, index) => (
									<div
										key={index}
										className={'xl:col-span-6 col-span-12'}
									>
										<div className="py-[25px] px-[20px] rounded-[10px] border b-c_EDF4F2 bg-c_white">
											<h3
												className={
													'f-24-700 c_004053 mb-[20px] text-center'
												}
											>
												{t('donation')}
											</h3>
											{donation.isActive ? (
												<div className="flex items-center gap-[20px]">
													<div className={'w-full'}>
														<p
															className={
																'f-14-500 c_black mb-[15px] w-full'
															}
														>
															{t(
																'amountOfDonation',
															)}
															: {donation.amount}
														</p>

														<button
															onClick={() => {
																setDonationId(
																	donation.id,
																);
																setCancelDonationModal(
																	{
																		statusChange:
																			!cancelDonationModal.statusChange,
																		value: true,
																	},
																);
															}}
															className={
																'button button-warning w-full'
															}
														>
															{t(
																'cancelDonation',
															)}
														</button>
													</div>
												</div>
											) : (
												<div className="flex items-center gap-[20px]">
													<div className={'w-full'}>
														<p
															className={
																'f-14-500 c_black mb-[15px]'
															}
														>
															لايوجد تبرع
														</p>
														<Link
															href={
																HRef.financialDonation
															}
															className={
																'button button-secondary'
															}
														>
															تبرع الأن
														</Link>
													</div>
												</div>
											)}
										</div>
									</div>
								))}
							</>
						)}
					</div>
					{!isEmpty(TrackLikeMyProfile?.data?.items) && (
						<h3 className={'mb-[30px] f-32-700 c_004053'}>
							{t('yourSavedTracks')}
						</h3>
					)}

					<div className="grid grid-cols-12 gap-[24px] mb-[60px]">
						{TrackLikeMyProfile?.data?.items.map((item, index) => {
							let itemClone: ITrackModel = { ...item };
							itemClone.isLiked = true;
							return (
								<TrackCard
									key={index}
									className={
										'md:col-span-6 col-span-12 lg:col-span-4 xl:col-span-3'
									}
									onLike={() => {
										refetch?.();
									}}
									vertical={true}
									data={itemClone}
									showStart={true}
									isViewProfile={isViewProfile}
								/>
							);
						})}
					</div>
				</>
			)}
			<CancelModal
				openModal={cancelMembershipModal}
				title={t('membership')}
				memberShip={true}
			/>
			<CancelModal
				openModal={cancelDonationModal}
				title={t('donation')}
				memberShip={false}
				id={donationId}
			/>
		</div>
	);
};
export default Profile;

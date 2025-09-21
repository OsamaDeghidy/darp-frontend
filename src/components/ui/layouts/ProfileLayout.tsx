import React, { FC, ReactNode, useEffect, useState } from 'react';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import Link from 'next/link';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import { IFooterModel, IHeaderModel } from '@/src/models/page';
import CustomImage from '@/src/components/ui/CustomImage';
import UploadImage from '@/src/components/ui/fields/UploadImage';
import UploadCoverImage from '@/src/components/ui/fields/UploadCoverImage';
import TracksProfile from '../../tracks/TracksProfile';
import { IProfileModel } from '@/src/models/user';
import defaultCover from '@/public/images/default-cover.jpg';
import FollowProfile from '../../profile/FollowProfile';
import { ITrackMyProfile } from '@/src/models/track';

interface IProps {
	children: ReactNode;
	title: string;
	isEditProfile?: boolean;
	isViewProfile?: boolean;
	header: IHeaderModel;
	footer: IFooterModel;
	data?: { data: IProfileModel };
	onChangeProfileImage?: (url: string) => void;
	onChangeCoverImage?: (url: string) => void;
	trackProfileById?: ITrackMyProfile;
}

const ProfileLayout: FC<IProps> = (props) => {
	const {
		children,
		title,
		isEditProfile = false,
		isViewProfile = false,
		onChangeProfileImage,
		onChangeCoverImage,
		header,
		footer,
		data,
		trackProfileById,
	} = props;
	const t = useI18n();
	// const { data, isSuccess, isLoading } = useGetMyProfileQuery();
	const [coverImage, setCoverImage] = useState<string>();
	const [activeTab, setActiveTab] = useState<string>('basicInfo');

	useEffect(() => {
		if (data && data.data.coverImage) {
			setCoverImage(data.data.coverImage);
		}
	}, [data]);

	useEffect(() => {
		if (onChangeCoverImage && coverImage) {
			onChangeCoverImage(coverImage);
		}
	}, [coverImage, onChangeCoverImage]);

	return (
		<MainLayout title={title} header={header} footer={footer}>
			<CustomImage
				src={coverImage || defaultCover}
				className={'h-[500px] w-full block object-cover'}
			/>
			<div className="container">
				<div
					className={`relative z-3 ${
						isEditProfile ? 'mt-[-140px]' : 'mt-[-70px]'
					} mb-[40px] `}
				>
					{isEditProfile && (
						<div className={'flex justify-end mb-[30px]'}>
							<UploadCoverImage
								onUpload={(url) => {
									setCoverImage(url);
								}}
							/>
						</div>
					)}
					{data && (
						<div className="rounded-[10px] box-shadow bg-c_white">
							<div className="flex items-center justify-between gap-[20px] flex-wrap pb-[10px] border-solid border-b-[1px] px-[30px] py-[10px]">
								<div className="flex items-center gap-[15px]">
									{isEditProfile ? (
										<UploadImage
											url={data.data.profileImage}
											onUpload={(url) => {
												if (onChangeProfileImage) {
													onChangeProfileImage(url);
												}
											}}
										/>
									) : (
										<>
											{data.data.profileImage && (
												<CustomImage
													src={data.data.profileImage}
													alt={''}
													className={
														'w-[100px] h-[100px] object-cover rounded-full overflow-hidden'
													}
												/>
											)}
										</>
									)}

									<div>
										<div className="flex items-center mb-[5px] gap-x-[15px]">
											<h4 className={'f-24-700 c_black '}>
												{data.data.name}
											</h4>
											{isViewProfile && (
												<FollowProfile
													id={data?.data.userId}
													isFollowing={
														data?.data?.isFollowing
													}
												/>
											)}
										</div>

										<div className="flex items-center gap-x-[10px]">
											<p
												className={
													'f-20-500 c_2D2D2D flex gap-x-[5px]'
												}
											>
												{data?.data?.following}
												<span>{t('following')}</span>
											</p>
											<p
												className={
													'f-20-500 c_2D2D2D flex gap-x-[5px]'
												}
											>
												{data?.data?.followers}
												<span>{t('followers')}</span>
											</p>
											<p
												className={
													'f-20-500 c_2D2D2D flex gap-x-[5px]'
												}
											>
												{data?.data?.companions}
												<span>{t('companions')}</span>
											</p>
										</div>
									</div>
								</div>
								{!isEditProfile && !isViewProfile && (
									<Link
										href={HRef.editProfile}
										className={'button button-secondary'}
									>
										{t('editProfile')}
									</Link>
								)}
							</div>
							<div className="flex ">
								<button
									className={`py-[12px] px-[24px] f-16-500  ${
										activeTab === 'basicInfo'
											? 'btn-active'
											: ''
									}`}
									onClick={() => setActiveTab('basicInfo')}
								>
									{t('BasicInformation')}
								</button>
								<button
									className={`py-[12px] px-[24px] f-16-500 ${
										activeTab === 'tracks'
											? 'btn-active'
											: ''
									}`}
									onClick={() => setActiveTab('tracks')}
								>
									{t('tracks')}
								</button>
							</div>
						</div>
					)}
				</div>
				<div>
					{activeTab === 'basicInfo' && children}
					{activeTab === 'tracks' && (
						<TracksProfile
							trackProfileById={trackProfileById}
							isViewProfile={isViewProfile}
							
						/>
					)}
				</div>
			</div>
		</MainLayout>
	);
};

export default ProfileLayout;

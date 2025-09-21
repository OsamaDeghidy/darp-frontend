import React, { FC, useEffect } from 'react';
import { useI18n } from '@/src/locales';
import { getString } from '@/src/utilities/string';
import PlaceIcon from '@/src/components/ui/icons/PlaceIcon';
import TimeIcon from '@/src/components/ui/icons/TimeIcon';
import TrackIcon from '@/src/components/ui/icons/TrackIcon';
import DistanceIcon from '@/src/components/ui/icons/DistanceIcon';
import FavoriteIcon from '@/src/components/ui/icons/FavoriteIcon';
import StarIcon from '@/src/components/ui/icons/StarIcon';
import { useRouter } from 'next/router';
import { ITrackModel } from '@/src/models/track';
import { isEmpty } from 'lodash';
import CustomImage from '@/src/components/ui/CustomImage';
import Link from 'next/link';
import {
	useLikeTrackMutation,
	useUnLikeTrackMutation,
} from '@/src/store/RTKQuery/track/trackApi';
import Loader from '@/src/components/ui/Loader';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import defaultImage from '@/public/images/default-track-photo.png';
import Image from 'next/image';
import darbImage from '@/public/images/darb.png';
import { HRef } from '@/src/utilities/href';

interface IProps {
	data: ITrackModel;
	showStart?: boolean;
	className?: string;
	onClick?: () => void;
	onLike?: () => void;
	vertical?: boolean;
	isViewProfile?: boolean;
}

const TrackCard: FC<IProps> = (props) => {
	const {
		className,
		data,
		showStart = false,
		onLike,
		onClick,
		vertical,
		isViewProfile = false,
	} = props;
	const t = useI18n();
	const router = useRouter();
	const [likeTrack, likeTrackResponse] = useLikeTrackMutation();
	const [unLikeTrack, unLikeTrackResponse] = useUnLikeTrackMutation();
	const { user } = useSelector(selectAuthUserSlice);

	useEffect(() => {
		if (likeTrackResponse.isSuccess || unLikeTrackResponse.isSuccess) {
			onLike && onLike();
		}
	}, [likeTrackResponse.isSuccess, unLikeTrackResponse.isSuccess]);
	return (
		<div className={getString(className)} onClick={onClick}>
			<div
				className={
					'track-card border-[1px] border-[solid] border-[#EDF4F2] rounded-[10px] flex items-center gap-[15px] overflow-hidden [box-shadow:0px_0px_15px_0px_#00000005] ' +
					` ${vertical ? 'flex-col' : 'flex-row'}`
				}
			>
				<div
					className={
						'relative ' +
						` ${vertical ? 'w-full' : 'flex-grow-0 flex-shrink-0 basis-[25.5%]'}`
					}
				>
					<Link
						href={
							HRef.tracks + '/' + data.id + '/' + data.trackType
						}
					>
						<CustomImage
							className={
								'flex-shrink-0 object-cover w-full h-[160px] rounded-[10px]' +
								` ${vertical ? 'min-w-full h-[142px]' : ''}`
							}
							src={
								!isEmpty(data.images)
									? data.images[0].url
									: defaultImage
							}
						/>
					</Link>

					{user && !isViewProfile && (
						<button
							className="py-[5px] px-[12px] rounded-[5px] bg-c_white absolute top-[10px] right-[10px]"
							onClick={() => {
								if (
									!likeTrackResponse.isLoading &&
									!unLikeTrackResponse.isLoading
								) {
									const payload = {
										contentId: data.id,
										trackType: data.trackType,
									};

									if (data.isLiked) {
										unLikeTrack(payload);
									} else {
										likeTrack(payload);
									}
								}
							}}
						>
							{likeTrackResponse.isLoading ||
							unLikeTrackResponse.isLoading ? (
								<Loader />
							) : (
								<>
									<FavoriteIcon
										isLiked={data.isLiked}
										className={'fill-c_F47B3D'}
									/>
								</>
							)}
						</button>
					)}
					{showStart && (
						<button className="flex items-center gap-[5px] py-[5px] px-[12px] rounded-[5px] bg-c_white absolute top-[10px] left-[10px]">
							<StarIcon className={'fill-c_F47B3D'} />
							<span className={'f-14-700 c_F47B3D'}>5</span>
						</button>
					)}
				</div>
				<div className={'p-[15px] w-full '}>
					<Link
						className={'inline-block  mb-[10px]'}
						href={
							HRef.tracks + '/' + data.id + '/' + data.trackType
						}
					>
						<h2 className={'f-18-700 c_F47B3D'}>{data.title}</h2>
					</Link>
					<p
						className={
							'mb-[10px] f-14-500 c_black  line-clamp-3 min-h-[54px] ]'
						}
						dangerouslySetInnerHTML={{
							__html: data.description,
						}}
					></p>
					<div className="flex gap-x-[10px]">
						<ul className="flex gap-2 flex-col">
							<li>
								<PlaceIcon />
								<span>{data.region?.title}</span>
							</li>
							<li>
								<TrackIcon />
								<span>{data.difficulty?.title}</span>
							</li>
						</ul>
						<ul className="flex gap-2 flex-col">
							<li>
								<DistanceIcon />
								<span>{data.length}</span>
							</li>
							<li>
								<TimeIcon />
								<span>{data.duration}</span>
							</li>
						</ul>
					</div>
					<div className="flex mt-[15px] gap-[10px] items-center">
						<div className="h-[30px] min-w-[30px] rounded-[50%] relative overflow-hidden bg-[--_9AD6CC2]">
							{data.userId === null ? (
								<Image
									className="py-[10px] px-[5px]"
									alt="darbImage"
									src={darbImage}
									objectFit="contain"
									layout="fill"
								/>
							) : data.createdBy?.profileImage ? (
								<>
									<Link
										href={`/profile/${data.userId}`}
										aria-label={t('showMore')}
									>
										<Image
											className="py-[10px] px-[5px]"
											alt={
												data.createdBy.name ||
												'User Image'
											}
											src={data.createdBy.profileImage}
											objectFit="contain"
											layout="fill"
										/>
									</Link>
								</>
							) : (
								<div className="bg-gray-300 w-full h-full flex justify-center items-center">
									<span className="text-white">N/A</span>
								</div>
							)}
						</div>

						<span className="f-14-500 c_004053">
							{data.userId === null ? (
								'جمعية درب'
							) : (
								<Link href={`/profile/${data.userId}`}>
									{data.createdBy?.name || 'Unknown User'}
								</Link>
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TrackCard;

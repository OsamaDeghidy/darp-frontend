import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import PlaceIcon from '@/src/components/ui/icons/PlaceIcon';
import TimeIcon from '@/src/components/ui/icons/TimeIcon';
import TrackIcon from '@/src/components/ui/icons/TrackIcon';
import DistanceIcon from '@/src/components/ui/icons/DistanceIcon';
import MarkerIcon from '@/src/components/ui/icons/MarkerIcon';
import Height2Icon from '@/src/components/ui/icons/Height2Icon';
import TopHeightIcon from '@/src/components/ui/icons/TopHeightIcon';
import LowHeightIcon from '@/src/components/ui/icons/LowHeightIcon';
import { DetailsTitle } from '@/src/components/ui/typography/typography';
import Image from 'next/image';
import { ITrackModel } from '@/src/models/track';
import YoutubeVideo from '@/src/components/ui/YoutubeVideo';
import { TrackDetailsSliderWithThumb } from '@/src/components/ui/sliders/TrackDetailsSlider';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import {
	IStatusChangeModel,
	StatusChangeModel,
} from '@/src/models/status-change';

import utc from 'dayjs/plugin/utc';
import Link from 'next/link';
import darbImage from '@/public/images/darb.png';
import { TrackComments } from '@/src/components/tracks/TrackComments';
import { APIProvider } from '@vis.gl/react-google-maps';
import TrackDetailsMap from '@/src/components/ui/maps/TrackDetailsMap';

dayjs.extend(utc);
dayjs.extend(localizedFormat);
interface IProps {
	data: ITrackModel;
}

const TrackDetails: FC<IProps> = (props) => {
	const { data } = props;

	const t = useI18n();

	const [removeValueNow, setRemoveValueNow] = useState<IStatusChangeModel>(
		new StatusChangeModel(),
	);
	const sliderSettings = {
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		// infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		rtl: true,
	};

	const thumbSetting = {
		dots: false,
		centerMode: true,
		centerPadding: '60px',
		swipeToSlide: true,
		focusOnSelect: true,
		slidesToShow: 5,
		slidesToScroll: 1,
	};

	return (
		<section className="section track-details">
			<div className="container">
				<h1 className={'mb-[20px] c_004053 f-32-700'}>{data.title}</h1>
				<div className="description border rounded-[10px] p-[20px] bg-c_white">
					<p
						dangerouslySetInnerHTML={{ __html: data.description }}
					></p>
				</div>
				<div className="trail-meta grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border rounded-[10px] p-[20px] mt-[20px] bg-c_white">
					<div className="trail-data flex items-center">
						<PlaceIcon className="inline-block ml-2" />
						<span className="ml-1">{t('region')}:</span>
						<span className="font-bold">{data.region?.title}</span>
					</div>
					<div className="trail-data flex items-center">
						<MarkerIcon className="inline-block ml-2" />
						<span className="ml-1">{t('city')}:</span>
						<span className="font-bold">{data.city?.title}</span>
					</div>
					<div className="trail-data flex items-center">
						<DistanceIcon className="inline-block ml-2" />
						<span className="ml-1">{t('distance')}:</span>
						<span className="font-bold">{data.length}</span>
					</div>
					<div className="trail-data flex items-center">
						<TrackIcon className="inline-block ml-2" />
						<span className="ml-1">{t('howDifficultItIs')}:</span>
						<span className="font-bold">
							{data.difficulty?.title}
						</span>
					</div>
					<div className="trail-data flex items-center">
						<TimeIcon className="inline-block ml-2" />
						<span className="ml-1">{t('duration')}:</span>
						<span className="font-bold">{data.duration}</span>
					</div>
					<div className="trail-data flex items-center">
						<Height2Icon className="inline-block ml-2" />
						<span className="ml-1">{t('HeightGainedOrLost')}:</span>
						<span className="font-bold">
							{data.heightGainedOrLost}
						</span>
					</div>
					<div className="trail-data flex items-center">
						<TopHeightIcon className="inline-block ml-2" />
						<span className="ml-1">
							{t('HighestElevationAboveSeaLevel')}:
						</span>
						<span className="font-bold">
							{data.highestElevationAboveSeaLevel}
						</span>
					</div>
					<div className="trail-data flex items-center">
						<LowHeightIcon className="inline-block ml-2" />
						<span className="ml-1">
							{t('LowestElevationAboveSeaLevel')}:
						</span>
						<span className="font-bold">
							{data.minimumHeightAboveSeaLevel}
						</span>
					</div>
				</div>
				<YoutubeVideo
					title={t('trackTitle')}
					className="trail-video mt-[20px] rounded-[10px] overflow-hidden"
					image="/images/home-video-thumb.jpg"
					url={data.youtubeVideoUrl}
				/>
				<DetailsTitle text={t('trailImages')} className="mt-[30px]" />
				<TrackDetailsSliderWithThumb
					slides={data.images}
					settings={sliderSettings}
					thumbSetting={thumbSetting}
				/>
				<DetailsTitle text={t('trailMap')} className="mt-[30px]" />
				<APIProvider
					apiKey={process.env.GOOGLE_MAPS_API_KEY || ''}
					libraries={['marker']}
				>
					<TrackDetailsMap
						trackId={data.id}
						trackType={data.trackType}
					/>
				</APIProvider>
				<DetailsTitle text={t('trailLocation')} className="mt-[30px]" />
				<div className="trial-location border rounded-[10px] p-[20px] flex justify-between items-center bg-c_white mb-[30px]">
					<div
						dangerouslySetInnerHTML={{
							__html: data.locationDescription,
						}}
					></div>
					<div className="qrcode-container relative">
						{data.qrCodeUrl && (
							<Image
								alt="QR code"
								src={data.qrCodeUrl}
								width={100}
								height={100}
								objectFit="contain"
							/>
						)}
					</div>
				</div>
				<DetailsTitle text={t('createBy')} className="mt-[30px]" />
				<div className="flex mt-[15px] gap-[10px] items-center">
					<div className="h-[40px] min-w-[40px] rounded-[50%] relative overflow-hidden bg-[--_9AD6CC2]">
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
								<Link href={`/profile/${data.userId}`}>
									<Image
										className="py-[10px] px-[5px]"
										alt={
											data.createdBy.name || 'User Image'
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

					<span className="f-16-700 c_004053">
						{data.userId === null ? (
							'جمعية درب'
						) : (
							<Link href={`/profile/${data.userId}`}>
								{data.createdBy?.name || 'Unknown User'}
							</Link>
						)}
					</span>
				</div>{' '}
				<TrackComments trackId={data.id} trackType={data.trackType} />
			</div>
		</section>
	);
};

export default TrackDetails;

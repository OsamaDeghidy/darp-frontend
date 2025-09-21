import React, { FC } from 'react';
import { SliderWrapper } from '@/src/components/home/slider';
import WhyTrails from '@/src/components/home/WhyTrails';
import HomeMap from '@/src/components/home/trails/';
import Statistics from '@/src/components/home/Statistics';
import HomeNews from '@/src/components/home/HomeNews';
import Tweets from '@/src/components/home/Tweets';
import DownloadApp from '@/src/components/home/DownloadApp';
import YoutubeVideo from '@/src/components/ui/YoutubeVideo';
import { useI18n } from '@/src/locales';
import { IHomeModel } from '@/src/models/home';

interface IProps {
	data: IHomeModel;
}

const Home: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	return (
		<>
			{data?.homeMainSlider && <SliderWrapper data={data.homeMainSlider} />}
			{data?.whyWalkingTrails && <WhyTrails data={data.whyWalkingTrails} />}
			{data?.kingdomTracks && <HomeMap data={data.kingdomTracks} />}
			{data?.beneficiaries && <Statistics data={data.beneficiaries} />}
			{data?.beneficiaries?.youtubeVideoUrl && (
				<YoutubeVideo
					title="home video"
					className="home-video"
					image="/images/home-video-thumb.jpg"
					url={data.beneficiaries.youtubeVideoUrl}
				/>
			)}
			{data?.latestNews && <HomeNews data={data.latestNews} />}
			{data?.twitter && <Tweets data={data.twitter} />}
			{data?.downloadApp && <DownloadApp data={data.downloadApp} />}
		</>
	);
};

export default Home;

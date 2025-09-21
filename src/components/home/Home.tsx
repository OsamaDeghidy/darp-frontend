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
			<SliderWrapper data={data.homeMainSlider} />
			<WhyTrails data={data.whyWalkingTrails} />
			<HomeMap data={data.kingdomTracks} />
			<Statistics data={data.beneficiaries} />
			{data.beneficiaries?.youtubeVideoUrl && (
				<YoutubeVideo
					title="home video"
					className="home-video"
					image="/images/home-video-thumb.jpg"
					url={data.beneficiaries.youtubeVideoUrl}
				/>
			)}
			<HomeNews data={data.latestNews} />
			<Tweets data={data.twitter} />
			<DownloadApp data={data.downloadApp} />
		</>
	);
};

export default Home;

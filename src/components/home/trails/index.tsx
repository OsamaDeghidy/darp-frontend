import React, { FC } from 'react';
import { SectionTitle } from '@/src/components/ui/typography/typography';
import { useI18n } from '@/src/locales';
import { IKingdomTracksModel } from '@/src/models/home';
import { useGetHomeMapTracksQuery } from '@/src/store/RTKQuery/track/trackApi';
import Loader from '@/src/components/ui/Loader';
import { isEmpty } from 'lodash';
import TrackMap from '@/src/components/ui/maps/TrackMap';

interface IProps {
	data: IKingdomTracksModel;
}

const HomeMap: FC<IProps> = (props) => {
	const { data } = props;
	const t = useI18n();
	const { data: points, isSuccess, isLoading } = useGetHomeMapTracksQuery();
	return (
		<section className="section">
			<SectionTitle
				text={data.title}
				className="section-title text-center"
			/>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{isSuccess && points && !isEmpty(points.data) && (
						<TrackMap
							points={points.data
								.filter((x) => x.firstPoint)
								.map((item) => {
									return {
										id: item.documentId,
										trackType: item.trackType,
										lat: Number(item.firstPoint.Latitude),
										lng: Number(item.firstPoint.Longitude),
									};
								})}
						/>
					)}
				</>
			)}
		</section>
	);
};

export default HomeMap;

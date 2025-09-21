import React, { FC, useEffect, useState } from 'react';
import { Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { IMapLocation } from '@/src/components/ui/maps/TrackMap';
import { useGetMapTrackDetailsQuery } from '@/src/store/RTKQuery/track/trackApi';
import Loader from '@/src/components/ui/Loader';
import { TrackTypeEnum } from '@/src/enums/track-type-enum';

interface IProps {
	height?: string;
	trackId: number;
	trackType: TrackTypeEnum;
}

const TrackDetailsMap: FC<IProps> = (props) => {
	const { trackId, trackType, height = '500px' } = props;
	const { data, isLoading, isSuccess } = useGetMapTrackDetailsQuery({
		id: trackId,
		type: trackType,
	});
	const [coordinates, setCoordinates] = useState<IMapLocation[]>([]);
	const [center, setCenter] = useState<IMapLocation>({
		lat: 24.774265,
		lng: 46.738586,
	});
	useEffect(() => {
		if (data && data.data && data.data[0]) {
			setCenter({
				lat: Number(data.data[0].Latitude),
				lng: Number(data.data[0].Longitude),
			});
			let arr: IMapLocation[] = [];
			data.data.map((item) => {
				arr.push({
					lat: Number(item.Latitude),
					lng: Number(item.Longitude),
				});
			});
			setCoordinates(arr);
		}
	}, [data]);

	const map = useMap();
	const maps = useMapsLibrary('maps');
	const position = { lat: 0, lng: -180 };

	if (!maps) {
		return null;
	}

	const flightPath = new maps.Polyline({
		path: coordinates,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2,
	});

	flightPath.setMap(map);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<Map
					style={{
						height: height,
					}}
					onCenterChanged={(event) => {
						setCenter(event.detail.center);
					}}
					center={center}
					defaultZoom={15}
					mapId={process.env.GOOGLE_MAPS_MAP_ID}
					gestureHandling={'greedy'}
					disableDefaultUI={true}
				>
					{/*{data && data.data && (
						<>
							{data.data.map((item, index) => (
								<AdvancedMarker
									position={{
										lat: Number(item.Latitude),
										lng: Number(item.Longitude),
									}}
									key={index}
								>
									<div className={'custom-marker'}>
										<svg
											width="12"
											height="16"
											viewBox="0 0 12 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.799 6.00319C11.6835 4.72424 11.2181 3.50178 10.4539 2.46978C10.0099 1.83497 9.44472 1.29422 8.79089 0.878713C8.13706 0.463208 7.40748 0.181141 6.6442 0.0487223C3.83782 -0.34388 1.86761 1.75728 1.62769 2.01902C0.668753 3.13502 0.101765 4.53443 0.0135918 6.00319C0.0135918 6.00319 -0.524354 10.6926 5.16838 15.6874C5.36003 15.8834 5.62133 15.9957 5.89542 16C6.09465 15.986 6.28372 15.9068 6.43342 15.7746C12.4024 11.027 11.799 6.00319 11.799 6.00319ZM5.88086 8.4751C5.34882 8.4751 4.82869 8.31735 4.38631 8.02177C3.94393 7.72618 3.5992 7.30604 3.39559 6.8145C3.19199 6.32296 3.1387 5.78208 3.2425 5.26026C3.34629 4.73844 3.60247 4.25911 3.97868 3.8829C4.35489 3.50669 4.83417 3.25052 5.35599 3.14672C5.87781 3.04293 6.41873 3.09617 6.91027 3.29977C7.40182 3.50338 7.82195 3.8482 8.11754 4.29058C8.41313 4.73295 8.57088 5.25304 8.57088 5.78509C8.57088 6.49853 8.28744 7.18274 7.78295 7.68722C7.27847 8.1917 6.59431 8.4751 5.88086 8.4751Z"
												fill={'red'}
											/>
										</svg>
									</div>
								</AdvancedMarker>
							))}
						</>
					)}*/}
				</Map>
			)}
		</>
	);
};

export default TrackDetailsMap;

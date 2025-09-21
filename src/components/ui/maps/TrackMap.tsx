import React, { FC, useEffect, useState } from 'react';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import TrackMarker from '../icons/TrackMarker';
import { HRef } from '@/src/utilities/href';
import { useRouter } from 'next/router';
import { TrackTypeEnum } from '@/src/enums/track-type-enum';

export interface IMapLocation {
	lat: number;
	lng: number;
	id?: number;
	trackType?: TrackTypeEnum;
}

interface IProps {
	height?: string;
	points: IMapLocation[];
}

const TrackMap: FC<IProps> = (props) => {
	const { points, height = '500px' } = props;
	const [center, setCenter] = useState<IMapLocation>({
		lat: 24.774265,
		lng: 46.738586,
	});
	useEffect(() => {
		if (points[0]) {
			setCenter({
				lat: Number(points[0].lat),
				lng: Number(points[0].lng),
			});
		}
	}, [points]);
	const router = useRouter();
	return (
		<APIProvider
			apiKey={process.env.GOOGLE_MAPS_API_KEY || ''}
			libraries={['marker']}
		>
			<Map
				style={{
					height: height,
				}}
				onCenterChanged={(event) => {
					setCenter(event.detail.center);
				}}
				center={center}
				defaultZoom={6}
				mapId={process.env.GOOGLE_MAPS_MAP_ID}
				aria-label="map"
			>
				{points.map((item, index) => (
					<AdvancedMarker
						onClick={() => {
							router.push(
								HRef.tracks +
									'/' +
									item.id +
									'/' +
									item.trackType,
							);
						}}
						position={{
							lat: Number(item.lat),
							lng: Number(item.lng),
						}}
						key={index}
						aria-label={`Track marker at ${item.lat}, ${item.lng}`} // Accessible label
					>
						<div
							className={'custom-marker '}
							aria-label="TrackMarker"
						>
							<TrackMarker />
						</div>
					</AdvancedMarker>
				))}
			</Map>
		</APIProvider>
	);
};

export default TrackMap;

import React, { FC, useState } from 'react';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import { Map } from '@vis.gl/react-google-maps';

interface IMap {
	center: {
		lat: number;
		lng: number;
	};
	styles?: google.maps.MapTypeStyle[];
}

const containerStyle = {
	width: '100%',
	height: '400px',
};

interface IProps {
	tracks: string[];
}

const styles = [
	{
		featureType: 'administrative.land_parcel',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'landscape.man_made',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'simplified',
			},
			{
				lightness: 20,
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
			{
				hue: '#f49935',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [
			{
				hue: '#fad959',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{
				hue: '#a1cdfc',
			},
			{
				saturation: 30,
			},
			{
				lightness: 49,
			},
		],
	},
];

const CustomMap: FC<IProps> = (props) => {
	const { tracks } = props;
	const [gpxData, setGpxData] = useState<
		FeatureCollection<Geometry, GeoJsonProperties>[]
	>([]);

	const [path, setPath] = useState<any[]>([]);

	/*	useEffect(() => {
			setGpxData([]);
			const fetchGpxData = async () => {
				try {
					tracks.map((track) => {
						fetch(tracks[0])
							.then((response) => {
								if (!response.ok) {
									throw new Error('Failed to fetch the file');
								}
								return response.text();
							})
							.then((data) => {
								let result = gpx(
									new DOMParsr().parseFromString(
										data,
										'text/xml',
									),e
								);
								setGpxData([...gpxData, result]);
							});
					});
				} catch (error) {
					console.error('Error fetching GPX data:', error);
				}
			};
	
			fetchGpxData().then((r) => {});
		}, [tracks]);*/

	/*	const map = useMap();
		const maps = useMapsLibrary('maps');
	
		useEffect(() => {
			setPath([]);
			gpxData.map((item) => {
				if (item.features[0].geometry.type === 'LineString') {
					let coordinates = item.features[0].geometry.coordinates.map(
						(position) => {
							return { lat: position[1], lng: position[0] };
						},
					);
					setPath([...path, coordinates]);
				}
			});
		}, [gpxData]);
		useEffect(() => {
			if (maps != null && path) {
				path.map((item) => {
					new maps.Polyline({
						path: item,
						geodesic: true,
						strokeColor: '#FF0000',
						strokeOpacity: 1.0,
						strokeWeight: 3,
						map: map,
					});
				});
			}
		}, [map, maps, path]);*/
	return (
		<>
			<Map
				style={{ height: '500px' }}
				defaultCenter={{ lat: 30.0051433, lng: 31.3815219 }}
				defaultZoom={11}
				gestureHandling={'greedy'}
				disableDefaultUI={true}
			/>
		</>
	);
};

export default CustomMap;

{
	/*
			<LoadScript googleMapsApiKey="AIzaSyBWs4kEppBNkazmiNugMLoOdjGhpwVgX78">
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={8}
					options={{ styles }}
				>
					{gpxData &&
						gpxData.features.map((feature, index) => {
							if (feature.geometry.type === 'LineString') {
								return (
									<Polyline
										key={index}
										path={feature.geometry.coordinates.map(
											([lng, lat]) => ({ lat, lng }),
										)}
										options={{
											strokeColor: 'red',
											strokeWeight: 2,
										}}
									/>
								);
							}
							// Handle other geometry types (e.g., Points, Polygons) if needed
							return null;
						})}
				</GoogleMap>
			</LoadScript>
*/
}

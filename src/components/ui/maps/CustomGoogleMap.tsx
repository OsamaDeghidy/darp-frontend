import { FC } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

interface IProps {
    lat?: number;
    lng?: number;
    height?: string;
}

const CustomGoogleMap: FC<IProps> = (props) => {
    const {lat = 21.4448831, lng = 39.813261, height = '300px'} = props;
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBWs4kEppBNkazmiNugMLoOdjGhpwVgX78',
    });

    return (
        isLoaded && (
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: height,
                }}
                center={{lat, lng}}
                zoom={10}
            ></GoogleMap>
        )
    );
};
export default CustomGoogleMap;

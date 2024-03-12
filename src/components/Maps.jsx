import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const Maps = () => {
  return (
    <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;

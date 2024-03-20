import { useEffect, useRef } from 'react';

const Location = ({ center, zoom }) => {
  const mapContainerRef = useRef(null);
  let map;

  useEffect(() => {
    fetchScript();
  }, []);

  const fetchScript = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&callback=initMap`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);
  };

  const initMap = () => {
    map = new window.google.maps.Map(mapContainerRef.current, {
      center,
      zoom,
    });
    new window.google.maps.Marker({
      position: center,
      map,
      title: 'Centro del mapa',
    });
  };

  return <div ref={mapContainerRef} className="h-full w-full" />;
};

export default Location;

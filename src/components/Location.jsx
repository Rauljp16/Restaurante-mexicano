import { useEffect, useRef } from 'react';

const Location = ({ center, zoom }) => {
  const mapContainerRef = useRef(null);
  let map;

  useEffect(() => {
    fetchScript();
    return () => {
      const script = document.querySelector(
        `script[src*="maps.googleapis.com"]`
      );
      if (script) script.remove();
      window.initMap = undefined;
    };
  }, []);

  const fetchScript = () => {
    if (!window.initMap) {
      window.initMap = () => {
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
    }

    if (!document.querySelector(`script[src*="maps.googleapis.com"]`)) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.maps) {
      window.initMap();
    }
  };

  return <div ref={mapContainerRef} className="h-full w-full" />;
};

export default Location;

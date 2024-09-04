import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
import "./Maps.css";
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1Ijoic2lkMTU1OTciLCJhIjoiY20wbmx2ZGl1MGRwazJqc2dlbGt0MGJjOSJ9.X-83Z676q9t6yf7QdiwXKg";

const Maps = (props) => {
    const { currentLat, currentLong, zoom } = props;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [markersList, setMarkersList] = useState([]);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [currentLong, currentLat],
          zoom: zoom,
        });
    }, []);

    useEffect(() => {
        markersList?.forEach((marker) => marker.remove())
        setMarkersList([]);
        const marker = new mapboxgl.Marker().setLngLat([currentLong, currentLat]).addTo(map.current);
        setMarkersList([...markersList, marker])
        return () => {
            markersList?.forEach((marker) => marker.remove())
            setMarkersList([]);
        }
    }, [currentLat, currentLong]);

    return (
        <div>
            <div ref={mapContainer} className="mapContainer" />
        </div>
    )
}

export default Maps
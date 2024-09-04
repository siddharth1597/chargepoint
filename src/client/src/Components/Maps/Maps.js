import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from 'react';
import "./Maps.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { accessTokenForDev } from '../../configs';

mapboxgl.accessToken = accessTokenForDev;

const Maps = (props) => {
    const { currentLat, currentLong, zoom } = props;
    const mapContainer = useRef(null);
    const map = useRef(null);
    let markersList = [];

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
        markersList.length = 0;
        const marker = new mapboxgl.Marker().setLngLat([currentLong, currentLat]).addTo(map.current);
        markersList.push(marker)
        return () => {
            markersList?.forEach((marker) => marker.remove())
            markersList.length = 0;
        }
    }, [currentLat, currentLong]);

    return (
        <div>
            <div ref={mapContainer} className="mapContainer" />
        </div>
    )
}

export default Maps
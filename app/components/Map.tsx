'use client';

import { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import { useState, useMemo, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from 'react-leaflet';
import { MapCordsObj } from '../dtos';

const Map = ({ lat, lng }: MapCordsObj) => {
  const markerRef = useRef<any>(null);
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  function LocationMarker() {
    const map = useMapEvents({
      click(e: LeafletMouseEvent) {
        map.locate();
        setPosition(e.latlng);
      },
    });
    return position === null ? null : (
      <Marker
        position={position}
        draggable
        ref={markerRef}
        eventHandlers={eventHandlers}
      >
        <Popup>You are here!</Popup>
      </Marker>
    );
  }
  return (
    <div id='map'>
      <MapContainer center={[lat, lng]} zoom={12} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;

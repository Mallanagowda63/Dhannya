import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocateFixed } from 'lucide-react';
import { DeliveryLocation, FREE_DELIVERY_RADIUS_KM, SHOP_LOCATION, deliveryQuote } from '../data/delivery';

// A divIcon avoids Leaflet's default marker images, which bundlers don't resolve.
const pinIcon = L.divIcon({
  className: '',
  html: '<div style="width:22px;height:22px;border-radius:50% 50% 50% 0;background:#A9542B;border:3px solid #F4ECD8;transform:rotate(-45deg);box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
  iconSize: [22, 22],
  iconAnchor: [11, 22],
});

export const DeliveryLocationPicker: React.FC<{
  value: DeliveryLocation | null;
  onChange: (loc: DeliveryLocation) => void;
}> = ({ value, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const [locating, setLocating] = useState(false);
  const [locateError, setLocateError] = useState('');

  const placeMarker = (loc: DeliveryLocation, pan = false) => {
    const map = mapRef.current;
    if (!map) return;
    if (!markerRef.current) {
      markerRef.current = L.marker([loc.lat, loc.lng], { icon: pinIcon, draggable: true }).addTo(map);
      markerRef.current.on('dragend', () => {
        const p = markerRef.current!.getLatLng();
        onChangeRef.current({ lat: p.lat, lng: p.lng });
      });
    } else {
      markerRef.current.setLatLng([loc.lat, loc.lng]);
    }
    if (pan) map.setView([loc.lat, loc.lng], 16);
  };

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current).setView(
      value ? [value.lat, value.lng] : [SHOP_LOCATION.lat, SHOP_LOCATION.lng],
      value ? 16 : 13
    );
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    L.circle([SHOP_LOCATION.lat, SHOP_LOCATION.lng], {
      radius: FREE_DELIVERY_RADIUS_KM * 1000,
      color: '#3E4B32',
      weight: 1,
      fillOpacity: 0.06,
    }).addTo(map);
    map.on('click', (e: L.LeafletMouseEvent) => {
      placeMarker({ lat: e.latlng.lat, lng: e.latlng.lng });
      onChangeRef.current({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
    mapRef.current = map;
    if (value) placeMarker(value);
    // The map mounts inside a modal; recompute its size once the modal has laid out.
    setTimeout(() => map.invalidateSize(), 200);
    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
  }, []);

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setLocateError('Your browser cannot share location. Tap your address on the map instead.');
      return;
    }
    setLocating(true);
    setLocateError('');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        placeMarker(loc, true);
        onChange(loc);
        setLocating(false);
      },
      () => {
        setLocateError('Could not get your location. Tap your address on the map instead.');
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const quote = value ? deliveryQuote(value) : null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70">Delivery Location *</span>
        <button
          type="button"
          onClick={useMyLocation}
          disabled={locating}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A9542B] hover:underline disabled:opacity-50"
        >
          <LocateFixed className="w-3.5 h-3.5" />
          {locating ? 'Locating…' : 'Use my current location'}
        </button>
      </div>
      <div ref={containerRef} className="h-56 w-full rounded-md border border-[#2A2620]/20 z-0" />
      <p className="text-[11px] text-[#2A2620]/60">
        Tap the map (or drag the pin) to mark where we should deliver. The shaded circle is our free-delivery area.
      </p>
      {locateError && <p className="text-[11px] text-[#7C2A1E]">{locateError}</p>}
      {quote && (
        <p className={`text-xs font-semibold ${quote.freeDelivery ? 'text-[#3E4B32]' : 'text-[#A9542B]'}`}>
          {quote.freeDelivery
            ? `${quote.distanceKm} km from our store: free delivery.`
            : `${quote.distanceKm} km from our store: delivery by Porter/Swiggy, fee paid to the rider on delivery.`}
        </p>
      )}
    </div>
  );
};

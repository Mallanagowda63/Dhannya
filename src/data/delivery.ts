// Delivery pricing shared by the checkout and the server, so both always agree.

// 730, 18th Main Rd, Padmanabhanagar: middle of the 18th Main Road stretch (within ~250 m).
// Replace with the shop's exact Google Maps pin for precise 3 km boundaries.
export const SHOP_LOCATION = { lat: 12.917, lng: 77.5546 };
export const FREE_DELIVERY_RADIUS_KM = 3;
export const HANDLING_FEE = 10;

export interface DeliveryLocation {
  lat: number;
  lng: number;
}

export const isValidLocation = (loc: any): loc is DeliveryLocation =>
  !!loc &&
  Number.isFinite(loc.lat) &&
  Number.isFinite(loc.lng) &&
  Math.abs(loc.lat) <= 90 &&
  Math.abs(loc.lng) <= 180;

// Straight-line (haversine) distance in km.
export function distanceFromShopKm(loc: DeliveryLocation): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(loc.lat - SHOP_LOCATION.lat);
  const dLng = toRad(loc.lng - SHOP_LOCATION.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(SHOP_LOCATION.lat)) * Math.cos(toRad(loc.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Within the radius delivery is free; beyond it the customer pays the
// Porter/Swiggy fee to the rider, so it is never part of the online total.
export function deliveryQuote(loc: DeliveryLocation) {
  const distanceKm = Math.round(distanceFromShopKm(loc) * 10) / 10;
  return { distanceKm, freeDelivery: distanceKm <= FREE_DELIVERY_RADIUS_KM };
}

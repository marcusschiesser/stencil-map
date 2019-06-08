// @ts-ignore
import {} from 'googlemaps';

export interface Place {
    zoom: number;
    latLng: google.maps.LatLngLiteral
}

export const EUROPE: Place = {
    zoom: 5,
    latLng: {lat: 48.886483489234266, lng: 2.342630624771118}
};

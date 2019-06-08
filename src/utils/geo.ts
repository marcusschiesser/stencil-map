// @ts-ignore
import {} from 'googlemaps';
import LatLngLiteral = google.maps.LatLngLiteral;

export function createLocationBounds(locations: Array<LatLngLiteral>) {
    let bounds = new google.maps.LatLngBounds();
    for (let location of locations) {
        bounds.extend(location);
    }
    return bounds;
}

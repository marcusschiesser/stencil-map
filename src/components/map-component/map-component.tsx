import {gmapsInit} from '../../utils/gmaps';
import {Component, Element, h, Host, Prop} from '@stencil/core';
import MarkerClusterer from '@google/markerclusterer';
import {createLocationBounds} from '../../utils/geo';
import {EUROPE, Place} from './places';

interface Location {
    name: string;
    lat: number;
    lng: number;
}

@Component({
    tag: 'map-component',
    styleUrl: 'map-component.css',
    shadow: true
})
export class MapComponent {
    @Prop() locations: Array<Location>;
    @Prop() apiKey: string;
    @Prop() cluster: boolean;
    @Prop() fitLocations: boolean;

    @Element() el: HTMLElement;

    private map: any;

    render() {
        return (<Host>
            <div class="map"></div>
        </Host>);
    }

    async componentDidRender() {
        await gmapsInit(this.apiKey);
        this.map = new google.maps.Map(this.el.shadowRoot.querySelector('.map'));
        if (this.locations) {
            const markers = this.locations
                .map(location => {
                    const marker = new google.maps.Marker({
                        position: {lat: location.lat, lng: location.lng},
                        map: this.map,
                        title: location.name
                    });
                    return marker;
                });

            if (this.fitLocations) {
                this.zoomToLocations();
            } else {
                this.zoomToPlace(EUROPE);
            }

            if (this.cluster) {
                new MarkerClusterer(this.map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            }
        }
    }

    zoomToLocations() {
        this.map.fitBounds(createLocationBounds(this.locations));
    }

    zoomToPlace(place: Place) {
        this.map.setCenter(place.latLng);
        this.map.setZoom(place.zoom);
    };
}

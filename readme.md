![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil Map Component

Map component based on [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) 
that you can reuse in your web projects - works in any major framework or with no framework at all.

Technically it's a [web component](https://www.webcomponents.org/) built using [Stencil](https://stenciljs.com/).

## Getting Started

To use the component, you first need a Google API key, you can get it from here:
https://console.cloud.google.com/google/maps-apis

Then you can test the component by adding the API key to the demo code found at `src/index.html` and run:

```bash
npm install
npm start
```

## Using this component

To build the component for production, run:

```bash
npm run build
```

Copy the generated `dist` folder to your own project and add the following `script` tag to your HTML:
```html
<script src="dist/stencil-map.js"></script>
```

You can then use the component in your own HTML like this:

```html
<map-component api-key="[Put Google API Key Here]" cluster="true" fit-locations="true"></map-component>
```

The component has the following attributes:

`cluster` - uses [MarkerClusterer](https://developers.google.com/maps/documentation/javascript/marker-clustering) to cluster locations

`fit-locations` - if true, centers the map to the boundary of all locations

A location must be a Javascript object implementing this interface:
```typescript
interface Location {
    name: string;
    lat: number;
    lng: number;
}
```

If you have an array of locations, you can set them by changing the `locations` property of the
component:
```javascript
const map = document.querySelector('map-component');
map.locations = locations;
```

**TODO**: Component hasn't yet been [published to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWF2ZXJldHQiLCJhIjoiY21hbzhjenN0MDJkdjJrbzhrZGc5cGw0MCJ9.2d9tcLesxsnfETG1MF3NGQ';

console.log('Mapbox GL JS Loaded:', mapboxgl);

const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027], 
  zoom: 12,
  minZoom: 5, 
  maxZoom: 18 
});

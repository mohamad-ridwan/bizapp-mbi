const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [101.6869, 3.1390], // starting position [lng, lat]
    zoom: 5 // starting zoom
});

// Tambahkan data titik-titik dalam format GeoJSON
map.on('load', function () {
    map.addSource('points', {
        'type': 'geojson',
        'data': 'https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson'
    });

    // Tambahkan layer heatmap
    map.addLayer({
        'id': 'heatmap',
        'type': 'heatmap',
        'source': 'points',
        'paint': {
            'heatmap-weight': 20,
            'heatmap-intensity': {
                'stops': [
                    [0, 0],
                    [9, 1.5]
                ]
            },
            'heatmap-radius': {
                'stops': [
                    [0, 2],
                    [9, 20]
                ]
            },
            'heatmap-opacity': {
                'default': 1,
                'stops': [
                    [7, 1],
                    [9, 0.5]
                ]
            }
        }
    });
});
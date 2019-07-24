//Helen Hu 2019 

mapboxgl.accessToken = 'pk.eyJ1IjoiMTg0N2NlbnN1cyIsImEiOiJjanllcnY1MmYwM3doM2JudnZkdDl4eWs1In0.F_3cfs4al_haneDBGnscIw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/1847census/cjyahhgxs0a7t1cnph92hmkgv'
});
var hoveredStateId = null;

map.on('load', function () {
    var layers = ['City', 'Northern Liberties', 'Spring Garden and West Philadelphia', 'Southwark and Moyamensing'];
    var colors = ['#F2A5A5', '#F4F086', '#CAF4B4', '#7EB1E7'];

    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }

});

map.getCanvas().style.cursor = 'default';
map.fitBounds([-75.165222, 39.952583]);
jQuery(document).ready(function() {
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([40.2838, -3.8215], 13);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	// add a marker in the given location, attach some popup content to it and open the popup
	L.marker([40.2838, -3.8215]).addTo(map)
	    .bindPopup('AULARIO 3 <br> URJC')
	    .openPopup();


	var circle = L.circle([40.2838, -3.8215], 500, {
	    color: 'green',
	    fillColor: 'green',
	    fillOpacity: 0.5
	}).addTo(map);

	var popup = L.popup();

	function onMapClick(e) {
	    popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
	}

	map.on('click', onMapClick);

	function onLocationFound(e) {
	    var radius = e.accuracy / 2;

	    L.marker(e.latlng).addTo(map)
		.bindPopup("You are within " + radius + " meters from this point").openPopup();

	    L.circle(e.latlng, radius).addTo(map);
	}

	map.on('locationfound', onLocationFound);

});

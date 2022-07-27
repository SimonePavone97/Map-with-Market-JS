let mapOptions = {
    center:[41.87194, 12.56738],
    zoom:6
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

/*let marker = new L.Marker([45.48646,9.20597]);
marker.addTo(map);*/

let locations = [
    {
        "id":1,
        "lat":45.48646,
        "long":9.20597,
        "src": 'img/Piazza.jpeg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
    {
        "id":2,
        "lat":45.52998,
        "long":9.36663,
        "src": 'img/Togliatti.jpg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
    {
        "id":3,
        "lat":45.48053,
        "long":9.18604,
        "src": 'img/Aprile.jpg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
    {
        "id":4,
        "lat":44.64785,
        "long":10.85484,
        "src": 'img/entrata.jpg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
    {
        "id":5,
        "lat":44.63461,
        "long":10.95522,
        "src": 'img/Emilia.jpg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
    {
        "id":6,
        "lat":41.1076,
        "long":16.87901,
        "src": 'img/Orabona.jpg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
    {
        "id":7,
        "lat":41.127,
        "long":16.87196,
        "src": 'img/ferrarese.jpg',
        "adress": 'Piazza  Luigi  di  Savoia - Milano',
        /*"url":,*/
    },
]

let popupOptions = {
    "closeButton" : false
}

locations.forEach(element => {
    new L.Marker([element.lat,element.long]).addTo(map)
    .on("mouseover", event => {
        event.target.bindPopup('<div class="card"><img src="'+element.src+'" width="80" height="80" alt"place"><h2>'+element.adress+'</h2></div>', popupOptions).openPopup();
    })
    .on("mouseout", event => {
        event.target.closePopup();
    })
});
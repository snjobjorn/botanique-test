fetch('http://localhost:3000/api/get_favorite_items', {
    method: 'GET',
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)));

fetch('http://localhost:3000/api/get_analytics_items', {
    method: 'GET',
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)));

fetch('http://localhost:3000/api/get_analytics_items/pH-метр Mettler-Toledo International, Inc. SevenCompact S220', {
    method: 'GET',
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)));
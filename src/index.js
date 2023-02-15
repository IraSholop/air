import Chart from 'chart.js/auto'

mapboxgl.accessToken =
'pk.eyJ1IjoicmVuaXRhMjIiLCJhIjoiY2xkejZ4dWQwMDA0ODNvcGQ5czh3cnhmYSJ9.DjTebsAe1pb2FuPeZ0vnZg';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v12',
center: [31.031111, 48.842957],
zoom: 5,
});

const d  = {};
const ctx = document.querySelector("#myChart");
const temp = document.querySelector("#temp");
console.log("🚀 ~ temp", temp)


fetch("https://api.waqi.info/feed/A252961/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then((data)=>{
    console.log(data.data);
    let mesLviv = "";
    if(data.data.aqi < 50 ){
        mesLviv = new mapboxgl.Popup().setHTML(
            `<div  class="container ok"><a href = "./lviv.html" class="mapAir"><h3>Львів</h3></a></a><b>${data.data.aqi}</b><p>Добре</p></div>`
          );
    }else
    if(data.data.aqi > 50 && data.data.aqi < 101){
       mesLviv = new mapboxgl.Popup().setHTML(
            `<div  class="container warning"><a href = "./lviv.html" class="mapAir"><h3>Львів</h3></a></a><b>${data.data.aqi}</b><p>Помірний</p></div>`
          );
    }else
    if(data.data.aqi > 101 && data.data.aqi < 151){
        mesLviv = new mapboxgl.Popup().setHTML(
            `<div  class="container orange"><a href = "./lviv.html" class="mapAir"><h3>Львів</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий для чутливих груп</p></div>`
          );
    }else
    if(data.data.aqi > 151 && data.data.aqi < 201){
        mesLviv = new mapboxgl.Popup().setHTML(
            `<div  class="container red"><a href = "./lviv.html" class="mapAir"><h3>Львів</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий</p></div>`
          );
    }else
    if(data.data.aqi > 201 && data.data.aqi < 301){
        mesLviv = new mapboxgl.Popup().setHTML(
            `<div  class="container purple"><a href = "./lviv.html" class="mapAir"><h3>Львів</h3></a></a><b>${data.data.aqi}</b><p>Дуже нездоровий</p></div>`
          );
    }else
    if(data.data.aqi < 301){
        mesLviv = new mapboxgl.Popup().setHTML(
            `<div  class="container wow"><a href = "./lviv.html" class="mapAir"><h3>Львів</h3></a></a><b>${data.data.aqi}</b><p>Небезпечний</p></div>`
          );
    }
    const lviv = new mapboxgl.Marker()
    .setLngLat([24.031111, 49.842957])
    .setPopup(mesLviv)
    .addTo(map);
    d.data1 = data.data.aqi;        
});

fetch("https://api.waqi.info/feed/A350029/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then((data)=>{
    console.log(data.data);
    let mesKyiv = "";
    if(data.data.aqi < 50 ){
        mesKyiv = new mapboxgl.Popup().setHTML(
            `<div  class="container ok"><a href = "./kyiv.html" class="mapAir"><h3>Київ</h3></a></a><b>${data.data.aqi}</b><p>Добре</p></div>`
          );
    }else
    if(data.data.aqi > 50 && data.data.aqi < 101){
        mesKyiv = new mapboxgl.Popup().setHTML(
            `<div  class="container warning"><a href = "./kyiv.html" class="mapAir"><h3>Київ</h3></a></a><b>${data.data.aqi}</b><p>Помірний</p></div>`
          );
    }else
    if(data.data.aqi > 101 && data.data.aqi < 151){
        mesKyiv = new mapboxgl.Popup().setHTML(
            `<div  class="container orange"><a href = "./kyiv.html" class="mapAir"><h3>Київ</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий для чутливих груп</p></div>`
          );
    }else
    if(data.data.aqi > 151 && data.data.aqi < 201){
        mesKyiv = new mapboxgl.Popup().setHTML(
            `<div  class="container red"><a href = "./kyiv.html" class="mapAir"><h3>Київ</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий</p></div>`
          );
    }else
    if(data.data.aqi > 201 && data.data.aqi < 301){
        mesKyiv = new mapboxgl.Popup().setHTML(
            `<div  class="container purple"><a href = "./kyiv.html" class="mapAir"><h3>Київ</h3></a></a><b>${data.data.aqi}</b><p>Дуже нездоровий</p></div>`
          );
    }else
    if(data.data.aqi < 301){
        mesKyiv = new mapboxgl.Popup().setHTML(
            `<div  class="container wow"><a href = "./kyiv.html" class="mapAir"><h3>Київ</h3></a></a><b>${data.data.aqi}</b><p>Небезпечний</p></div>`
          );
    }
    const kyiv = new mapboxgl.Marker()
  .setLngLat([30.500011, 50.442957])
  .setPopup(mesKyiv)
  .addTo(map);
              
      d.data2 = data.data.aqi;     
});

fetch("https://api.waqi.info/feed/A252952/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then((data)=>{
    console.log(data.data);
    let mesOdesa = "";
    if(data.data.aqi < 50 ){
        mesOdesa = new mapboxgl.Popup().setHTML(
            `<div  class="container ok"><a href = "./odesa.html" class="mapAir"><h3>Одеса</h3></a></a><b>${data.data.aqi}</b><p>Добре</p></div>`
          );
    }else
    if(data.data.aqi > 50 && data.data.aqi < 101){
        mesOdesa = new mapboxgl.Popup().setHTML(
            `<div  class="container warning"><a href = "./odesa.html" class="mapAir"><h3>Одеса</h3></a></a><b>${data.data.aqi}</b><p>Помірний</p></div>`
          );
    }else
    if(data.data.aqi > 101 && data.data.aqi < 151){
        mesOdesa = new mapboxgl.Popup().setHTML(
            `<div  class="container orange"><a href = "./odesa.html" class="mapAir"><h3>Одеса</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий для чутливих груп</p></div>`
          );
    }else
    if(data.data.aqi > 151 && data.data.aqi < 201){
        mesOdesa = new mapboxgl.Popup().setHTML(
            `<div  class="container red"><a href = "./odesa.html" class="mapAir"><h3>Одеса</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий</p></div>`
          );
    }else
    if(data.data.aqi > 201 && data.data.aqi < 301){
        mesOdesa = new mapboxgl.Popup().setHTML(
            `<div  class="container purple"><a href = "./odesa.html" class="mapAir"><h3>Одеса</h3></a></a><b>${data.data.aqi}</b><p>Дуже нездоровий</p></div>`
          );
    }else
    if(data.data.aqi < 301){
        mesOdesa = new mapboxgl.Popup().setHTML(
            `<div  class="container wow"><a href = "./odesa.html" class="mapAir"><h3>Одеса</h3></a></a><b>${data.data.aqi}</b><p>Небезпечний</p></div>`
          );
    }
    const odesa = new mapboxgl.Marker()
    .setLngLat([30.733600, 46.490800])
    .setPopup(mesOdesa)
    .addTo(map);
    d.data3 = data.data.aqi;  
});

fetch("https://api.waqi.info/feed/A115987/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then((data)=>{
    console.log(data.data);
    let mesDnipro = "";
    if(data.data.aqi < 50 ){
        mesDnipro = new mapboxgl.Popup().setHTML(
            `<div  class="container ok"><a href = "./dnipro.html" class="mapAir"><h3>Дніпро</h3></a></a><b>${data.data.aqi}</b><p>Добре</p></div>`
          );
    }else
    if(data.data.aqi > 50 && data.data.aqi < 101){
        mesDnipro = new mapboxgl.Popup().setHTML(
            `<div  class="container warning"><a href = "./dnipro.html" class="mapAir"><h3>Дніпро</h3></a></a><b>${data.data.aqi}</b><p>Помірний</p></div>`
          );
    }else
    if(data.data.aqi > 101 && data.data.aqi < 151){
        mesDnipro = new mapboxgl.Popup().setHTML(
            `<div  class="container orange"><a href = "./dnipro.html" class="mapAir"><h3>Дніпро</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий для чутливих груп</p></div>`
          );
    }else
    if(data.data.aqi > 151 && data.data.aqi < 201){
        mesDnipro = new mapboxgl.Popup().setHTML(
            `<div  class="container red"><a href = "./dnipro.html" class="mapAir"><h3>Дніпро</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий</p></div>`
          );
    }else
    if(data.data.aqi > 201 && data.data.aqi < 301){
        mesDnipro = new mapboxgl.Popup().setHTML(
            `<div  class="container purple"><a href = "./dnipro.html" class="mapAir"><h3>Дніпро</h3></a></a><b>${data.data.aqi}</b><p>Дуже нездоровий</p></div>`
          );
    }else
    if(data.data.aqi < 301){
        mesDnipro = new mapboxgl.Popup().setHTML(
            `<div  class="container wow"><a href = "./dnipro.html" class="mapAir"><h3>Дніпро</h3></a></a><b>${data.data.aqi}</b><p>Небезпечний</p></div>`
          );
    }
    const dnipro = new mapboxgl.Marker()
    .setLngLat([35.033600, 48.490800])
    .setPopup(mesDnipro)
    .addTo(map);
    d.data4 = data.data.aqi;    
});


fetch("https://api.waqi.info/feed/A189625/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then((data)=>{
    console.log(data.data);
    let mesKharkiv = "";
    if(data.data.aqi < 50 ){
        mesKharkiv = new mapboxgl.Popup().setHTML(
            `<div  class="container ok"><a href = "./kharkiv.html" class="mapAir"><h3>Харків</h3></a></a><b>${data.data.aqi}</b><p>Добре</p></div>`
          );
    }else
    if(data.data.aqi > 50 && data.data.aqi < 101){
        mesKharkiv = new mapboxgl.Popup().setHTML(
            `<div  class="container warning"><a href = "./kharkiv.html" class="mapAir"><h3>Харків</h3></a></a><b>${data.data.aqi}</b><p>Помірний</p></div>`
          );
    }else
    if(data.data.aqi > 101 && data.data.aqi < 151){
        mesKharkiv = new mapboxgl.Popup().setHTML(
            `<div  class="container orange"><a href = "./kharkiv.html" class="mapAir"><h3>Харків</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий для чутливих груп</p></div>`
          );
    }else
    if(data.data.aqi > 151 && data.data.aqi < 201){
        mesKharkiv = new mapboxgl.Popup().setHTML(
            `<div  class="container red"><a href = "./kharkiv.html" class="mapAir"><h3>Харків</h3></a></a><b>${data.data.aqi}</b><p>Нездоровий</p></div>`
          );
    }else
    if(data.data.aqi > 201 && data.data.aqi < 301){
        mesKharkiv = new mapboxgl.Popup().setHTML(
            `<div  class="container purple"><a href = "./kharkiv.html" class="mapAir"><h3>Харків</h3></a></a><b>${data.data.aqi}</b><p>Дуже нездоровий</p></div>`
          );
    }else
    if(data.data.aqi < 301){
        mesKharkiv = new mapboxgl.Popup().setHTML(
            `<div  class="container wow"><a href = "./kharkiv.html" class="mapAir"><h3>Харків</h3></a></a><b>${data.data.aqi}</b><p>Небезпечний</p></div>`
          );
    }
    const kharkiv = new mapboxgl.Marker()
    .setLngLat([36.233600, 49.990800])
    .setPopup(mesKharkiv)
    .addTo(map);
    d.data5 = data.data.aqi;   
});

// Diagrame(d);
setTimeout(() => Diagrame(d),700);

function Diagrame(p) {
    console.log(p);
    const data1 = p.data1;
    const data2 = p.data2;
    const data3 = p.data3;
    const data4 = p.data4;
    const data5 = p.data5;

   const data = {
        labels: [
          'Львів',
          'Київ',
          'Одеса',
          'Дніпро',
          'Харків'
        ],
        datasets: [{
          label: 'Яість повітря найбільших міст України',
          data: [data1, data2, data3, data4, data5],
          backgroundColor: [
            '#958bbf',
            '#ffdad6',
            '#4b5799',
            '#3f3f5f',
            '#dabbdb'
          ],
          hoverOffset: 5
        }]
      };
      const config = {
        type: 'doughnut',
        data: data,
      };
      new Chart(ctx, config);
}
 

fetch("https://api.waqi.info/feed/A252961/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then(data => {
   temp.innerHTML = `<div><p>Львів</p><b>${data.data.iaqi.t.v}</b></div>`;
})

console.log('hi');

    // 26db2d0644f20e123541ab5a243f79744582a6ab
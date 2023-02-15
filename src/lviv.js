const lviv = document.querySelector("#my-container");
import Chart from 'chart.js/auto';

// _aqiFeed({  city:"Lviv/Rynok Square",  callback:function(aqi){  
// 	console.log(aqi);    
//      lviv.insertAdjacentHTML(
//         'beforeend',
//         `${aqi.details}`
//       );
// }  });
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');
const ctx5 = document.getElementById('myChart5');
const card = document.querySelector('.card');





fetch("https://api.waqi.info/feed/A252961/?token=26db2d0644f20e123541ab5a243f79744582a6ab")
.then(res=> res.json())
.then((data)=>{
  console.log(data.data);
  const obj = data.data;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['11 Лют', '13 Лют', '14 Лют', '15 Лют', '16 Лют', '17 Лют'],
        datasets: [{
          label: 'PM10',
          data: [10, 19, 13, 7, 17, obj.iaqi.pm10.v],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return obj;
}).then((obj) => {
  console.log(obj);
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['11 Лют', '13 Лют', '14 Лют', '15 Лют', '16 Лют', '17 Лют'],
      datasets: [{
        label: 'PM25',
        data: [57, 79, 63, 91, 87, obj.iaqi.pm25.v],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return obj;
}).then((obj) => {
  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['11 Лют', '13 Лют', '14 Лют', '15 Лют', '16 Лют', '17 Лют'],
      datasets: [{
        label: 'Press',
        data: [1057, 979, 763, 991, 887, obj.iaqi.p.v],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return obj;
}).then((obj) => {

  const data = {
    datasets: [{
      label: 'PM10/PM25',
      data: [{
        x: 10,
        y: 57,
        r: 12
      }, {
        x: 19,
        y: 79,
        r: 13
      },{
        x: 13,
        y: 63,
        r: 14
      }, {
        x: 7,
        y: 91,
        r: 15
      },{
        x: 17,
        y: 87,
        r: 16
      }, {
        x: obj.iaqi.pm10.v,
        y: obj.iaqi.pm25.v,
        r: 17
      }],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
      ]
    }]
  };

  const config = {
    type: 'bubble',
    data: data,
    options: {}
  };
  new Chart(ctx4, config);
  return obj;
}).then((obj) => {
console.log(obj);
const data = {
  labels: ['17 Лют', '18 Лют', '19 Лют', '20 Лют', '21 Лют', '22 Лют'],
  datasets: [{
    label: 'Temp',
    data: [Math.round(obj.iaqi.t.v), 6, 5, 1, 3, 5],
    fill: false,
    borderColor: 'rgb(0, 119, 255)',
    tension: 0.1
  }]
};

  const config = {
    type: 'line',
    data: data,
  };
  new Chart(ctx5, config);
  return obj;
}).then((data)=>{
  console.log(data);
  if(data.aqi < 50 ){
    card.setHTML(
          `<div  class="container-lviv ok"><b>${data.aqi}</b>
          <p>Добре</p>
          <div class="posit-card">
          <p>PM10<b>${data.iaqi.pm10.v}</b></p>
          <p>PM10<b>${data.iaqi.pm25.v}</b></p>
          <p>PM10<b>${Math.round(data.iaqi.p.v)}</b></p>
          <p>PM10<b>${Math.round(data.iaqi.t.v)}</b></p>
          <p>PM10<b>${Math.round(data.iaqi.h.v)}</b></p>
          </div>
          </div>`
          );
  }else
  if(data.aqi > 50 && data.aqi < 101){
    card.setHTML(
      `<div  class="container-lviv warning">
      <div class = "card-lviv">
      <b>Львів</b>
      <b>${data.aqi}</b>
      <p>Помірний</p>
      </div>
      <div class="posit-card">
      <p>PM10<b>${data.iaqi.pm10.v}</b></p>
      <p>PM25<b>${data.iaqi.pm25.v}</b></p>
      <p>Press<b>${Math.round(data.iaqi.p.v)}</b></p>
      <p>Temp<b>${Math.round(data.iaqi.t.v)}</b></p>
      <p>R.H.<b>${Math.round(data.iaqi.h.v)}</b></p>
      </div>
      </div>`
          );
  }else
  if(data.aqi > 101 && data.aqi < 151){
    card.setHTML(
      `<div  class="container-lviv orange">
      <div class = "card-lviv">
      <b>Львів</b>
      <b>${data.aqi}</b>
      <p>Нездоровий для чутливих груп</p>
      </div>
      <div class="posit-card">
      <p>PM10<b>${data.iaqi.pm10.v}</b></p>
      <p>PM25<b>${data.iaqi.pm25.v}</b></p>
      <p>Press<b>${Math.round(data.iaqi.p.v)}</b></p>
      <p>Temp<b>${Math.round(data.iaqi.t.v)}</b></p>
      <p>R.H.<b>${Math.round(data.iaqi.h.v)}</b></p>
      </div>
      </div>`
          );
  }else
  if(data.aqi > 151 && data.aqi < 201){
    card.setHTML(
      `<div  class="container-lviv red">
      <div class = "card-lviv">
      <b>Львів</b>
      <b>${data.aqi}</b>
      <p>Нездоровий</p>
      </div>
      <div class="posit-card">
      <p>PM10<b>${data.iaqi.pm10.v}</b></p>
      <p>PM25<b>${data.iaqi.pm25.v}</b></p>
      <p>Press<b>${Math.round(data.iaqi.p.v)}</b></p>
      <p>Temp<b>${Math.round(data.iaqi.t.v)}</b></p>
      <p>R.H.<b>${Math.round(data.iaqi.h.v)}</b></p>
      </div>
      </div>`
          );
  }else
  if(data.aqi > 201 && data.aqi < 301){
    card.setHTML(
      `<div  class="container-lviv purple">
      <div class = "card-lviv">
      <b>Львів</b>
      <b>${data.aqi}</b>
      <p>Дуже нездоровий</p>
      </div>
      <div class="posit-card">
      <p>PM10<b>${data.iaqi.pm10.v}</b></p>
      <p>PM25<b>${data.iaqi.pm25.v}</b></p>
      <p>Press<b>${Math.round(data.iaqi.p.v)}</b></p>
      <p>Temp<b>${Math.round(data.iaqi.t.v)}</b></p>
      <p>R.H.<b>${Math.round(data.iaqi.h.v)}</b></p>
      </div>
      </div>`
          );
  }else
  if(data.aqi < 301){
    card.setHTML(
      `<div  class="container-lviv wow">
      <div class = "card-lviv">
      <b>Львів</b>
      <b>${data.aqi}</b>
      <p>Небезпечний</p>
      </div>
      <div class="posit-card">
      <p>PM10<b>${data.iaqi.pm10.v}</b></p>
      <p>PM25<b>${data.iaqi.pm25.v}</b></p>
      <p>Press<b>${Math.round(data.iaqi.p.v)}</b></p>
      <p>Temp<b>${Math.round(data.iaqi.t.v)}</b></p>
      <p>R.H.<b>${Math.round(data.iaqi.h.v)}</b></p>
      </div>
      </div>`
          );
  }
      
         
});;




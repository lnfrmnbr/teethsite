const canvas4 = document.getElementById('chart4');

function zeroing4(id){
    const i = (Number(id[1])-1)*3;
    chart4.data.datasets[0].data[i].y = 0;
    chart4.data.datasets[1].data[i].y = 0;
    chart4.data.datasets[0].data[i+1].y = 0;
    chart4.data.datasets[1].data[i+1].y = 0;
    chart4.data.datasets[0].data[i+2].y = 0;
    chart4.data.datasets[1].data[i+2].y = 0;
    chart4.update('none');
}

function desn4(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let d = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[8]) - 1;
    chart4.data.datasets[0].data[i].y = d;
    let z = Number(document.getElementById('zond'+id[4]+id[5]+'2_'+id[8]).value);
    if (Number(chart4.data.datasets[1].data[i].y) != d-z){
            chart4.data.datasets[1].data[i].y = d-z;
    }
    chart4.update('none');
    });
};

function zond4(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let z = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[8]) - 1;
    let d = Number(document.getElementById('desn'+id[4]+id[5]+'2_'+id[8]).value);
    chart4.data.datasets[1].data[i].y = d-z;
    chart4.update('none');
    cpitn();
    });
};

Chart.defaults.plugins.legend.display = false;
const chart4 = new Chart(canvas4, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 0,
        borderWidth: 2,
        borderColor: 'crimson',
        data: [{x: 0, y: 0}, {x: 0.9, y: 0}, {x: 1.8, y: 0},{x: 2.6, y: 0}, {x: 3.35, y: 0}, {x: 4.1, y: 0}, {x: 4.9, y: 0}, {x: 5.7, y: 0}, {x: 6.5, y: 0}, {x: 7.3, y: 0}, {x: 8.1, y: 0}, {x: 8.8, y: 0},
        {x: 9.3, y: 0}, {x: 10.2, y: 0}, {x: 11, y: 0},{x: 11.6, y: 0},{x: 13, y: 0},{x: 14.4, y: 0}, {x: 15.1, y: 0},{x: 16.2, y: 0},{x: 17.3, y: 0},{x: 18, y: 0},{x: 19, y: 0},{x: 20, y: 0}],
        showLine: true,
        fill: true,
        backgroundColor: 'rgba(0,0,0,0)',
    },{
       pointRadius: 0,
       fill: '-1',
       borderWidth: 2,
       backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
       borderColor: "blue",
       data: [{x: 0, y: 0}, {x: 0.9, y: 0}, {x: 1.8, y: 0},{x: 2.6, y: 0}, {x: 3.35, y: 0}, {x: 4.1, y: 0}, {x: 4.9, y: 0}, {x: 5.7, y: 0}, {x: 6.5, y: 0}, {x: 7.3, y: 0}, {x: 8.1, y: 0}, {x: 8.8, y: 0},
        {x: 9.3, y: 0}, {x: 10.2, y: 0}, {x: 11, y: 0},{x: 11.6, y: 0},{x: 13, y: 0},{x: 14.4, y: 0}, {x: 15.1, y: 0},{x: 16.2, y: 0},{x: 17.3, y: 0},{x: 18, y: 0},{x: 19, y: 0},{x: 20, y: 0}],
       showLine: true,
    }]
  },
  options: {
         responsive: true,
         maintainAspectRatio: false,
         tooltips: {
            enabled: false
         },
         scales: {
              x: {
                grid: {
                       display: false
                },
                ticks: {
                       display: false
                },
                position: 'bottom',
              },
              y: {
                 beginAtZero: true,
                 grid: {
                        color: "rgba(0, 0, 0, 0.5)",
                        display: true
                 },
                 ticks: {
                       stepSize: 1,
                       display: false
                },
                max: 8,
                min: -17,
               }
          },

      }
});


desn4("desn282_1");
desn4("desn282_2");
desn4("desn282_3");
desn4("desn272_1");
desn4("desn272_2");
desn4("desn272_3");
desn4("desn262_1");
desn4("desn262_2");
desn4("desn262_3");
desn4("desn252_1");
desn4("desn252_2");
desn4("desn252_3");
desn4("desn242_1");
desn4("desn242_2");
desn4("desn242_3");
desn4("desn232_1");
desn4("desn232_2");
desn4("desn232_3");
desn4("desn222_1");
desn4("desn222_2");
desn4("desn222_3");
desn4("desn212_1");
desn4("desn212_2");
desn4("desn212_3");
zond4("zond282_1");
zond4("zond282_2");
zond4("zond282_3");
zond4("zond272_1");
zond4("zond272_2");
zond4("zond272_3");
zond4("zond262_1");
zond4("zond262_2");
zond4("zond262_3");
zond4("zond252_1");
zond4("zond252_2");
zond4("zond252_3");
zond4("zond242_1");
zond4("zond242_2");
zond4("zond242_3");
zond4("zond232_1");
zond4("zond232_2");
zond4("zond232_3");
zond4("zond222_1");
zond4("zond222_2");
zond4("zond222_3");
zond4("zond212_1");
zond4("zond212_2");
zond4("zond212_3");


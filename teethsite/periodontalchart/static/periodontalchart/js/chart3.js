const canvas3 = document.getElementById('chart3');

function zeroing3(id){
    const i = (8 - Number(id[1]))*3;
    chart3.data.datasets[0].data[i].y = 0;
    chart3.data.datasets[1].data[i].y = 0;
    chart3.data.datasets[0].data[i+1].y = 0;
    chart3.data.datasets[1].data[i+1].y = 0;
    chart3.data.datasets[0].data[i+2].y = 0;
    chart3.data.datasets[1].data[i+2].y = 0;
    chart3.update('none');
}

function desn3(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let d = e.target.value;
    const i = (8 - Number(id[5]))*3 + Number(id[8]) - 1;
    chart3.data.datasets[0].data[i].y = d;
    let z = Number(document.getElementById('zond'+id[4]+id[5]+'2_'+id[8]).value);
    if (Number(chart3.data.datasets[1].data[i].y) != d-z){
            chart3.data.datasets[1].data[i].y = d-z;
    }
    chart3.update('none');
    });
};

function zond3(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let z = e.target.value;
    const i = (8 - Number(id[5]))*3 + Number(id[8]) - 1;
    let d = Number(document.getElementById('desn'+id[4]+id[5]+'2_'+id[8]).value);
    chart3.data.datasets[1].data[i].y = d-z;
    chart3.update('none');
    cpitn();
    });
};

Chart.defaults.plugins.legend.display = false;
const chart3 = new Chart(canvas3, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 0,
        borderWidth: 2,
        borderColor: '#da8c99',
        data: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0},{x: 2.8, y: 0}, {x: 3.9, y: 0}, {x: 5, y: 0}, {x: 5.6, y: 0}, {x: 7, y: 0}, {x: 8.4, y: 0}, {x: 9.2, y: 0}, {x: 10, y: 0}, {x: 10.8, y: 0},
        {x: 11.5, y: 0}, {x: 12.2, y: 0}, {x: 12.9, y: 0},{x: 13.6, y: 0},{x: 14.4, y: 0},{x: 15.2, y: 0}, {x: 16, y: 0},{x: 16.75, y: 0},{x: 17.5, y: 0},{x: 18.2, y: 0},{x: 19.1, y: 0},{x: 20, y: 0}],
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
       data: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0},{x: 2.8, y: 0}, {x: 3.9, y: 0}, {x: 5, y: 0}, {x: 5.6, y: 0}, {x: 7, y: 0}, {x: 8.4, y: 0}, {x: 9.2, y: 0}, {x: 10, y: 0}, {x: 10.8, y: 0},
        {x: 11.5, y: 0}, {x: 12.2, y: 0}, {x: 12.9, y: 0},{x: 13.6, y: 0},{x: 14.4, y: 0},{x: 15.2, y: 0}, {x: 16, y: 0},{x: 16.75, y: 0},{x: 17.5, y: 0},{x: 18.2, y: 0},{x: 19.1, y: 0},{x: 20, y: 0}],
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


desn3("desn182_1");
desn3("desn182_2");
desn3("desn182_3");
desn3("desn172_1");
desn3("desn172_2");
desn3("desn172_3");
desn3("desn162_1");
desn3("desn162_2");
desn3("desn162_3");
desn3("desn152_1");
desn3("desn152_2");
desn3("desn152_3");
desn3("desn142_1");
desn3("desn142_2");
desn3("desn142_3");
desn3("desn132_1");
desn3("desn132_2");
desn3("desn132_3");
desn3("desn122_1");
desn3("desn122_2");
desn3("desn122_3");
desn3("desn112_1");
desn3("desn112_2");
desn3("desn112_3");

zond3("zond182_1");
zond3("zond182_2");
zond3("zond182_3");
zond3("zond172_1");
zond3("zond172_2");
zond3("zond172_3");
zond3("zond162_1");
zond3("zond162_2");
zond3("zond162_3");
zond3("zond152_1");
zond3("zond152_2");
zond3("zond152_3");
zond3("zond142_1");
zond3("zond142_2");
zond3("zond142_3");
zond3("zond132_1");
zond3("zond132_2");
zond3("zond132_3");
zond3("zond122_1");
zond3("zond122_2");
zond3("zond122_3");
zond3("zond112_1");
zond3("zond112_2");
zond3("zond112_3");


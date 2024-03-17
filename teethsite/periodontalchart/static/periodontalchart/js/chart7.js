const canvas7 = document.getElementById('chart7');

function zeroing7(id){
    const i = (8 - Number(id[1]))*3;
    chart7.data.datasets[0].data[i].y = 0;
    chart7.data.datasets[1].data[i].y = 0;
    chart7.data.datasets[0].data[i+1].y = 0;
    chart7.data.datasets[1].data[i+1].y = 0;
    chart7.data.datasets[0].data[i+2].y = 0;
    chart7.data.datasets[1].data[i+2].y = 0;
    chart7.update('none');
}

function desn7(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let d = e.target.value;
    const i = (8 - Number(id[5]))*3 + Number(id[8]) - 1;
    chart7.data.datasets[0].data[i].y = d;
    let z = Number(document.getElementById('zond'+id[4]+id[5]+'2_'+id[8]).value);
    if (Number(chart7.data.datasets[1].data[i].y) != d-z){
            chart7.data.datasets[1].data[i].y = d-z;
    }
    chart7.update('none');
    });
};

function zond7(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let z = e.target.value;
    const i = (8 - Number(id[5]))*3 + Number(id[8]) - 1;
    let d = Number(document.getElementById('desn'+id[4]+id[5]+'2_'+id[8]).value);
    chart7.data.datasets[1].data[i].y = d-z;
    chart7.update('none');
    });
};

Chart.defaults.plugins.legend.display = false;
const chart7 = new Chart(canvas7, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 2,
        borderWidth: 2,
        borderColor: 'crimson',
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
                max: 9,
                min: -16,
               }
          },

      }
});


desn7("desn482_1");
desn7("desn482_2");
desn7("desn482_3");
desn7("desn472_1");
desn7("desn472_2");
desn7("desn472_3");
desn7("desn462_1");
desn7("desn462_2");
desn7("desn462_3");
desn7("desn452_1");
desn7("desn452_2");
desn7("desn452_3");
desn7("desn442_1");
desn7("desn442_2");
desn7("desn442_3");
desn7("desn432_1");
desn7("desn432_2");
desn7("desn432_3");
desn7("desn422_1");
desn7("desn422_2");
desn7("desn422_3");
desn7("desn412_1");
desn7("desn412_2");
desn7("desn412_3");

zond7("zond482_1");
zond7("zond482_2");
zond7("zond482_3");
zond7("zond472_1");
zond7("zond472_2");
zond7("zond472_3");
zond7("zond462_1");
zond7("zond462_2");
zond7("zond462_3");
zond7("zond452_1");
zond7("zond452_2");
zond7("zond452_3");
zond7("zond442_1");
zond7("zond442_2");
zond7("zond442_3");
zond7("zond432_1");
zond7("zond432_2");
zond7("zond432_3");
zond7("zond422_1");
zond7("zond422_2");
zond7("zond422_3");
zond7("zond412_1");
zond7("zond412_2");
zond7("zond412_3");


const canvas8 = document.getElementById('chart8');

function zeroing8(id){
    const i = (Number(id[1])-1)*3;
    chart8.data.datasets[0].data[i].y = 0;
    chart8.data.datasets[1].data[i].y = 0;
    chart8.data.datasets[0].data[i+1].y = 0;
    chart8.data.datasets[1].data[i+1].y = 0;
    chart8.data.datasets[0].data[i+2].y = 0;
    chart8.data.datasets[1].data[i+2].y = 0;
    chart8.update('none');
}

function desn8(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let d = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[8]) - 1;
    chart8.data.datasets[0].data[i].y = d;
    let z = Number(document.getElementById('zond'+id[4]+id[5]+'2_'+id[8]).value);
    if (Number(chart8.data.datasets[1].data[i].y) != d-z){
            chart8.data.datasets[1].data[i].y = d-z;
    }
    chart8.update('none');
    });
};

function zond8(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let z = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[8]) - 1;
    let d = Number(document.getElementById('desn'+id[4]+id[5]+'2_'+id[8]).value);
    chart8.data.datasets[1].data[i].y = d-z;
    chart8.update('none');

    });
};

Chart.defaults.plugins.legend.display = false;
const chart8 = new Chart(canvas8, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 2,
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
                max: 9,
                min: -16,
               }
          },

      }
});


desn8("desn382_1");
desn8("desn382_2");
desn8("desn382_3");
desn8("desn372_1");
desn8("desn372_2");
desn8("desn372_3");
desn8("desn362_1");
desn8("desn362_2");
desn8("desn362_3");
desn8("desn352_1");
desn8("desn352_2");
desn8("desn352_3");
desn8("desn342_1");
desn8("desn342_2");
desn8("desn342_3");
desn8("desn332_1");
desn8("desn332_2");
desn8("desn332_3");
desn8("desn322_1");
desn8("desn322_2");
desn8("desn322_3");
desn8("desn312_1");
desn8("desn312_2");
desn8("desn312_3");

zond8("zond382_1");
zond8("zond382_2");
zond8("zond382_3");
zond8("zond372_1");
zond8("zond372_2");
zond8("zond372_3");
zond8("zond362_1");
zond8("zond362_2");
zond8("zond362_3");
zond8("zond352_1");
zond8("zond352_2");
zond8("zond352_3");
zond8("zond342_1");
zond8("zond342_2");
zond8("zond342_3");
zond8("zond332_1");
zond8("zond332_2");
zond8("zond332_3");
zond8("zond322_1");
zond8("zond322_2");
zond8("zond322_3");
zond8("zond312_1");
zond8("zond312_2");
zond8("zond312_3");


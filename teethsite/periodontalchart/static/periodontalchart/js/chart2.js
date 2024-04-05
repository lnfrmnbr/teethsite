const canvas2 = document.getElementById('chart2');

function zeroing2(id){
    const i = (Number(id[1])-1)*3;
    chart2.data.datasets[0].data[i].y = 0;
    chart2.data.datasets[1].data[i].y = 0;
    chart2.data.datasets[0].data[i+1].y = 0;
    chart2.data.datasets[1].data[i+1].y = 0;
    chart2.data.datasets[0].data[i+2].y = 0;
    chart2.data.datasets[1].data[i+2].y = 0;
    chart2.update('none');
}

function desn2(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    x=-x;
    const i = (Number(id[5])-1)*3 + Number(id[7]) - 1;
    chart2.data.datasets[0].data[i].y = x;
    let m = Number(document.getElementById('zond'+id[4]+id[5]+'_'+id[7]).value);
    if (Number(chart2.data.datasets[1].data[i].y) != m+x){
            m = m+x;
            chart2.data.datasets[1].data[i].y = m;
    }
    chart2.update('none');
    });
};

function zond2(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[7]) - 1;
    let m = Number(document.getElementById('desn'+id[4]+id[5]+'_'+id[7]).value);
    x = x - m;
    chart2.data.datasets[1].data[i].y = x;
    chart2.update('none');
    cpitn();
    });
};

Chart.defaults.plugins.legend.display = false;
const chart2 = new Chart(canvas2, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 0,
        borderWidth: 2,
        borderColor: '#da8c99',
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
                min: -9,
                max: 17,
               }
          },

      }
});


desn2("desn28_1");
desn2("desn28_2");
desn2("desn28_3");
desn2("desn27_1");
desn2("desn27_2");
desn2("desn27_3");
desn2("desn26_1");
desn2("desn26_2");
desn2("desn26_3");
desn2("desn25_1");
desn2("desn25_2");
desn2("desn25_3");
desn2("desn24_1");
desn2("desn24_2");
desn2("desn24_3");
desn2("desn23_1");
desn2("desn23_2");
desn2("desn23_3");
desn2("desn22_1");
desn2("desn22_2");
desn2("desn22_3");
desn2("desn21_1");
desn2("desn21_2");
desn2("desn21_3");
zond2("zond28_1");
zond2("zond28_2");
zond2("zond28_3");
zond2("zond27_1");
zond2("zond27_2");
zond2("zond27_3");
zond2("zond26_1");
zond2("zond26_2");
zond2("zond26_3");
zond2("zond25_1");
zond2("zond25_2");
zond2("zond25_3");
zond2("zond24_1");
zond2("zond24_2");
zond2("zond24_3");
zond2("zond23_1");
zond2("zond23_2");
zond2("zond23_3");
zond2("zond22_1");
zond2("zond22_2");
zond2("zond22_3");
zond2("zond21_1");
zond2("zond21_2");
zond2("zond21_3");


const canvas2 = document.getElementById('chart2');

function desn(id) {
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

function zond(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[7]) - 1;
    let m = Number(document.getElementById('desn'+id[4]+id[5]+'_'+id[7]).value);
    x = x - m;
    chart2.data.datasets[1].data[i].y = x;
    chart2.update('none');
    });
};

Chart.defaults.plugins.legend.display = false;
const chart2 = new Chart(canvas2, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 0,
        borderWidth: 2,
        borderColor: 'crimson',
        data: [{x: 0, y: 0}, {x: 0.9, y: 0}, {x: 1.8, y: 0},{x: 2.6, y: 0}, {x: 3.35, y: 0}, {x: 4.1, y: 0}, {x: 4.9, y: 0}, {x: 5.7, y: 0}, {x: 6.5, y: 0}, {x: 7.3, y: 0}, {x: 8.1, y: 0}, {x: 8.8, y: 0},
        {x: 9.3, y: 0}, {x: 10.2, y: 0}, {x: 11, y: 0},{x: 11.6, y: 0},{x: 13, y: 0},{x: 14.4, y: 0}, {x: 15.1, y: 0},{x: 16.2, y: 0},{x: 17.3, y: 0},{x: 18, y: 0},{x: 19, y: 0},{x: 20, y: 0}],
        showLine: true,
    },{
       pointRadius: 0,
       fill: true,
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
                min: -5,
                max: 10,
               }
          },

      }
});


desn("desn28_1");
desn("desn28_2");
desn("desn28_3");
desn("desn27_1");
desn("desn27_2");
desn("desn27_3");
desn("desn26_1");
desn("desn26_2");
desn("desn26_3");
desn("desn25_1");
desn("desn25_2");
desn("desn25_3");
desn("desn24_1");
desn("desn24_2");
desn("desn24_3");
desn("desn23_1");
desn("desn23_2");
desn("desn23_3");
desn("desn22_1");
desn("desn22_2");
desn("desn22_3");
desn("desn21_1");
desn("desn21_2");
desn("desn21_3");
zond("zond28_1");
zond("zond28_2");
zond("zond28_3");
zond("zond27_1");
zond("zond27_2");
zond("zond27_3");
zond("zond26_1");
zond("zond26_2");
zond("zond26_3");
zond("zond25_1");
zond("zond25_2");
zond("zond25_3");
zond("zond24_1");
zond("zond24_2");
zond("zond24_3");
zond("zond23_1");
zond("zond23_2");
zond("zond23_3");
zond("zond22_1");
zond("zond22_2");
zond("zond22_3");
zond("zond21_1");
zond("zond21_2");
zond("zond21_3");


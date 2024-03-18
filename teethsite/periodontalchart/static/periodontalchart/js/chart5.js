const canvas5 = document.getElementById('chart5');

function zeroing5(id){
    const i = (8 - Number(id[1]))*3;
    chart5.data.datasets[0].data[i].y = 0;
    chart5.data.datasets[1].data[i].y = 0;
    chart5.data.datasets[0].data[i+1].y = 0;
    chart5.data.datasets[1].data[i+1].y = 0;
    chart5.data.datasets[0].data[i+2].y = 0;
    chart5.data.datasets[1].data[i+2].y = 0;
    chart5.update('none');
}

function desn(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    x=-x;
    const i = (8 - Number(id[5]))*3 + Number(id[7]) - 1;
    chart5.data.datasets[0].data[i].y = x;
    let m = Number(document.getElementById('zond'+id[4]+id[5]+'_'+id[7]).value);
    if (Number(chart5.data.datasets[1].data[i].y) != m+x){
            m = m+x;
            chart5.data.datasets[1].data[i].y = m;
    }
    chart5.update('none');
    });
};

function zond(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    const i = (8 - Number(id[5]))*3 + Number(id[7]) - 1;
    let m = Number(document.getElementById('desn'+id[4]+id[5]+'_'+id[7]).value);
    x = x - m;
    chart5.data.datasets[1].data[i].y = x;
    chart5.update('none');
    });
    cpitn();
};

Chart.defaults.plugins.legend.display = false;
const chart5 = new Chart(canvas5, {
   type: "scatter",
   data: {
     datasets: [{
        pointRadius: 2,
        borderWidth: 2,
        borderColor: 'crimson',
        data: [{x: 0, y: 0}, {x: 1.3, y: 0}, {x: 2.6, y: 0},{x: 3.6, y: 0}, {x: 13.9, y: 0}, {x: 6.3, y: 0}, {x: 15.6, y: 0}, {x: 7, y: 0}, {x: 8.4, y: 0}, {x: 9.2, y: 0}, {x: 10, y: 0}, {x: 10.8, y: 0},
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
                 grid: {
                        color: "rgba(0, 0, 0, 0.5)",
                        display: true
                 },
                 ticks: {
                       stepSize: 1,
                       display: false
                },
                min: -9,
                max: 16,
               }
          },

      }
});


desn("desn48_1");
desn("desn48_2");
desn("desn48_3");
desn("desn47_1");
desn("desn47_2");
desn("desn47_3");
desn("desn46_1");
desn("desn46_2");
desn("desn46_3");
desn("desn45_1");
desn("desn45_2");
desn("desn45_3");
desn("desn44_1");
desn("desn44_2");
desn("desn44_3");
desn("desn43_1");
desn("desn43_2");
desn("desn43_3");
desn("desn42_1");
desn("desn42_2");
desn("desn42_3");
desn("desn41_1");
desn("desn41_2");
desn("desn41_3");

zond("zond48_1");
zond("zond48_2");
zond("zond48_3");
zond("zond47_1");
zond("zond47_2");
zond("zond47_3");
zond("zond46_1");
zond("zond46_2");
zond("zond46_3");
zond("zond45_1");
zond("zond45_2");
zond("zond45_3");
zond("zond44_1");
zond("zond44_2");
zond("zond44_3");
zond("zond43_1");
zond("zond43_2");
zond("zond43_3");
zond("zond42_1");
zond("zond42_2");
zond("zond42_3");
zond("zond41_1");
zond("zond41_2");
zond("zond41_3");


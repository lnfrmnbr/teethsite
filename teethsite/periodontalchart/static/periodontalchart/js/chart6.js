const canvas6 = document.getElementById('chart6');

function zeroing6(id){
    const i = (Number(id[1])-1)*3;
    chart6.data.datasets[0].data[i].y = 0;
    chart6.data.datasets[1].data[i].y = 0;
    chart6.data.datasets[0].data[i+1].y = 0;
    chart6.data.datasets[1].data[i+1].y = 0;
    chart6.data.datasets[0].data[i+2].y = 0;
    chart6.data.datasets[1].data[i+2].y = 0;
    chart6.update('none');
}

function desn6(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    x=-x;
    const i = (Number(id[5])-1)*3 + Number(id[7]) - 1;
    chart6.data.datasets[0].data[i].y = x;
    let m = Number(document.getElementById('zond'+id[4]+id[5]+'_'+id[7]).value);
    if (Number(chart6.data.datasets[1].data[i].y) != m+x){
            m = m+x;
            chart6.data.datasets[1].data[i].y = m;
    }
    chart6.update('none');
    });
};

function zond6(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    const i = (Number(id[5])-1)*3 + Number(id[7]) - 1;
    let m = Number(document.getElementById('desn'+id[4]+id[5]+'_'+id[7]).value);
    x = x - m;
    chart6.data.datasets[1].data[i].y = x;
    chart6.update('none');
    cpitn();
    });
};

Chart.defaults.plugins.legend.display = false;
const chart6 = new Chart(canvas6, {
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
                min: -9,
                max: 16,
               }
          },

      }
});


desn6("desn38_1");
desn6("desn38_2");
desn6("desn38_3");
desn6("desn37_1");
desn6("desn37_2");
desn6("desn37_3");
desn6("desn36_1");
desn6("desn36_2");
desn6("desn36_3");
desn6("desn35_1");
desn6("desn35_2");
desn6("desn35_3");
desn6("desn34_1");
desn6("desn34_2");
desn6("desn34_3");
desn6("desn33_1");
desn6("desn33_2");
desn6("desn33_3");
desn6("desn32_1");
desn6("desn32_2");
desn6("desn32_3");
desn6("desn31_1");
desn6("desn31_2");
desn6("desn31_3");

zond6("zond38_1");
zond6("zond38_2");
zond6("zond38_3");
zond6("zond37_1");
zond6("zond37_2");
zond6("zond37_3");
zond6("zond36_1");
zond6("zond36_2");
zond6("zond36_3");
zond6("zond35_1");
zond6("zond35_2");
zond6("zond35_3");
zond6("zond34_1");
zond6("zond34_2");
zond6("zond34_3");
zond6("zond33_1");
zond6("zond33_2");
zond6("zond33_3");
zond6("zond32_1");
zond6("zond32_2");
zond6("zond32_3");
zond6("zond31_1");
zond6("zond31_2");
zond6("zond31_3");


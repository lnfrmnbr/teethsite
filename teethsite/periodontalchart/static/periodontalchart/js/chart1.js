const canvas1 = document.getElementById('chart1');

function zeroing1(id){
    const i = (8 - Number(id[1]))*3;
    chart1.data.datasets[0].data[i].y = 0;
    chart1.data.datasets[1].data[i].y = 0;
    chart1.data.datasets[0].data[i+1].y = 0;
    chart1.data.datasets[1].data[i+1].y = 0;
    chart1.data.datasets[0].data[i+2].y = 0;
    chart1.data.datasets[1].data[i+2].y = 0;
    chart1.update('none');
}

function zeroing_values(id){
    document.getElementById("desn"+id+"_1").value = 0;
    document.getElementById("desn"+id+"_2").value = 0;
    document.getElementById("desn"+id+"_3").value = 0;
    document.getElementById("zond"+id+"_1").value = 0;
    document.getElementById("zond"+id+"_2").value = 0;
    document.getElementById("zond"+id+"_3").value = 0;
    document.getElementById("desn"+id+"2_1").value = 0;
    document.getElementById("desn"+id+"2_2").value = 0;
    document.getElementById("desn"+id+"2_3").value = 0;
    document.getElementById("zond"+id+"2_1").value = 0;
    document.getElementById("zond"+id+"2_2").value = 0;
    document.getElementById("zond"+id+"2_3").value = 0;
}

function desn(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    x=-x;
    const i = (8 - Number(id[5]))*3 + Number(id[7]) - 1;
    chart1.data.datasets[0].data[i].y = x;
    let m = Number(document.getElementById('zond'+id[4]+id[5]+'_'+id[7]).value);
    if (Number(chart1.data.datasets[1].data[i].y) != m+x){
            m = m+x;
            chart1.data.datasets[1].data[i].y = m;
    }
    chart1.update('none');
    });
};

function zond(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
    let x = e.target.value;
    const i = (8 - Number(id[5]))*3 + Number(id[7]) - 1;
    let m = Number(document.getElementById('desn'+id[4]+id[5]+'_'+id[7]).value);
    x = x - m;
    chart1.data.datasets[1].data[i].y = x;
    chart1.update('none');
    cpitn();
    });
};

Chart.defaults.plugins.legend.display = false;
const chart1 = new Chart(canvas1, {
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


desn("desn18_1");
desn("desn18_2");
desn("desn18_3");
desn("desn17_1");
desn("desn17_2");
desn("desn17_3");
desn("desn16_1");
desn("desn16_2");
desn("desn16_3");
desn("desn15_1");
desn("desn15_2");
desn("desn15_3");
desn("desn14_1");
desn("desn14_2");
desn("desn14_3");
desn("desn13_1");
desn("desn13_2");
desn("desn13_3");
desn("desn12_1");
desn("desn12_2");
desn("desn12_3");
desn("desn11_1");
desn("desn11_2");
desn("desn11_3");

zond("zond18_1");
zond("zond18_2");
zond("zond18_3");
zond("zond17_1");
zond("zond17_2");
zond("zond17_3");
zond("zond16_1");
zond("zond16_2");
zond("zond16_3");
zond("zond15_1");
zond("zond15_2");
zond("zond15_3");
zond("zond14_1");
zond("zond14_2");
zond("zond14_3");
zond("zond13_1");
zond("zond13_2");
zond("zond13_3");
zond("zond12_1");
zond("zond12_2");
zond("zond12_3");
zond("zond11_1");
zond("zond11_2");
zond("zond11_3");


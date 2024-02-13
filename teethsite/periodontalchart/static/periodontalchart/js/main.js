const canvas = document.querySelector('canvas');

const desn18_1 = document.getElementById("desn18_1");
desn18_1.addEventListener('input', (e) => {
  chart.data.datasets[0].data[0] = e.target.value;
  chart.update('none');
});

const number2 = document.getElementById("desn18_2");
desn18_2.addEventListener('input', (e) => {
  chart.data.datasets[0].data[1] = e.target.value;
  chart.update('none');
});

Chart.defaults.plugins.legend.display = false;

const chart = new Chart(canvas, {
   type: "line",
   data: {
     labels: ["", "", ""],
     datasets: [{
       data: [0, 0, 0],
       borderColor: 'crimson',
       borderWidth: 2,
       backgroundColor: 'crimson',
    }]
  },
  options: {
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
                }
              },
              y: {
                 grid: {
                        display: false
                 },
                 ticks: {
                       display: false
                }
               }
          },

      }
});

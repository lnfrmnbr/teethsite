function exist18() {
           var el = document.getElementById("exist18");
           if (el.name == 0){
              el.src = "static/periodontalchart/img/no.PNG";
              el.name = 1;
              document.getElementById('podv18').hidden = true;
              document.getElementById('implant18').hidden = true;
              document.getElementById('furk18').hidden = true;
              document.getElementById('kr18_1').hidden = true;
              document.getElementById('kr18_2').hidden = true;
              document.getElementById('kr18_3').hidden = true;
              document.getElementById('otl18_1').hidden = true;
              document.getElementById('otl18_2').hidden = true;
              document.getElementById('otl18_3').hidden = true;
              document.getElementById('desn18_1').hidden = true;
              document.getElementById('desn18_2').hidden = true;
              document.getElementById('desn18_3').hidden = true;
              document.getElementById('zond18_1').hidden = true;
              document.getElementById('zond18_2').hidden = true;
              document.getElementById('zond18_3').hidden = true;
              document.getElementById('fi18').hidden = true;
              if (document.getElementById('t18').name == 1){
                    document.getElementById('impl_kvadr18').hidden = true;
                    document.getElementById('t18').name = 0;
                    document.getElementById('t18').src = "static/periodontalchart/img/t18.PNG";
              }
           }
           else {
              el.src = "";
              el.name = 0;
              document.getElementById('podv18').hidden = false;
              document.getElementById('implant18').hidden = false;
              document.getElementById('furk18').hidden = false;
              document.getElementById('kr18_1').hidden = false;
              document.getElementById('kr18_2').hidden = false;
              document.getElementById('kr18_3').hidden = false;
              document.getElementById('otl18_1').hidden = false;
              document.getElementById('otl18_2').hidden = false;
              document.getElementById('otl18_3').hidden = false;
              document.getElementById('desn18_1').hidden = false;
              document.getElementById('desn18_2').hidden = false;
              document.getElementById('desn18_3').hidden = false;
              document.getElementById('zond18_1').hidden = false;
              document.getElementById('zond18_2').hidden = false;
              document.getElementById('zond18_3').hidden = false;
              document.getElementById('fi18').hidden = false;
           }
   }
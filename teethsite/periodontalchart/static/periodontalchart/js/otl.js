function otlozh_dop(id){
     var el = document.getElementById(id);
     el.style.backgroundColor = 'Gold';
     el.name = 1;
}

function otlozh1() {
           otlozh_dop("otl18_1")
           otlozh_dop("otl18_2");
           otlozh_dop("otl18_3");
           otlozh_dop("otl17_1");
           otlozh_dop("otl17_2");
           otlozh_dop("otl17_3");
           otlozh_dop("otl16_1");
           otlozh_dop("otl16_2");
           otlozh_dop("otl16_3");
           otlozh_dop("otl15_1");
           otlozh_dop("otl15_2");
           otlozh_dop("otl15_3");
           otlozh_dop("otl14_1");
           otlozh_dop("otl14_2");
           otlozh_dop("otl14_3");
           otlozh_dop("otl13_1");
           otlozh_dop("otl13_2");
           otlozh_dop("otl13_3");
           otlozh_dop("otl12_1");
           otlozh_dop("otl12_2");
           otlozh_dop("otl12_3");
           otlozh_dop("otl11_1");
           otlozh_dop("otl11_2");
           otlozh_dop("otl11_3");
           otlozh_dop("otl21_1");
           otlozh_dop("otl21_2");
           otlozh_dop("otl21_3");
           otlozh_dop("otl22_1");
           otlozh_dop("otl22_2");
           otlozh_dop("otl22_3");
           otlozh_dop("otl23_1");
           otlozh_dop("otl23_2");
           otlozh_dop("otl23_3");
           otlozh_dop("otl24_1");
           otlozh_dop("otl24_2");
           otlozh_dop("otl24_3");
           otlozh_dop("otl25_1");
           otlozh_dop("otl25_2");
           otlozh_dop("otl25_3");
           otlozh_dop("otl26_1");
           otlozh_dop("otl26_2");
           otlozh_dop("otl26_3");
           otlozh_dop("otl27_1");
           otlozh_dop("otl27_2");
           otlozh_dop("otl27_3");
           otlozh_dop("otl28_1");
           otlozh_dop("otl28_2");
           otlozh_dop("otl28_3");
}

function otlozh2() {
           otlozh_dop("otl182_1")
           otlozh_dop("otl182_2");
           otlozh_dop("otl182_3");
           otlozh_dop("otl172_1");
           otlozh_dop("otl172_2");
           otlozh_dop("otl172_3");
           otlozh_dop("otl162_1");
           otlozh_dop("otl162_2");
           otlozh_dop("otl162_3");
           otlozh_dop("otl152_1");
           otlozh_dop("otl152_2");
           otlozh_dop("otl152_3");
           otlozh_dop("otl142_1");
           otlozh_dop("otl142_2");
           otlozh_dop("otl142_3");
           otlozh_dop("otl132_1");
           otlozh_dop("otl132_2");
           otlozh_dop("otl132_3");
           otlozh_dop("otl122_1");
           otlozh_dop("otl122_2");
           otlozh_dop("otl122_3");
           otlozh_dop("otl112_1");
           otlozh_dop("otl112_2");
           otlozh_dop("otl112_3");
           otlozh_dop("otl212_1");
           otlozh_dop("otl212_2");
           otlozh_dop("otl212_3");
           otlozh_dop("otl222_1");
           otlozh_dop("otl222_2");
           otlozh_dop("otl222_3");
           otlozh_dop("otl232_1");
           otlozh_dop("otl232_2");
           otlozh_dop("otl232_3");
           otlozh_dop("otl242_1");
           otlozh_dop("otl242_2");
           otlozh_dop("otl242_3");
           otlozh_dop("otl252_1");
           otlozh_dop("otl252_2");
           otlozh_dop("otl252_3");
           otlozh_dop("otl262_1");
           otlozh_dop("otl262_2");
           otlozh_dop("otl262_3");
           otlozh_dop("otl272_1");
           otlozh_dop("otl272_2");
           otlozh_dop("otl272_3");
           otlozh_dop("otl282_1");
           otlozh_dop("otl282_2");
           otlozh_dop("otl282_3");
}

function otl1(id_) {
           var id = String(id_);
           var el = document.getElementById("otl"+id+"_1");
           if (el.name == 0){
              el.style.backgroundColor = 'Gold';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
}

function otl2(id_) {
           var id = String(id_);
           var el = document.getElementById("otl"+id+"_2");
           if (el.name == 0){
              el.style.backgroundColor = 'Gold';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
}

function otl3(id_) {
           var id = String(id_);
           var el = document.getElementById("otl"+id+"_3");
           if (el.name == 0){
              el.style.backgroundColor = 'Gold';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
}
function kamen_dop(id){
     var el = document.getElementById(id);
     el.style.backgroundColor = 'DimGrey';
     el.name = 1;
     cpitn();
}

function kamen1() {
           kamen_dop("kam18_1")
           kamen_dop("kam18_2");
           kamen_dop("kam18_3");
           kamen_dop("kam17_1");
           kamen_dop("kam17_2");
           kamen_dop("kam17_3");
           kamen_dop("kam16_1");
           kamen_dop("kam16_2");
           kamen_dop("kam16_3");
           kamen_dop("kam15_1");
           kamen_dop("kam15_2");
           kamen_dop("kam15_3");
           kamen_dop("kam14_1");
           kamen_dop("kam14_2");
           kamen_dop("kam14_3");
           kamen_dop("kam13_1");
           kamen_dop("kam13_2");
           kamen_dop("kam13_3");
           kamen_dop("kam12_1");
           kamen_dop("kam12_2");
           kamen_dop("kam12_3");
           kamen_dop("kam11_1");
           kamen_dop("kam11_2");
           kamen_dop("kam11_3");
           kamen_dop("kam21_1");
           kamen_dop("kam21_2");
           kamen_dop("kam21_3");
           kamen_dop("kam22_1");
           kamen_dop("kam22_2");
           kamen_dop("kam22_3");
           kamen_dop("kam23_1");
           kamen_dop("kam23_2");
           kamen_dop("kam23_3");
           kamen_dop("kam24_1");
           kamen_dop("kam24_2");
           kamen_dop("kam24_3");
           kamen_dop("kam25_1");
           kamen_dop("kam25_2");
           kamen_dop("kam25_3");
           kamen_dop("kam26_1");
           kamen_dop("kam26_2");
           kamen_dop("kam26_3");
           kamen_dop("kam27_1");
           kamen_dop("kam27_2");
           kamen_dop("kam27_3");
           kamen_dop("kam28_1");
           kamen_dop("kam28_2");
           kamen_dop("kam28_3");
}

function kamen2() {
           kamen_dop("kam182_1")
           kamen_dop("kam182_2");
           kamen_dop("kam182_3");
           kamen_dop("kam172_1");
           kamen_dop("kam172_2");
           kamen_dop("kam172_3");
           kamen_dop("kam162_1");
           kamen_dop("kam162_2");
           kamen_dop("kam162_3");
           kamen_dop("kam152_1");
           kamen_dop("kam152_2");
           kamen_dop("kam152_3");
           kamen_dop("kam142_1");
           kamen_dop("kam142_2");
           kamen_dop("kam142_3");
           kamen_dop("kam132_1");
           kamen_dop("kam132_2");
           kamen_dop("kam132_3");
           kamen_dop("kam122_1");
           kamen_dop("kam122_2");
           kamen_dop("kam122_3");
           kamen_dop("kam112_1");
           kamen_dop("kam112_2");
           kamen_dop("kam112_3");
           kamen_dop("kam212_1");
           kamen_dop("kam212_2");
           kamen_dop("kam212_3");
           kamen_dop("kam222_1");
           kamen_dop("kam222_2");
           kamen_dop("kam222_3");
           kamen_dop("kam232_1");
           kamen_dop("kam232_2");
           kamen_dop("kam232_3");
           kamen_dop("kam242_1");
           kamen_dop("kam242_2");
           kamen_dop("kam242_3");
           kamen_dop("kam252_1");
           kamen_dop("kam252_2");
           kamen_dop("kam252_3");
           kamen_dop("kam262_1");
           kamen_dop("kam262_2");
           kamen_dop("kam262_3");
           kamen_dop("kam272_1");
           kamen_dop("kam272_2");
           kamen_dop("kam272_3");
           kamen_dop("kam282_1");
           kamen_dop("kam282_2");
           kamen_dop("kam282_3");
}

function kam1(id_) {
           var id = String(id_);
           var el = document.getElementById("kam"+id+"_1");
           if (el.name == 0){
              el.style.backgroundColor = 'DimGrey';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
           cpitn();
}

function kam2(id_) {
           var id = String(id_);
           var el = document.getElementById("kam"+id+"_2");
           if (el.name == 0){
              el.style.backgroundColor = 'DimGrey';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
           cpitn();
}

function kam3(id_) {
           var id = String(id_);
           var el = document.getElementById("kam"+id+"_3");
           if (el.name == 0){
              el.style.backgroundColor = 'DimGrey';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
           cpitn();
}
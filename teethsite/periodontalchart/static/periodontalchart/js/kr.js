function krov_dop(id){
     var el = document.getElementById(id);
     el.style.backgroundColor = 'DarkRed';
     el.name = 1;
}

function krov1() {
           krov_dop("kr18_1")
           krov_dop("kr18_2");
           krov_dop("kr18_3");
           krov_dop("kr17_1");
           krov_dop("kr17_2");
           krov_dop("kr17_3");
           krov_dop("kr16_1");
           krov_dop("kr16_2");
           krov_dop("kr16_3");
           krov_dop("kr15_1");
           krov_dop("kr15_2");
           krov_dop("kr15_3");
           krov_dop("kr14_1");
           krov_dop("kr14_2");
           krov_dop("kr14_3");
           krov_dop("kr13_1");
           krov_dop("kr13_2");
           krov_dop("kr13_3");
           krov_dop("kr12_1");
           krov_dop("kr12_2");
           krov_dop("kr12_3");
           krov_dop("kr11_1");
           krov_dop("kr11_2");
           krov_dop("kr11_3");
           krov_dop("kr21_1");
           krov_dop("kr21_2");
           krov_dop("kr21_3");
           krov_dop("kr22_1");
           krov_dop("kr22_2");
           krov_dop("kr22_3");
           krov_dop("kr23_1");
           krov_dop("kr23_2");
           krov_dop("kr23_3");
           krov_dop("kr24_1");
           krov_dop("kr24_2");
           krov_dop("kr24_3");
           krov_dop("kr25_1");
           krov_dop("kr25_2");
           krov_dop("kr25_3");
           krov_dop("kr26_1");
           krov_dop("kr26_2");
           krov_dop("kr26_3");
           krov_dop("kr27_1");
           krov_dop("kr27_2");
           krov_dop("kr27_3");
           krov_dop("kr28_1");
           krov_dop("kr28_2");
           krov_dop("kr28_3");
}

function krov2() {
           krov_dop("kr182_1")
           krov_dop("kr182_2");
           krov_dop("kr182_3");
           krov_dop("kr172_1");
           krov_dop("kr172_2");
           krov_dop("kr172_3");
           krov_dop("kr162_1");
           krov_dop("kr162_2");
           krov_dop("kr162_3");
           krov_dop("kr152_1");
           krov_dop("kr152_2");
           krov_dop("kr152_3");
           krov_dop("kr142_1");
           krov_dop("kr142_2");
           krov_dop("kr142_3");
           krov_dop("kr132_1");
           krov_dop("kr132_2");
           krov_dop("kr132_3");
           krov_dop("kr122_1");
           krov_dop("kr122_2");
           krov_dop("kr122_3");
           krov_dop("kr112_1");
           krov_dop("kr112_2");
           krov_dop("kr112_3");
           krov_dop("kr212_1");
           krov_dop("kr212_2");
           krov_dop("kr212_3");
           krov_dop("kr222_1");
           krov_dop("kr222_2");
           krov_dop("kr222_3");
           krov_dop("kr232_1");
           krov_dop("kr232_2");
           krov_dop("kr232_3");
           krov_dop("kr242_1");
           krov_dop("kr242_2");
           krov_dop("kr242_3");
           krov_dop("kr252_1");
           krov_dop("kr252_2");
           krov_dop("kr252_3");
           krov_dop("kr262_1");
           krov_dop("kr262_2");
           krov_dop("kr262_3");
           krov_dop("kr272_1");
           krov_dop("kr272_2");
           krov_dop("kr272_3");
           krov_dop("kr282_1");
           krov_dop("kr282_2");
           krov_dop("kr282_3");
}

function kr1(id_) {
           var id = String(id_);
           var el = document.getElementById("kr"+id+"_1");
           if (el.name == 0){
              el.style.backgroundColor = 'DarkRed';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
}

function kr2(id_) {
           var id = String(id_);
           var el = document.getElementById("kr"+id+"_2");
           if (el.name == 0){
              el.style.backgroundColor = 'DarkRed';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
}

function kr3(id_) {
           var id = String(id_);
           var el = document.getElementById("kr"+id+"_3");
           if (el.name == 0){
              el.style.backgroundColor = 'DarkRed';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#fff0f5';
              el.name = 0;
           }
}

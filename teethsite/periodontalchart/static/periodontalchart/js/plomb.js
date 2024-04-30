function plomb(id_) {
           var id = String(id_);
           var el = document.getElementById("plomb"+id);
           if (el.name == 0){
              el.style.backgroundColor = 'LightSeaGreen';
              el.name = 1;
           }
           else {
              el.style.backgroundColor = '#f0f0f0';
              el.name = 0;
           }
}
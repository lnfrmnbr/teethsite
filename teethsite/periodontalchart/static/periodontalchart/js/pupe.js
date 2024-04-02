function pupe(id_) {
      var id = String(id_);
      var pic = document.getElementById("t"+id);
      var but = document.getElementById("pupe"+id);
      if (pic.name == 0){
        pic.name = 2;
        pic.src = "static/periodontalchart/img/t"+id+"r.PNG";
        but.style.backgroundColor = 'red';
      }
      else if (pic.name == 2){
        pic.name = 3;
        pic.src = "static/periodontalchart/img/t"+id+"b.PNG";
        but.style.backgroundColor = 'black';
      }
      else if (pic.name == 3){
        pic.name = 0;
        pic.src = "static/periodontalchart/img/t"+id+".PNG";
        but.style.backgroundColor = '#fff0f5';
      }
}
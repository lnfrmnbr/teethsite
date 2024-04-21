function pupe(id_) {
      var id = String(id_);
      var pic = document.getElementById("t"+id);
      var pic2 = document.getElementById("t"+id+"2");
      var but = document.getElementById("pupe"+id);
      if (pic.name == 0){
        pic.src = "static/periodontalchart/img/tr/t"+id+"r.png";
        pic2.src = "static/periodontalchart/img/tr/t"+id+"2r.png";
        but.style.backgroundColor = 'red';
        pic.name = 2;
        pic2.name = 2;
      }
      else if (pic.name == 2){
        pic.src = "static/periodontalchart/img/tb/t"+id+"b.png";
        pic2.src = "static/periodontalchart/img/tb/t"+id+"2b.png";
        but.style.backgroundColor = 'black';
        pic.name = 3;
        pic2.name = 3;
      }
      else if (pic.name == 3){
        pic.src = "static/periodontalchart/img/t"+id+".png";
        pic2.src = "static/periodontalchart/img/t"+id+"2.png";
        but.style.backgroundColor = '#f0f0f0';
        pic.name = 0;
        pic2.name = 0;
      }
}
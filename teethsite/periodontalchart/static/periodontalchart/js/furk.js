function furk(id_) {
           var id = String(id_);
           if (id.length == 3){
                var butt = document.getElementById("fb"+id[0]+id[1]+"z");
                var pic = document.getElementById("fi"+id[0]+id[1]+"z");
           }
           else{
                var butt = document.getElementById("fb"+id);
                var pic = document.getElementById("fi"+id);
           }
           if (butt.name == 0){
              butt.name = 1;
              butt.src = "static/periodontalchart/img/f1.PNG";
              pic.src = "static/periodontalchart/img/f1.PNG";
           }
           else if (butt.name == 1) {
              butt.name = 2;
              butt.src = "static/periodontalchart/img/f2.PNG";
              pic.src = "static/periodontalchart/img/f2.PNG";
           }
           else if (butt.name == 2){
              butt.name = 3;
              butt.src = "static/periodontalchart/img/f3.PNG";
              pic.src = "static/periodontalchart/img/f3.PNG";
           }
           else if (butt.name == 3){
              butt.name = 0;
              butt.src = "";
              pic.src = "";
           }
}
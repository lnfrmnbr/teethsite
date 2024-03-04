function furk(id_) {
           var id = String(id_);
           var butt = document.getElementById("fb"+id);
           var pic = document.getElementById("fi"+id);
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

function furk1(id_) {
           var id = String(id_);
           var butt = document.getElementById("fb"+id+"_1");
           var pic = document.getElementById("fi"+id+"_1");
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

function furk2(id_) {
           var id = String(id_);
           var butt = document.getElementById("fb"+id+"_2");
           var pic = document.getElementById("fi"+id+"_2");
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
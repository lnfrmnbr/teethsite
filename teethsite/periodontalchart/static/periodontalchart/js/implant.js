function implant(id_) {
           var id = String(id_);
           var el = document.getElementById("t"+id);
           if (el.name != 1){
              el.src = "static/periodontalchart/img/t"+id+"i.png";
              document.getElementById("t"+id+"2").src = "static/periodontalchart/img/t"+id+"2i.png";
              document.getElementById('impl_kvadr'+id).hidden = false;
              document.getElementById('pupe'+id).style.backgroundColor = '#f0f0f0';
              document.getElementById('pupe'+id).hidden = true;
              document.getElementById('plomb'+id).hidden = true;
              el.name = 1;
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById('furk'+id).hidden = true;
                    document.getElementById('furk'+id+"2_1").hidden = true;
                    document.getElementById('furk'+id+"2_2").hidden = true;
                    document.getElementById('fi'+id).hidden = true;
                    document.getElementById('fi'+id+"2_1").hidden = true;
                    document.getElementById('fi'+id+"2_2").hidden = true;
              }
              if (id_ == 14 || id_ == 24){
                    document.getElementById('furk'+id+"2_1").hidden = true;
                    document.getElementById('furk'+id+"2_2").hidden = true;
                    document.getElementById('fi'+id+"2_1").hidden = true;
                    document.getElementById('fi'+id+"2_2").hidden = true;
              }
              if (id_ == 48 || id_ == 47 || id_ == 46){
                    document.getElementById('furk'+id+"2").hidden = true;
                    document.getElementById('fi'+id+"2").hidden = true;
              }
              if (id[1] == "1" || id[1] == "2" || id[1] == "3"){
                    document.getElementById('t'+id+"kar6").name = 0;
                    document.getElementById('t'+id+"kar5").name = 0;
                    document.getElementById('t'+id+"kar31").name = 0;
                    document.getElementById('t'+id+"kar32").name = 0;
                    document.getElementById('t'+id+"kar41").name = 0;
                    document.getElementById('t'+id+"kar42").name = 0;
                    document.getElementById('t'+id+"kar6").hidden = true;
                    document.getElementById('t'+id+"kar5").hidden = true;
                    document.getElementById('t'+id+"kar31").hidden = true;
                    document.getElementById('t'+id+"kar32").hidden = true;
                    document.getElementById('t'+id+"kar41").hidden = true;
                    document.getElementById('t'+id+"kar42").hidden = true;
                    document.getElementById("kar"+id+"_6").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_5").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_31").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_32").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_41").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_42").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_6").hidden = true;
                    document.getElementById("kar"+id+"_5").hidden = true;
                    document.getElementById("kar"+id+"_31").hidden = true;
                    document.getElementById("kar"+id+"_32").hidden = true;
                    document.getElementById("kar"+id+"_41").hidden = true;
                    document.getElementById("kar"+id+"_42").hidden = true;

                    document.getElementById('t'+id+"2kar6").name = 0;
                    document.getElementById('t'+id+"2kar5").name = 0;
                    document.getElementById('t'+id+"2kar31").name = 0;
                    document.getElementById('t'+id+"2kar32").name = 0;
                    document.getElementById('t'+id+"2kar41").name = 0;
                    document.getElementById('t'+id+"2kar42").name = 0;
                    document.getElementById('t'+id+"2kar6").hidden = true;
                    document.getElementById('t'+id+"2kar5").hidden = true;
                    document.getElementById('t'+id+"2kar31").hidden = true;
                    document.getElementById('t'+id+"2kar32").hidden = true;
                    document.getElementById('t'+id+"2kar41").hidden = true;
                    document.getElementById('t'+id+"2kar42").hidden = true;
                    document.getElementById("kar"+id+"2_6").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_5").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_31").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_32").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_41").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_42").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_6").hidden = true;
                    document.getElementById("kar"+id+"2_5").hidden = true;
                    document.getElementById("kar"+id+"2_31").hidden = true;
                    document.getElementById("kar"+id+"2_32").hidden = true;
                    document.getElementById("kar"+id+"2_41").hidden = true;
                    document.getElementById("kar"+id+"2_42").hidden = true;
              }
              if (id[1] == "4" || id[1] == "5" || id[1] == "6" || id[1] == "7" || id[1] == "8"){
                    document.getElementById('t'+id+"kar1").name = 0;
                    document.getElementById('t'+id+"kar5").name = 0;
                    document.getElementById('t'+id+"kar61").name = 0;
                    document.getElementById('t'+id+"kar62").name = 0;
                    document.getElementById('t'+id+"kar21").name = 0;
                    document.getElementById('t'+id+"kar22").name = 0;
                    document.getElementById('t'+id+"kar1").hidden = true;
                    document.getElementById('t'+id+"kar5").hidden = true;
                    document.getElementById('t'+id+"kar61").hidden = true;
                    document.getElementById('t'+id+"kar62").hidden = true;
                    document.getElementById('t'+id+"kar21").hidden = true;
                    document.getElementById('t'+id+"kar22").hidden = true;
                    document.getElementById("kar"+id+"_1").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_5").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_61").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_62").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_21").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_22").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_1").hidden = true;
                    document.getElementById("kar"+id+"_5").hidden = true;
                    document.getElementById("kar"+id+"_61").hidden = true;
                    document.getElementById("kar"+id+"_62").hidden = true;
                    document.getElementById("kar"+id+"_21").hidden = true;
                    document.getElementById("kar"+id+"_22").hidden = true;
                    document.getElementById('t'+id+"2kar1").name = 0;
                    document.getElementById('t'+id+"2kar5").name = 0;
                    document.getElementById('t'+id+"2kar61").name = 0;
                    document.getElementById('t'+id+"2kar62").name = 0;
                    document.getElementById('t'+id+"2kar21").name = 0;
                    document.getElementById('t'+id+"2kar22").name = 0;
                    document.getElementById('t'+id+"2kar1").hidden = true;
                    document.getElementById('t'+id+"2kar5").hidden = true;
                    document.getElementById('t'+id+"2kar61").hidden = true;
                    document.getElementById('t'+id+"2kar62").hidden = true;
                    document.getElementById('t'+id+"2kar21").hidden = true;
                    document.getElementById('t'+id+"2kar22").hidden = true;
                    document.getElementById("kar"+id+"2_1").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_5").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_61").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_62").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_21").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_22").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_1").hidden = true;
                    document.getElementById("kar"+id+"2_5").hidden = true;
                    document.getElementById("kar"+id+"2_61").hidden = true;
                    document.getElementById("kar"+id+"2_62").hidden = true;
                    document.getElementById("kar"+id+"2_21").hidden = true;
                    document.getElementById("kar"+id+"2_22").hidden = true;
              }
           }
           else {
              el.src = "static/periodontalchart/img/t"+id+".png";
              document.getElementById("t"+id+"2").src = "static/periodontalchart/img/t"+id+"2.png";
              document.getElementById('impl_kvadr'+id).hidden = true;
              document.getElementById('pupe'+id).hidden = false;
              document.getElementById('plomb'+id).hidden = false;
              el.name = 0;
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById('furk'+id).hidden = false;
                    document.getElementById('furk'+id+"2_1").hidden = false;
                    document.getElementById('furk'+id+"2_2").hidden = false;
                    document.getElementById('fi'+id).hidden = false;
                    document.getElementById('fi'+id+"2_1").hidden = false;
                    document.getElementById('fi'+id+"2_2").hidden = false;
              }
              if (id_ == 14|| id_ == 24){
                    document.getElementById('furk'+id+"2_1").hidden = false;
                    document.getElementById('furk'+id+"2_2").hidden = false;
                    document.getElementById('fi'+id+"2_1").hidden = false;
                    document.getElementById('fi'+id+"2_2").hidden = false;
              }
              if (id_ == 48 || id_ == 47 || id_ == 46){
                    document.getElementById('furk'+id+"2").hidden = false;
                    document.getElementById('fi'+id+"2").hidden = false;
              }
              if (id[1] == "1" || id[1] == "2" || id[1] == "3"){
                    document.getElementById("kar"+id+"_6").hidden = false;
                    document.getElementById("kar"+id+"_5").hidden = false;
                    document.getElementById("kar"+id+"_31").hidden = false;
                    document.getElementById("kar"+id+"_32").hidden = false;
                    document.getElementById("kar"+id+"_41").hidden = false;
                    document.getElementById("kar"+id+"_42").hidden = false;
                    document.getElementById("kar"+id+"2_6").hidden = false;
                    document.getElementById("kar"+id+"2_5").hidden = false;
                    document.getElementById("kar"+id+"2_31").hidden = false;
                    document.getElementById("kar"+id+"2_32").hidden = false;
                    document.getElementById("kar"+id+"2_41").hidden = false;
                    document.getElementById("kar"+id+"2_42").hidden = false;
              }
              if (id[1] == "4" || id[1] == "5" || id[1] == "6" || id[1] == "7" || id[1] == "8"){
                    document.getElementById("kar"+id+"_1").hidden = false;
                    document.getElementById("kar"+id+"_5").hidden = false;
                    document.getElementById("kar"+id+"_61").hidden = false;
                    document.getElementById("kar"+id+"_62").hidden = false;
                    document.getElementById("kar"+id+"_21").hidden = false;
                    document.getElementById("kar"+id+"_22").hidden = false;

                    document.getElementById("kar"+id+"2_1").hidden = false;
                    document.getElementById("kar"+id+"2_5").hidden = false;
                    document.getElementById("kar"+id+"2_61").hidden = false;
                    document.getElementById("kar"+id+"2_62").hidden = false;
                    document.getElementById("kar"+id+"2_21").hidden = false;
                    document.getElementById("kar"+id+"2_22").hidden = false;
              }
           }
           kpu();
}
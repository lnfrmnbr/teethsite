function implant(id_) {
           var id = String(id_);
           var el = document.getElementById("t"+id);
           if (el.name != 1){
              el.src = "static/periodontalchart/img/t"+id+"i.PNG";
              document.getElementById("t"+id+"2").src = "static/periodontalchart/img/t"+id+"2i.PNG";
              document.getElementById('impl_kvadr'+id).hidden = false;
              document.getElementById('pupe'+id).style.backgroundColor = '#f0f0f0';
              document.getElementById('pupe'+id).hidden = true;
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
           }
           else {
              el.src = "static/periodontalchart/img/t"+id+".PNG";
              document.getElementById("t"+id+"2").src = "static/periodontalchart/img/t"+id+"2.PNG";
              document.getElementById('impl_kvadr'+id).hidden = true;
              document.getElementById('pupe'+id).hidden = false;
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
           }
}
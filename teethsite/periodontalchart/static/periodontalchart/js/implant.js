function implant(id_) {
           var id = String(id_);
           var el = document.getElementById("t"+id);
           if (el.name == 0){
              el.src = "static/periodontalchart/img/t"+id+"i.PNG";
              document.getElementById('impl_kvadr'+id).hidden = false;
              el.name = 1;
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById('furk'+id).hidden = true;
                    document.getElementById('furk'+id).hidden = true;
                    document.getElementById('fi'+id).hidden = true;
              }
           }
           else {
              el.src = "static/periodontalchart/img/t"+id+".PNG";
              document.getElementById('impl_kvadr'+id).hidden = true;
              el.name = 0;
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById('furk'+id).hidden = false;
                    document.getElementById('furk'+id).hidden = false;
                    document.getElementById('fi'+id).hidden = false;
              }
           }
}
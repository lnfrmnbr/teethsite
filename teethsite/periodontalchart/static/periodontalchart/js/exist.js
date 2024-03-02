function create_ls_of_id(id){
     var ls = ["podv??", "implant??", "kr??_1", "kr??_2", "kr??_3", "otl??_1", "otl??_2", "otl??_3", "desn??_1", "desn??_2", "desn??_3", "zond??_1", "zond??_2", "zond??_3", "fi??"];
     for (var i =0; i< ls.length; i++){
                    ls[i] = ls[i].replace("??", id);
     }
     return ls;
}

function exist(id_) {
           var id = String(id_);
           var el = document.getElementById("exist"+id);
           var ls = create_ls_of_id(id);
           if (el.name == 0){
              el.name = 1;
              document.getElementById('no'+id).hidden = false;
              for (var i = 0; i< ls.length; i++){
                    document.getElementById(ls[i]).hidden = true;
              }
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById("furk"+id).hidden = true;
              }
              if (document.getElementById('t'+id).name == 1){
                    document.getElementById('impl_kvadr'+id).hidden = true;
                    document.getElementById('t'+id).name = 0;
                    document.getElementById('t'+id).src = "static/periodontalchart/img/t"+id+".PNG";
              }
           }
           else {
              el.name = 0;
              document.getElementById('no'+id).hidden = true;
              for (var i =0; i< ls.length; i++){
                    document.getElementById(ls[i]).hidden = false;
              }
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById("furk"+id).hidden = false;
              }
           }
}
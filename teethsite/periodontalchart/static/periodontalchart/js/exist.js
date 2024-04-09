function create_ls_of_id(id){
     var ls = ["podv??", "implant??", "pupe??", "kr??_1", "kr??_2", "kr??_3", "otl??_1", "otl??_2", "otl??_3", "vos??_1", "vos??_2", "vos??_3","kam??_1", "kam??_2", "kam??_3", "desn??_1", "desn??_2", "desn??_3", "zond??_1", "zond??_2", "zond??_3"];
     for (var i =0; i< ls.length; i++){
                    ls[i] = ls[i].replace("??", id);
     }
     return ls;
}

function create_ls_of_id2(id){
     var ls = ["kr??_1", "kr??_2", "kr??_3", "otl??_1", "otl??_2", "otl??_3", "vos??_1", "vos??_2", "vos??_3", "kam??_1", "kam??_2", "kam??_3", "desn??_1", "desn??_2", "desn??_3", "zond??_1", "zond??_2", "zond??_3"];
     for (var i =0; i< ls.length; i++){
                    ls[i] = ls[i].replace("??", id);
     }
     return ls;
}

function exist(id_) {
           var id = String(id_);
           var el = document.getElementById("exist"+id);
           var ls = create_ls_of_id(id_);
           var ls2 = create_ls_of_id2(id+"2");
           if (el.name == 0){
              el.name = 1;
              zeroing_values(id);
              if (id[0] == "1" || id[0] == "2"){
                    zeroing1(id);
                    zeroing2(id);
                    zeroing3(id);
                    zeroing4(id);
              }
              else{
                    zeroing5(id);
                    zeroing6(id);
                    zeroing7(id);
                    zeroing8(id);
              }
              document.getElementById('no'+id).hidden = false;
              document.getElementById('no'+id+"2").hidden = false;
              if (document.getElementById("t"+id).name != 0){
                    document.getElementById("t"+id).name = 0;
                    document.getElementById("t"+id+"2").name = 0;
                    document.getElementById("t"+id).src = "static/periodontalchart/img/t"+id+".PNG";;
                    document.getElementById("t"+id+"2").src = "static/periodontalchart/img/t"+id+"2.PNG";
                    document.getElementById("pupe"+id).style.backgroundColor = '#fff0f5';
              }
              for (var i = 0; i< ls.length; i++){
                    document.getElementById(ls[i]).hidden = true;
              }
              for (var i = 0; i< ls2.length; i++){
                    document.getElementById(ls2[i]).hidden = true;
              }
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById("furk"+id).hidden = true;
                    document.getElementById("fi"+id).hidden = true;
                    document.getElementById("furk"+id+"2_1").hidden = true;
                    document.getElementById("fi"+id+"2_1").hidden = true;
                    document.getElementById("furk"+id+"2_2").hidden = true;
                    document.getElementById("fi"+id+"2_2").hidden = true;
              }
              if (id_ == 48 || id_ == 47 || id_ == 46 || id_ == 38 || id_ == 37 || id_ == 36){
                    document.getElementById("furk"+id).hidden = true;
                    document.getElementById("fi"+id).hidden = true;
                    document.getElementById("furk"+id+"2").hidden = true;
                    document.getElementById("fi"+id+"2").hidden = true;
              }
              if (id_ == 14){
                    document.getElementById("furk"+id+"2_1").hidden = true;
                    document.getElementById("fi"+id+"2_1").hidden = true;
                    document.getElementById("furk"+id+"2_2").hidden = true;
                    document.getElementById("fi"+id+"2_2").hidden = true;
              }
              if (document.getElementById('t'+id).name == 1){
                    document.getElementById('impl_kvadr'+id).hidden = true;
                    document.getElementById('t'+id).name = 0;
                    document.getElementById('t'+id).src = "static/periodontalchart/img/t"+id+".PNG";
                    document.getElementById('t'+id+'2').name = 0;
                    document.getElementById('t'+id+'2').src = "static/periodontalchart/img/t"+id+"2.PNG";
              }
           }
           else {
              el.name = 0;
              document.getElementById('no'+id).hidden = true;
              document.getElementById('no'+id+"2").hidden = true;
              for (var i =0; i< ls.length; i++){
                    document.getElementById(ls[i]).hidden = false;
              }
              for (var i = 0; i< ls2.length; i++){
                    document.getElementById(ls2[i]).hidden = false;
              }
              if (id_ == 18 || id_ == 17 || id_ == 16 || id_ == 28 || id_ == 27 || id_ == 26){
                    document.getElementById("furk"+id).hidden = false;
                    document.getElementById("fi"+id).hidden = false;
                    document.getElementById("furk"+id+"2_1").hidden = false;
                    document.getElementById("fi"+id+"2_1").hidden = false;
                    document.getElementById("furk"+id+"2_2").hidden = false;
                    document.getElementById("fi"+id+"2_2").hidden = false;
              }
              if (id_ == 48 || id_ == 47 || id_ == 46 || id_ == 38 || id_ == 37 || id_ == 36){
                    document.getElementById("furk"+id).hidden = false;
                    document.getElementById("fi"+id).hidden = false;
                    document.getElementById("furk"+id+"2").hidden = false;
                    document.getElementById("fi"+id+"2").hidden = false;
              }
              if (id_ == 14){
                    document.getElementById("furk"+id+"2_1").hidden = false;
                    document.getElementById("fi"+id+"2_1").hidden = false;
                    document.getElementById("furk"+id+"2_2").hidden = false;
                    document.getElementById("fi"+id+"2_2").hidden = false;
              }
           }
           pi();
           bop();
           api();
           cpitn();
}
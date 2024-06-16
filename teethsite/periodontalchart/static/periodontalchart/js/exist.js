function create_ls_of_id(id){
     var ls = ["podv??", "implant??", "pupe??", "kr??_1", "kr??_2", "kr??_3", "otl??_1", "otl??_2", "otl??_3", "vos??_1", "vos??_2", "vos??_3","kam??_1", "kam??_2", "kam??_3", "desn??_1", "desn??_2", "desn??_3", "zond??_1", "zond??_2", "zond??_3", "plomb??"];
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
                    document.getElementById("t"+id).src = "static/periodontalchart/img/t"+id+".png";;
                    document.getElementById("t"+id+"2").src = "static/periodontalchart/img/t"+id+"2.png";
                    document.getElementById("pupe"+id).style.backgroundColor = '#f0f0f0';
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
                    document.getElementById('t'+id).src = "static/periodontalchart/img/t"+id+".png";
                    document.getElementById('t'+id+'2').name = 0;
                    document.getElementById('t'+id+'2').src = "static/periodontalchart/img/t"+id+"2.png";
              }
              if (id[1] == "1" || id[1] == "2" || id[1] == "3"){
                    document.getElementById('t'+id+"kar6").name = 0;
                    document.getElementById('t'+id+"kar5").name = 0;
                    document.getElementById('t'+id+"kar31").name = 0;
                    document.getElementById('t'+id+"kar32").name = 0;
                    document.getElementById('t'+id+"kar41").name = 0;
                    document.getElementById('t'+id+"kar42").name = 0;
                    document.getElementById('t'+id+"2kar6").name = 0;
                    document.getElementById('t'+id+"2kar5").name = 0;
                    document.getElementById('t'+id+"2kar31").name = 0;
                    document.getElementById('t'+id+"2kar32").name = 0;
                    document.getElementById('t'+id+"2kar41").name = 0;
                    document.getElementById('t'+id+"2kar42").name = 0;
                    document.getElementById('t'+id+"kar6").hidden = true;
                    document.getElementById('t'+id+"kar5").hidden = true;
                    document.getElementById('t'+id+"kar31").hidden = true;
                    document.getElementById('t'+id+"kar32").hidden = true;
                    document.getElementById('t'+id+"kar41").hidden = true;
                    document.getElementById('t'+id+"kar42").hidden = true;
                    document.getElementById('t'+id+"2kar6").hidden = true;
                    document.getElementById('t'+id+"2kar5").hidden = true;
                    document.getElementById('t'+id+"2kar31").hidden = true;
                    document.getElementById('t'+id+"2kar32").hidden = true;
                    document.getElementById('t'+id+"2kar41").hidden = true;
                    document.getElementById('t'+id+"2kar42").hidden = true;
                    document.getElementById("kar"+id+"_6").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_5").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_31").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_32").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_41").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_42").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_6").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_5").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_31").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_32").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_41").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"2_42").style.backgroundColor = '#f0f0f0';
                    document.getElementById("kar"+id+"_6").hidden = true;
                    document.getElementById("kar"+id+"_5").hidden = true;
                    document.getElementById("kar"+id+"_31").hidden = true;
                    document.getElementById("kar"+id+"_32").hidden = true;
                    document.getElementById("kar"+id+"_41").hidden = true;
                    document.getElementById("kar"+id+"_42").hidden = true;
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
              document.getElementById("plomb"+id).name = 0;
              document.getElementById("plomb"+id).style.backgroundColor = '#f0f0f0';
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
           pi();
           bop();
           api();
           cpitn();
           kpu();
}
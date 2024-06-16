function create_ls_of_smth(smth){
    var ls = [];
    for (var i = 1; i <= 8; i++){
               if (document.getElementById("exist1"+String(i)).name == 0){
                    ls.push(smth+"1"+String(i)+"_1");
                    ls.push(smth+"1"+String(i)+"_2");
                    ls.push(smth+"1"+String(i)+"_3");
                    ls.push(smth+"1"+String(i)+"2_1");
                    ls.push(smth+"1"+String(i)+"2_2");
                    ls.push(smth+"1"+String(i)+"2_3");
               }
               if (document.getElementById("exist2"+String(i)).name == 0){
                    ls.push(smth+"2"+String(i)+"_1");
                    ls.push(smth+"2"+String(i)+"_2");
                    ls.push(smth+"2"+String(i)+"_3");
                    ls.push(smth+"2"+String(i)+"2_1");
                    ls.push(smth+"2"+String(i)+"2_2");
                    ls.push(smth+"2"+String(i)+"2_3");
               }
               if (document.getElementById("exist3"+String(i)).name == 0){
                    ls.push(smth+"3"+String(i)+"_1");
                    ls.push(smth+"3"+String(i)+"_2");
                    ls.push(smth+"3"+String(i)+"_3");
                    ls.push(smth+"3"+String(i)+"2_1");
                    ls.push(smth+"3"+String(i)+"2_2");
                    ls.push(smth+"3"+String(i)+"2_3");
               }
               if (document.getElementById("exist4"+String(i)).name == 0){
                    ls.push(smth+"4"+String(i)+"_1");
                    ls.push(smth+"4"+String(i)+"_2");
                    ls.push(smth+"4"+String(i)+"_3");
                    ls.push(smth+"4"+String(i)+"2_1");
                    ls.push(smth+"4"+String(i)+"2_2");
                    ls.push(smth+"4"+String(i)+"2_3");
               }
    }
    return ls;
}

function pi(){
    var ls = create_ls_of_smth("otl");
    var count = 0;
    for (var i =0; i< ls.length; i++){
        count+=Number(document.getElementById(ls[i]).name);
    }
    var el = document.getElementById("pi");
    el.textContent = (count/ls.length*100).toFixed(2) + "%";
}

function bop(){
    var ls = create_ls_of_smth("kr");
    var count = 0;
    for (var i =0; i< ls.length; i++){
        count+=Number(document.getElementById(ls[i]).name);
    }
    var el = document.getElementById("bop");
    el.textContent = (count/ls.length*100).toFixed(2)+"%";
}

function create_ls_for_api(){
    var ls = [];
    for (var i = 1; i <= 8; i++){
               if (document.getElementById("exist1"+String(i)).name == 0){
                    ls.push("otl1"+String(i)+"_1");
                    ls.push("otl1"+String(i)+"_3");
                    ls.push("otl1"+String(i)+"2_1");
                    ls.push("otl1"+String(i)+"2_3");
               }
               if (document.getElementById("exist2"+String(i)).name == 0){
                    ls.push("otl2"+String(i)+"_1");
                    ls.push("otl2"+String(i)+"_3");
                    ls.push("otl2"+String(i)+"2_1");
                    ls.push("otl2"+String(i)+"2_3");
               }
               if (document.getElementById("exist3"+String(i)).name == 0){
                    ls.push("otl3"+String(i)+"_1");
                    ls.push("otl3"+String(i)+"_3");
                    ls.push("otl3"+String(i)+"2_1");
                    ls.push("otl3"+String(i)+"2_3");
               }
               if (document.getElementById("exist4"+String(i)).name == 0){
                    ls.push("otl4"+String(i)+"_1");
                    ls.push("otl4"+String(i)+"_3");
                    ls.push("otl4"+String(i)+"2_1");
                    ls.push("otl4"+String(i)+"2_3");
               }
    }
    return ls;
}

function api(){
    var ls = create_ls_for_api();
    var count = 0;
    for (var i =0; i< ls.length; i++){
        count+=Number(document.getElementById(ls[i]).name);
    }
    var el = document.getElementById("api");
    el.textContent = (count/ls.length*100).toFixed(2)+"%";
}

function create_ls_of_smth_sec1(smth){
    var ls = [];
    if (document.getElementById("exist17").name == 0){
                    ls.push(smth+"17_1");
                    ls.push(smth+"17_2");
                    ls.push(smth+"17_3");
                    ls.push(smth+"172_1");
                    ls.push(smth+"172_2");
                    ls.push(smth+"172_3");
    }
    if (document.getElementById("exist16").name == 0){
                    ls.push(smth+"16_1");
                    ls.push(smth+"16_2");
                    ls.push(smth+"16_3");
                    ls.push(smth+"162_1");
                    ls.push(smth+"162_2");
                    ls.push(smth+"162_3");
    }
    return ls;
}

function create_ls_of_smth_sec2(smth){
    var ls = [];
    if (document.getElementById("exist11").name == 0){
                    ls.push(smth+"11_1");
                    ls.push(smth+"11_2");
                    ls.push(smth+"11_3");
                    ls.push(smth+"112_1");
                    ls.push(smth+"112_2");
                    ls.push(smth+"112_3");
    }
    return ls;
}

function create_ls_of_smth_sec3(smth){
    var ls = [];
    if (document.getElementById("exist27").name == 0){
                    ls.push(smth+"27_1");
                    ls.push(smth+"27_2");
                    ls.push(smth+"27_3");
                    ls.push(smth+"272_1");
                    ls.push(smth+"272_2");
                    ls.push(smth+"272_3");
    }
    if (document.getElementById("exist26").name == 0){
                    ls.push(smth+"26_1");
                    ls.push(smth+"26_2");
                    ls.push(smth+"26_3");
                    ls.push(smth+"262_1");
                    ls.push(smth+"262_2");
                    ls.push(smth+"262_3");
    }
    return ls;
}

function create_ls_of_smth_sec4(smth){
    var ls = [];
    if (document.getElementById("exist47").name == 0){
                    ls.push(smth+"47_1");
                    ls.push(smth+"47_2");
                    ls.push(smth+"47_3");
                    ls.push(smth+"472_1");
                    ls.push(smth+"472_2");
                    ls.push(smth+"472_3");
    }
    if (document.getElementById("exist46").name == 0){
                    ls.push(smth+"46_1");
                    ls.push(smth+"46_2");
                    ls.push(smth+"46_3");
                    ls.push(smth+"462_1");
                    ls.push(smth+"462_2");
                    ls.push(smth+"462_3");
    }
    return ls;
}

function create_ls_of_smth_sec5(smth){
    var ls = [];
    if (document.getElementById("exist31").name == 0){
                    ls.push(smth+"31_1");
                    ls.push(smth+"31_2");
                    ls.push(smth+"31_3");
                    ls.push(smth+"312_1");
                    ls.push(smth+"312_2");
                    ls.push(smth+"312_3");
    }
    return ls;
}

function create_ls_of_smth_sec6(smth){
    var ls = [];
    if (document.getElementById("exist37").name == 0){
                    ls.push(smth+"37_1");
                    ls.push(smth+"37_2");
                    ls.push(smth+"37_3");
                    ls.push(smth+"372_1");
                    ls.push(smth+"372_2");
                    ls.push(smth+"372_3");
    }
    if (document.getElementById("exist36").name == 0){
                    ls.push(smth+"36_1");
                    ls.push(smth+"36_2");
                    ls.push(smth+"36_3");
                    ls.push(smth+"362_1");
                    ls.push(smth+"362_2");
                    ls.push(smth+"362_3");
    }
    return ls;
}

function cpitn(){
    var ls_kr_sec1 = create_ls_of_smth_sec1("kr");
    var ls_kr_sec2 = create_ls_of_smth_sec2("kr");
    var ls_kr_sec3 = create_ls_of_smth_sec3("kr");
    var ls_kr_sec4 = create_ls_of_smth_sec4("kr");
    var ls_kr_sec5 = create_ls_of_smth_sec5("kr");
    var ls_kr_sec6 = create_ls_of_smth_sec6("kr");

    var ls_kam_sec1 = create_ls_of_smth_sec1("kam");
    var ls_kam_sec2 = create_ls_of_smth_sec2("kam");
    var ls_kam_sec3 = create_ls_of_smth_sec3("kam");
    var ls_kam_sec4 = create_ls_of_smth_sec4("kam");
    var ls_kam_sec5 = create_ls_of_smth_sec5("kam");
    var ls_kam_sec6 = create_ls_of_smth_sec6("kam");

    var ls_zond_sec1 = create_ls_of_smth_sec1("zond");
    var ls_zond_sec2 = create_ls_of_smth_sec2("zond");
    var ls_zond_sec3 = create_ls_of_smth_sec3("zond");
    var ls_zond_sec4 = create_ls_of_smth_sec4("zond");
    var ls_zond_sec5 = create_ls_of_smth_sec5("zond");
    var ls_zond_sec6 = create_ls_of_smth_sec6("zond");

    var kam_sec1 = 0;
    var kam_sec2 = 0;
    var kam_sec3 = 0;
    var kam_sec4 = 0;
    var kam_sec5 = 0;
    var kam_sec6 = 0;

    var kr_sec1 = 0;
    var kr_sec2 = 0;
    var kr_sec3 = 0;
    var kr_sec4 = 0;
    var kr_sec5 = 0;
    var kr_sec6 = 0;

    var zond_sec1 = 0;
    var zond_sec2 = 0;
    var zond_sec3 = 0;
    var zond_sec4 = 0;
    var zond_sec5 = 0;
    var zond_sec6 = 0;

    for (var i =0; i< ls_kr_sec1.length; i++){
        kr_sec1+=Number(document.getElementById(ls_kr_sec1[i]).name);
    }
    for (var i =0; i< ls_kr_sec2.length; i++){
        kr_sec2+=Number(document.getElementById(ls_kr_sec2[i]).name);
    }
    for (var i =0; i< ls_kr_sec3.length; i++){
        kr_sec3+=Number(document.getElementById(ls_kr_sec3[i]).name);
    }
    for (var i =0; i< ls_kr_sec4.length; i++){
        kr_sec4+=Number(document.getElementById(ls_kr_sec4[i]).name);
    }
    for (var i =0; i< ls_kr_sec5.length; i++){
        kr_sec5+=Number(document.getElementById(ls_kr_sec5[i]).name);
    }
    for (var i =0; i< ls_kr_sec6.length; i++){
        kr_sec6+=Number(document.getElementById(ls_kr_sec6[i]).name);
    }

    for (var i =0; i< ls_kam_sec1.length; i++){
        kam_sec1+=Number(document.getElementById(ls_kam_sec1[i]).name);
    }
    for (var i =0; i< ls_kam_sec2.length; i++){
        kam_sec2+=Number(document.getElementById(ls_kam_sec2[i]).name);
    }
    for (var i =0; i< ls_kam_sec3.length; i++){
        kam_sec3+=Number(document.getElementById(ls_kam_sec3[i]).name);
    }
    for (var i =0; i< ls_kam_sec4.length; i++){
        kam_sec4+=Number(document.getElementById(ls_kam_sec4[i]).name);
    }
    for (var i =0; i< ls_kam_sec5.length; i++){
        kam_sec5+=Number(document.getElementById(ls_kam_sec5[i]).name);
    }
    for (var i =0; i< ls_kam_sec6.length; i++){
        kam_sec6+=Number(document.getElementById(ls_kam_sec6[i]).name);
    }

    for (var i =0; i< ls_zond_sec1.length; i++){
        zond_sec1=Math.max(zond_sec1, Number(document.getElementById(ls_zond_sec1[i]).value));
    }
    for (var i =0; i< ls_zond_sec2.length; i++){
        zond_sec2=Math.max(zond_sec2,Number(document.getElementById(ls_zond_sec2[i]).value));
    }
    for (var i =0; i< ls_zond_sec3.length; i++){
        zond_sec3=Math.max(zond_sec3,Number(document.getElementById(ls_zond_sec3[i]).value));
    }
    for (var i =0; i< ls_zond_sec4.length; i++){
        zond_sec4=Math.max(zond_sec4,Number(document.getElementById(ls_zond_sec4[i]).value));
    }
    for (var i =0; i< ls_zond_sec5.length; i++){
        zond_sec5=Math.max(zond_sec5,Number(document.getElementById(ls_zond_sec5[i]).value));
    }
    for (var i =0; i< ls_zond_sec6.length; i++){
        zond_sec6=Math.max(zond_sec6,Number(document.getElementById(ls_zond_sec6[i]).value));
    }

    var el1 = document.getElementById("cpitn_1");
    var el2 = document.getElementById("cpitn_2");
    var el3 = document.getElementById("cpitn_3");
    var el4 = document.getElementById("cpitn_4");
    var el5 = document.getElementById("cpitn_5");
    var el6 = document.getElementById("cpitn_6");

   if (zond_sec1 >= 6){
        el1.textContent = "4";
   }
   else if (zond_sec1 >= 4){
        el1.textContent = "3";
   }
   else if (kam_sec1 > 0){
        el1.textContent = "2";
   }
   else if (kr_sec1 > 0){
        el1.textContent = "1";
   }

   if (zond_sec2 >= 6){
        el2.textContent = "4";
   }
   else if (zond_sec2 >= 4){
        el2.textContent = "3";
   }
   else if (kam_sec2 > 0){
        el2.textContent = "2";
   }
   else if (kr_sec2 > 0){
        el2.textContent = "1";
   }

   if (zond_sec3 >= 6){
        el3.textContent = "4";
   }
   else if (zond_sec3 >= 4){
        el3.textContent = "3";
   }
   else if (kam_sec3 > 0){
        el3.textContent = "2";
   }
   else if (kr_sec3 > 0){
        el3.textContent = "1";
   }

   if (zond_sec4 >= 6){
        el4.textContent = "4";
   }
   else if (zond_sec4 >= 4){
        el4.textContent = "3";
   }
   else if (kam_sec4 > 0){
        el4.textContent = "2";
   }
   else if (kr_sec4 > 0){
        el4.textContent = "1";
   }

   if (zond_sec5 >= 6){
        el5.textContent = "4";
   }
   else if (zond_sec5 >= 4){
        el5.textContent = "3";
   }
   else if (kam_sec5 > 0){
        el5.textContent = "2";
   }
   else if (kr_sec5 > 0){
        el5.textContent = "1";
   }

   if (zond_sec6 >= 6){
        el6.textContent = "4";
   }
   else if (zond_sec6 >= 4){
        el6.textContent = "3";
   }
   else if (kam_sec6 > 0){
        el6.textContent = "2";
   }
   else if (kr_sec6 > 0){
        el6.textContent = "1";
   }

}

function kpu(){
    var kpu = 0;
    for (var i = 1; i< 9; i++){
        for (var j = 1; j <= 4; j++){
            var n = "t"+String(j)+String(i)+"kar";
            var n2 = "t"+String(j)+String(i)+"2kar";
            var id = String(j)+String(i);
            if (document.getElementById("plomb"+id).name == 1){
                kpu+=1;
            }
            if (document.getElementById("exist"+id).name == 1){
                kpu+=1;
            }
            if (i >= 4){
                  if (document.getElementById(n+"1").name == 1 || document.getElementById(n2+"1").name == 1 ||
                  document.getElementById(n+"5").name == 1 || document.getElementById(n2+"5").name == 1 ||
                  document.getElementById(n+"21").name == 1 || document.getElementById(n2+"21").name == 1 ||
                  document.getElementById(n+"22").name == 1 || document.getElementById(n2+"22").name == 1 ||
                  document.getElementById(n+"61").name == 1 || document.getElementById(n2+"61").name == 1 ||
                  document.getElementById(n+"62").name == 1 || document.getElementById(n2+"62").name == 1){
                        kpu+=1;
                  }
            }
            else{
                  if (document.getElementById(n+"6").name == 1 || document.getElementById(n2+"6").name == 1 ||
                  document.getElementById(n+"5").name == 1 || document.getElementById(n2+"5").name == 1 ||
                  document.getElementById(n+"31").name == 1 || document.getElementById(n2+"31").name == 1 ||
                  document.getElementById(n+"32").name == 1 || document.getElementById(n2+"32").name == 1 ||
                  document.getElementById(n+"41").name == 1 || document.getElementById(n2+"41").name == 1 ||
                  document.getElementById(n+"42").name == 1 || document.getElementById(n2+"42").name == 1){
                        kpu+=1;
                  }
            }
        }
    }
    document.getElementById("kpu").textContent = kpu;
}


pi();
bop();
api();
cpitn();
kpu();
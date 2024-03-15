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
    for (var i = 4; i <= 8; i++){
               if (document.getElementById("exist1"+String(i)).name == 0){
                    ls.push(smth+"1"+String(i)+"_1");
                    ls.push(smth+"1"+String(i)+"_2");
                    ls.push(smth+"1"+String(i)+"_3");
                    ls.push(smth+"1"+String(i)+"2_1");
                    ls.push(smth+"1"+String(i)+"2_2");
                    ls.push(smth+"1"+String(i)+"2_3");
               }
    }
    return ls;
}

function create_ls_of_smth_sec2(smth){
    var ls = [];
    for (var i = 1; i <= 3; i++){
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
    }
    return ls;
}

function create_ls_of_smth_sec3(smth){
    var ls = [];
    for (var i = 4; i <= 8; i++){
               if (document.getElementById("exist2"+String(i)).name == 0){
                    ls.push(smth+"2"+String(i)+"_1");
                    ls.push(smth+"2"+String(i)+"_2");
                    ls.push(smth+"2"+String(i)+"_3");
                    ls.push(smth+"2"+String(i)+"2_1");
                    ls.push(smth+"2"+String(i)+"2_2");
                    ls.push(smth+"2"+String(i)+"2_3");
               }
    }
    return ls;
}

function create_ls_of_smth_sec4(smth){
    var ls = [];
    for (var i = 4; i <= 8; i++){
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

function create_ls_of_smth_sec5(smth){
    var ls = [];
    for (var i = 1; i <= 3; i++){
               if (document.getElementById("exist4"+String(i)).name == 0){
                    ls.push(smth+"4"+String(i)+"_1");
                    ls.push(smth+"4"+String(i)+"_2");
                    ls.push(smth+"4"+String(i)+"_3");
                    ls.push(smth+"4"+String(i)+"2_1");
                    ls.push(smth+"4"+String(i)+"2_2");
                    ls.push(smth+"4"+String(i)+"2_3");
               }
               if (document.getElementById("exist3"+String(i)).name == 0){
                    ls.push(smth+"3"+String(i)+"_1");
                    ls.push(smth+"3"+String(i)+"_2");
                    ls.push(smth+"3"+String(i)+"_3");
                    ls.push(smth+"3"+String(i)+"2_1");
                    ls.push(smth+"3"+String(i)+"2_2");
                    ls.push(smth+"3"+String(i)+"2_3");
               }
    }
    return ls;
}

function create_ls_of_smth_sec6(smth){
    var ls = [];
    for (var i = 4; i <= 8; i++){
               if (document.getElementById("exist3"+String(i)).name == 0){
                    ls.push(smth+"3"+String(i)+"_1");
                    ls.push(smth+"3"+String(i)+"_2");
                    ls.push(smth+"3"+String(i)+"_3");
                    ls.push(smth+"3"+String(i)+"2_1");
                    ls.push(smth+"3"+String(i)+"2_2");
                    ls.push(smth+"3"+String(i)+"2_3");
               }
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
    var el1 = document.getElementById("cpitn_1");

   if (kam_sec1 > 0){
        el1.textContent = "2";
   }
   else if (kr_sec1 > 0){
        el1.textContent = "1";
   }

}



//pi кол во зубов с налетом на колво зубов
// bop кровоточивость при зонд
//cpitn табличка по секстантам 5 6 5
//классификация миллера 1 класс до 4мм 2 класс больше 4 3 класс 4 десневой красн край по бокам    первые 3 класса для вестибулярно 4й орально
//api межзубной налет в крайних точках

pi();
bop();
api();
cpitn();
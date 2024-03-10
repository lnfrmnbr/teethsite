function num_of_teeth_total(){
    var count = 0;
    for (var i = 1; i <= 8; i++){
               if (document.getElementById("exist1"+String(i)).name == 0){
                    count+=1;
               }
    }
    for (var i = 1; i <= 8; i++){
               if (document.getElementById("exist2"+String(i)).name == 0){
                    count+=1;
               }
    }
    return count;
}

function num_of_teeth_isn(){
    var count = 0;
    if (document.getElementById("exist16" == 0){
                    count+=1;
    }
    if (document.getElementById("exist11" == 0){
                    count+=1;
    }
    if (document.getElementById("exist26" == 0){
                    count+=1;
    }
    if (document.getElementById("exist31" == 0){
                    count+=1;
    }
    if (document.getElementById("exist36" == 0){
                    count+=1;
    }
    if (document.getElementById("exist46" == 0){
                    count+=1;
    }
    return count;
}

function sum_of_otl(){
    var count = 0;
    for (var i = 1; i <= 8; i++){
               count+=document.getElementById("otl1"+String(i)+"_1").name;
               count+=document.getElementById("otl1"+String(i)+"_2").name;
               count+=document.getElementById("otl1"+String(i)+"_3").name;
    }
    for (var i = 1; i <= 8; i++){
               count+=document.getElementById("otl1"+String(i)+"_1").name;
               count+=document.getElementById("otl1"+String(i)+"_2").name;
               count+=document.getElementById("otl1"+String(i)+"_3").name;
    }
}

function ohis() {
    var el = document.getElementById("ohis");
    el.textContent = num_of_teeth();
}

ohis();
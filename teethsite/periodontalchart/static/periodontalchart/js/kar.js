function kar(id_,par_) {
    var par = String(par_);
    var id = String(id_);
    if (Number(id[1]) <= 3){
        if (Number(par[0]) >= 5){
            var img56 = document.getElementById("t"+id+"kar"+par);
            if (img56.name == 0){
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = 'DarkGray';
                img56.hidden =false;
                img56.name = 1;
            }
            else{
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = '#f0f0f0';
                img56.hidden = true;
                img56.name = 0;
            }
        }
        else{
            var img34 = document.getElementById("t"+id+"kar"+par);
            if (img34.name == 0){
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = 'DarkGray';
                img34.hidden =false;
                img34.name = 1;
            }
            else{
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = '#f0f0f0';
                img34.hidden = true;
                img34.name = 0;
            }
        }
    }
    else{
        if (Number(par[0]) == 5 || Number(par[0]) == 1){
            var img15 = document.getElementById("t"+id+"kar"+par);
            if (img15.name == 0){
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = 'DarkGray';
                img15.hidden =false;
                img15.name = 1;
            }
            else{
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = '#f0f0f0';
                img15.hidden = true;
                img15.name = 0;
            }
        }
        else{
            var img26 = document.getElementById("t"+id+"kar"+par);
            if (img26.name == 0){
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = 'DarkGray';
                img26.hidden =false;
                img26.name = 1;
            }
            else{
                document.getElementById("kar"+id+"_"+par).style.backgroundColor = '#f0f0f0';
                img26.hidden = true;
                img26.name = 0;
            }
        }
    }
    kpu();
}
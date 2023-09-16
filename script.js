function tampilkanNilaiButton (value){
    document.getElementById("display").value += value;
}


function equal (value){
    //cara saya sendiri
    /*document.getElementById("display").value;
    let e = document.getElementById("display").value;
    let l = eval(e);
    document.getElementById("display").value = l;*/
    //cara lebih mudah
    /*document.getElementById("display").value = eval
        (document.getElementById("display").value
    );*/
    //cara mudah
    let hasilPerhitungan = eval(document.getElementById("display").value);
    document.getElementById("display").value = hasilPerhitungan;
}

function hapus (){
    document.getElementById("display").value = "";
}



function cekbb(nama, bb){
    this.nama = nama;
    this.bb = bb;
    this.statusbb = function(){
        if(bb > 55){
            console.log("ideal")
        }else{
            console.log("Tidak ideal")
        }
    };
}


var romi = new cekbb("Romi", 56);
console.log(romi.statusbb());
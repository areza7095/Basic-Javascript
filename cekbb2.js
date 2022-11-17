function cekbb(nama, bb){
    this.nama = nama;
    this.bb = bb;
    this.cekstatus = function(){
        if(bb >= 55 && bb <= 70){
        alert("Kamu punya berat badan ideal!")
        console.log("Ideal")
        }else if(bb >= 70 && bb <= 120){
        alert("Kamu perlu sedikit olahraga!")
        console.log("Olahraga!")
        }else if(bb >= 120){
        alert("Kamu harus segera ke Dokter!")
        console.log("Ke Dokter!")
        }else{
        alert("Kamu kurang makan!")
        console.log("Mangan!")
        }
    }
}

var romi = new cekbb("Romi", 56)
console.log(romi.cekstatus())
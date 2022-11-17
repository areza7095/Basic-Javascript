function person(name, age, height, favColor){
    this.name = name;
    this.age = age;
    this.height = height;
    this.favColor = favColor;
    this.changeHeight = function(height){
        this.height = height;
    }
    this.yearOfBirth = bornYear;
}

function bornYear(){
    return 2022-this.age
}

var romi = new person("Romi", 17, "170cm", "Orange")
console.log(romi); //height 170cm

romi.changeHeight("169cm");
console.log(romi); //height 169cm

console.log(romi.yearOfBirth());
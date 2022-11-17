function person(name, age, height, favColor){
    this.name = name;
    this.age = age;
    this.height = height;
    this.favColor = favColor;
}

//create an object using a constructor
var Romi = new person("Romi", "17 years old", "169cm", "Orange");

console.log(Romi)
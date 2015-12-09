//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly
// in the Constructor.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

var cleber = new Person("Cleber", "27");
var bret = new Person("Bret", "29");
var tyson = new Person("Tyson", "24");

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(name) {
  alert(this.name);
};

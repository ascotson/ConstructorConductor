//Just like you can add methods to your own constructor, you can also add methods and properties to built in
//classes in JavaScript like Arrays and Objects.

//Add a reverse method to the constructor function named String so that every instance of String can call
// reverse and reverse itself.

String.prototype.reverse = function() {
  var string = "";
  for (var i = this.length-1; i >= 0; i--) {
    string += this[i];
  }
  return string;
};

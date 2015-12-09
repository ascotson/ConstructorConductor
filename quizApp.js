//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

function QuizUser(name, email, password, totalScore) {
  return {name: name, email: email, password: password, totalScore: totalScore};
}

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

function Question(title, answersArray, rightAnswer, difficulty) {
  return {title: title, answersArray: answersArray, rightAnswer: rightAnswer, difficulty: difficulty};
}

//Create a quizUsers Array which is going to hold all of our users.

var quizUsers = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

quizUsers.push(new QuizUser("John", "john@john.net", "99"));
quizUsers.push(new QuizUser("Jane", "jane@jane.net", "88"));
quizUsers.push(new QuizUser("Josh", "josh@josh.net", "100"));

//Create a questions Array which is going to hold all of our questions

var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var var1 = new Question("T/F: Inheritance is achieved in JavaScript through Prototypes?", ["T", "F"], "T", "medium");
var var2 = new Question("T/F: JavaScript is just a scripting version of Java", ["T", "F"], "F", "easy");
var var3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ["T", "F"], "F", "medium");

//Now push all of your instances of Question into the questions Array

questions.push(var1, var2, var3);

// console.log('My users Array and my questions arrray are ...');

//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

for (var i = 0; i < quizUsers.length; i++) {
  var quizUserResult = console.log(quizUsers[i]);
}

for (var i = 0; i < questions.length; i++) {
  var questionsResult = console.log(questions[i]);
}

console.log("My users Array and my questions array are ..." + quizUserResult + questionsResult);

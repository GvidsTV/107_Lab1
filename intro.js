
/*
//CMDER
console.log("Hello from Node");

var name ="G Butler";
var age =34;
var average = 12.34;
var found = false;

let another = "jazzy";

function test(){
    var a = 1;
    console.log("This is a functionn");

    for(let i=0; i< 10; i++){
        var b = 2;
        let y =2;
        console.log(i);
    }

    // lot of code here
}

function sayHello(name){
    console.log("Hi there, " + name);
}

test(); // execute function
test();

sayHello('Buddy');
sayHello(name);

*/

// print numbers from 10 to 10, except for 3 and 7

var evens = []; //put only even numbers

var mathLib = require('./myMath');

function exc1(){
    for(let i= 1; i <= 10; i++){
        if(i !=3 && i !=7) {
        console.log(i);
        }
    }
}


// this function will put n even numbers inside the array
function exc2(howMany){

    for(let i =0; i <(howMany *2); i++){
        if(mathLib.isEven(i)){
            console.log("even:" + i);
            evens.push(i);
        }

    }

   /*  for(let i= 0; found < howMany; i += 2){
        found +=1;
    } */

}

exc1();
exc2(10);
console.log(mathLib.sum(21,21));

var res = mathLib.divide(12,8);

var two = mathLib.divide(42,0);
console.log(two);
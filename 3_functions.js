/****FUNCTIONS(objects)****/

//function declaration
function greet(){
    console.log("Hello there");
}

//function expression
const speak = function(){
console.log("Have a nice day!")
}; //semicolon must here in function expression
greet();
speak();

//function declaration, javascript does hoisting in which it hoists the functon to the top of the file, i.e we could declare a function at the bottom and still call the function at top and it would still run.Avoid doing this as it disturbs the logical flow of the code. example:
/*greet(); //calling before declaring(hoisting)
function greet(){
    console.log("Hello there");
}*/
//hoisting does NOT work for function expression

const speak1= function(name ="avantika", time="morning"){   //avantika and morning are default values which will get assigned when we forget to assign any value to the attributes of this function(i.e,name and time in this example)
    console.log(`Good ${time}, ${name}!`);
}
speak1('avanti','day');

const calcArea= function(radius){
let area = 3.14 * radius**2;
// console.log(area); //here the value is stored locally not in the memory so we cant use it later on to avoid that we use:
return area; //now the value will get stored
}
const a =calcArea(5);
console.log(a);
const calcVol = function(a){  //we are using the value we got from the previous function, in this function
   //enter formulas here
}
calcVol(a);

/***arrow functions(IMPORTANT)***/

const calcArea1 = (radius1) =>{
    return 3.14 * radius1**2;
};
/* const calcArea1 = radius1 =>{
     return 3.14 * radius1**2;
 }; */ //removing paranthesis is only valid in this case, i.e. when there is only one parameter
/*const calcArea1 = radius1 =>3.14 * radius1**2;*/ //this is also valid when we want to return a single value(here radius is returned) //shorter and easier syntax to write 

const a1 = calcArea(15);
console.log("The area is : ", a1);

/***METHOD***/
//the way they differ is the way they are invoked and where they are defined 
// invoked by using dot(.)
const name= 'avantika';
console.log(name.toUpperCase());

//callback and foreach
//callback functions are normal functions that are passed into other functions as arguments
//foreach method iterates through an array 
const myFunc=(callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    //do something
    console.log(value);
});

let people =['luigi','chun-li','ryu','mario'];

let logPerson =(person,index)=>{
    console.log(`${index}, Hello ${person}!`);
};
people.forEach(logPerson);

people.forEach(function(person,index){
    console.log(index, person);
});
people.forEach(person =>console.log(person));














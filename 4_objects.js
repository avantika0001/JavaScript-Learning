/***Objects in real life: have properties and can do things
 eg: user object properties: user name, email, password methods(things to do):login logout
 eg: blog object properties:title content author ;methods: publish, unpublish, delete***/

//object literals
//uncomment this
/*let user = {
name: 'avantika',
age:20,
email:'avantika@gmail.com',
location:'pune',
blogs:['why maggi rules','10 things to learn']
};*/
// console.log(user);
// console.log(user.name);

//overwritting a property
// user.age=18;
// console.log(user.age);
//another way to access property
// console.log(user['email']);
//another way to update property
// user['name']='anushka';
// console.log(user['name']);

//[] is useful when we are passing a variable in ' '
// const key = 'location';
// console.log(user[key]);
//above same as console.log(user['locaction]);
//but we can't write user.key because then js will try to find a key-value pair named 'key' in the user object

// console.log(typeof user)

/***ADDING METHODS***/

//this will also be a key-value pair in the form :- 'key':function()

//an array of objects
/*const blogs =[
    {title:'why maggi rules',likes:30},{title:'10 things to learn',likes:50}
];
console.log(blogs);*/

let user = {
    //key:value
    name: 'avantika',
    age:20,
    email:'avantika@gmail.com',
    location:'pune',
    blogs:[
        {title:'why maggi rules',likes:30},{title:'10 things to learn',likes:50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // we want to access the blogs array above
        // 'this' here refers to the user object
        //console.log(this.blogs);
        // we can't use an arrow function here instead of the regular function because if we use arrow function then 'this' keyword will refer to the window object instead of blogs i.e we cant write logBlogs: ()=>{
        //when we use normal function i.e function(){} then javascript refers to the objecct that hte method was used on
        //google arrow function and this keyword
        console.log('This user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    }
    };

user.login();
// can try to relate this to example: name.toUpperCase();
user.logBlogs();


//this keyword
/*logBlogs: function(){
    console.log(blogs);
}*///this wont work
//this keyword is a context object and it represents the context in which the current code is executing
//this keyword's value will be different depending on when and where we are using it.

console.log(this);
// using this in the root of the document, here 'this' is in global context, and the global object object in javascript is the window object


/****PRE MADE JAVASCRIPT****/
/****MATH OBJECT****/
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area)); //takes away decimal

//random numbers
const random=Math.random(); //decimal between 0 and 1
console.log(random);
console.log(Math.round(random)); //we get either 0 or 1
console.log(Math.round(random*100)); //we get random numbers from 0 to 100

/**** PRIMITIVE AND REFERENCE TYPES
 * difference is how they are stored and used in memory
 
 * PRIMITIVE TYPES
The value here stored in STACK.quicker.
  -numbers
  -strings
  -Booleans
  -null
  -undefined
  -symbols
  
 * REFERENCE TYPES
  The value here stored in HEAP.slower.
  -all types of objects 
  -object literals
  -arrays
  -functions
  -dates
  -all other objects


  EG:if we  make an array and store it in a const names then the const will hava a pointer names in the stack which points to the array in the heap 
  ****/
 /***const scoreOne=50;
 const scoreTwo=scoreOne;

 STACK:BEFORE:
 +-----------+
 |ScoreTwo:50|
 |-----------|
 |scoreOne:50|
 +-----------+


 scoreOne=100;

 STACK:AFTER:
 +------------+
 |ScoreTwo:50 |
 |------------|
 |scoreOne:100|
 +------------+
 
 const userOne ={name:'avanti',score:100};
 const userTwo = userOne;
 const userOne = {name:'avanti',score:50} //new obj updated in heap
 ***/
//stack
let scoreOne=50;
let scoreTwo=scoreOne;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne=100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

//heap
const userOne ={name:'avanti',age:20};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age=22;
console.log(userOne,userTwo);


//didnt understood arrow function and this keyword part




// alert("HELLO WORLD");
//RUNS FROM TOP TO BOTTOM
console.log("HELLO WORLD");
console.log(2);
let name ="Avantika";
console.log(name);
name= "Anushka";
console.log(name);
//what if we want a variable and we don't want the value of that variable to change, so we use "const"
const name1 ="Avantika1";
console.log(name1);
// name1="anushka1";
// console.log(name1); //CANT OVERWRITE IT'S VALUE
//older way to create variables VAR ( in case of var it ignores the block scope)
var name2 ="Avantika2";
console.log(name2);
name2 ="Anushka2";
console.log(name2);

/**DATA TYPES IN JS
numbers, string, boolean, Null(given explicitely by user(empty value)), undefined(automatically given to variables with no set value(also an empty value)), Object(arrays , dates,literals) , Symbol(used with objects)
**/
//JS LOOSELY TYPED LANGUAGE as opposed to python(strongly typed)

/*****  STRINGS  *****/
//strings
let firstName = "Avantika";
let lastName = "Pandey";

//string concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
//don't alter the original value of the string
console.log(fullName.toUpperCase());
let result1 = fullName.toLowerCase();
console.log(result1);
console.log(fullName.indexOf("A"));

let email ="avantika@gmail.co.in";
let result = email.lastIndexOf("n");
console.log(result);

console.log(fullName.slice(2,5));

console.log(fullName.substr(2,5));

console.log(fullName.replace('a','w')); //only the first occurence

//x++;
//x--;
//x+=2; //add 2 to current value of x
//NaN -not a number eg: 5*"hello";

//template strings (with the help of this we can concatenate strings without the use of " "and +,thus preventing the code from getting messy)

const title = "Lala Land";
const author ="Avantika";
const likes = 10;
//concatenate way
let sentence = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
console.log(sentence);
//template way
sentence = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(sentence);
//creating HTML template
let html = `<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes.</span>`;
console.log(html);

/*****ARRAYS*****/
let random =["abc","pqr",5,6];
let friends = ['monica','ross','rachel','chandler','joey','phoebe'];
// friends[2]='rashmika';  //overwriting a value in array
console.log(friends[2]);
console.log(friends.length);

//ARRAY METHODS
let res_arr = friends.join(",");
res_arr = friends.indexOf("monica");
res_arr =friends.concat(['pam','jim']); 
/*res_arr =friends.push('jemma'); //this method alters the original array
res_arr = friends.pop(); this method also alters the original array
console.log(friends); */
console.log(res_arr);

/****NULL AND UNDEFINED****/
let num_1; //since no value given it automatically becomes undefined
let num_2 = null; //this is intentional, we explicitely assign null value to a variable //null+3=3
console.log(num_1,num_1 +3,`the value of the number is ${num_1}`);  //prints: undefined NaN 'the value of the number is undefined'
console.log(num_2,num_2 +3,`the value of the number is ${num_2}`);  //prints :null 3 'the value of the number is null'

/****BOOLEAN & COMPARISONS****/

//METHODS can return booleans
let bool_test = 'anushka@yahoo.co.in';
let bool_names = ['anushka','avantika','jasmine'];

let res_bool= bool_test.includes('@');
res_bool = bool_names.includes('lala');
console.log(res_bool);

//comparison operator 
let age = 18;
/**console.log(age==18);
console.log(age>=18);
console.log(age<=18);
console.log(age!=18);**/

//loose comparison(different types(eg: string, number) can still be equal) (that's why not much reliable) (only value is checked)
//implicit type conversion (done by js in background)
console.log(age==18);
console.log(age=='18');  //true
console.log(age!=18);
console.log(age!='18');

//strict comparison(different types cannot be equal) (use this method) (value and type is checked)
console.log(age===18);
console.log(age==='18'); //false
console.log(age!==18);
console.log(age!=='18');


/**let comp_name = "avantika";
console.log(comp_name=='avantika');  //loose comparison, i.e datatype is not taken into consideration while comparing
console.log(comp_name=='Avantika');
console.log(comp_name<'crystal');
console.log(comp_name>'Avantka');
console.log(comp_name>'Crystal');**/

/****TYPE CONVERSION****/
//explicit type conversion(done by user)
let score ="100";
score = Number(score);
console.log(score +1);
console.log(typeof score);

let message = Number('hello');
console.log(message);  //NaN

let bool_type = Boolean(100);
// let bool_type = Boolean(0);
// let bool_type = Boolean('0');
// let bool_type = Boolean('');
console.log(bool_type, typeof bool_type);





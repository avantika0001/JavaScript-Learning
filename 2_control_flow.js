/****FOR LOOP****/

/**for(i=0;i<5;i++){
console.log("in loop: ",i);
};
console.log("loop finished");

const friends =['monica','rachel','phoebe','ross','chandler','joey'];
for(let i=0;i<friends.length;i++){
    console.log(i,friends[i]);
}**/

/****WHILE LOOP****/
const got = ['jon', 'cercei', 'tyrion', 'duke', 'daenerys', 'targeryn'];
let i = 0;
while (i < got.length) {
    console.log(i, got[i]);
    i++;
}

/****DO WHILE LOOP****/
//codeblock runs atleast once.
let j = 0;
do {
    console.log(got[j]);
    j++;
} while (j < got.length);

/****IF STATEMENTS****/
const password = 'p@ss';
if (password.length >= 12 && password.includes('@')) {
    console.log("special case!!");
} else if (password.length >= 8 || password.includes('@')) {
    console.log("Password is strong enough");
} else {
    console.log("Your password is weak, a strong password must be more than 8 characters long!");
};

//logical operators => AND &&  OR || 

const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue; //this iteration will be skipped, so any code below wont be carried out for this iteration
    }

    console.log("Your score: ", scores[i]);

    if (scores[i] === 100) {
        console.log("Congrats! you've reached the top score!")
        break; //the iteration will stop here and the remaining iterations will be stopped
    }
}

/****SWITCH STATEMENTS****/

const grade = 'D';
//switch case checks strict equality ===
switch (grade) {
    case 'A':
        console.log("You've got an A!");
        break;
    case 'B':
        console.log("You've got a B!");
        break;
    case 'C':
        console.log("You've got a C!");
        break;
    case 'D':
        console.log("You've got a D!");
        break;
    case 'E':
        console.log("You've got an E!");
        break;
    default:
        console.log("Not a valid grade");
}

//variables and block scope
let age1 = 30; //(scope: global)

if (true) {
    /*age1= 500; //will get updated everywhere, we are overwriting
    console.log("Inside the 1st code block: ", age1);*/
    let age1 = 500; //redefining the variable age1 (scope: local)
    console.log("Inside the 1st code block: ", age1);
    if (true) {
        let age1=10000;
        console.log("Inside the 2nd code block: ", age1);  //immediate local scope varaible is preffered 
    }
}
console.log("Outside the code block: ", age1);
//here we get the advantage of using the LET and CONST instead of VAR because in case of var it ignores the block scope


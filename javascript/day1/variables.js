console.log("var, let, const")

/*

    1. var is globally scoped while let and const are block scoped
    2. var can be updated and re-declared within its scope
    3. let can be upated but not re-declared
    4. const can neither be updated nor be re-declared
    5. var variables are initialized with undefined whereas let and const variables are not initialized
    6. const must be initialized during declaration unlike let and var

 */


var a = 45; //number
var b = 'Sneh'; //string
var c = null; //object
var d = undefined; //undefined

console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));
console.log(typeof (d));

// var

{
    var a = 90
    console.log(a);
    
}
console.log(a);


// let

let aa = 30
{
    let aa = 45
    console.log(aa);

}
//let aa = 18 // Cannot redeclare block-scoped variable 'aa'
aa = 18
console.log(aa);


//  const

const name = 'sneh'

// name = 'patel'  //Assignment to constant variable.

{
    name = 'patel'
    console.log(name);
    
}

console.log(name);









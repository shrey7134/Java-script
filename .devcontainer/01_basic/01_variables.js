const accountId=123
//accountId=1  //not allowed in js
console.log(accountId)

var accountEmail="shrey@gmail.com"   //prefer not to use 
/*because of issue in block scope and functional scope
    we dont use var to declare variable because it have scope problem
*/

let accountPassword="123456878"
accountCity="prayagraj"

let accountState               //if we dont pass value while declaring variable with let then it state is undefined

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  

//console.table() is a method to print variables in table way

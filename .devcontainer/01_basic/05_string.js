const name="shrey";
const repoCount=50;
//console.log(name+repoCount+ "wowwwwwwww");        //not s good way to concatinate

console.log(`my name is ${name} and my repoCounts is ${repoCount}`);
//*************************8   string functions*********************************** 
const str=new String('hitesh');
console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase());

console.log(str.charAt(2));

console.log(str.indexOf('t'));

console.log(str.substring(0,3));   //not evaluating negative value
console.log(str.substring(-6,3));

console.log(str.slice(0,4));       // evaluating negative values

const str1=new String("my name is shrey");
console.log(str1.trim());

const str2=new String("                      my name is shrey               ");
console.log(str2.trim());

console.log(str1.replace(' ' ,'-'));
console.log(str1.includes('shrey'));


console.log(str1.split(' '));
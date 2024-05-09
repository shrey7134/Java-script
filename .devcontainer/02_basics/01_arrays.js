const arr=[0,1,2,3,4,5]

const myArr=['shrey',1,2,3,'harsh',5,6,7,8]  //in java script arrray are resizable and can contain a mix of different data types

console.log(arr);

console.log(arr[4]);

const arr1=new Array(1,2,3,4,5,6,7)

arr.push(6,7);
console.log(arr);

arr.pop();
arr.pop();


arr.unshift(8);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.includes(9));

console.log(arr.indexOf(5));

const newArr=arr.join();       //convert array into string

console.log(arr);
console.log(newArr);

//####################### slice  #######################

console.log("a", arr);
const myArr1=arr.slice(1,3)   //it does not change base array

console.log("b" , myArr1);
console.log("c" , arr);



//##################### splice  #########################

const myArr2=arr.splice(1,3);   //it changes base array also

console.log("a", myArr2);
console.log("b", arr);
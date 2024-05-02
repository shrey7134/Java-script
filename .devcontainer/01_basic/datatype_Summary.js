//there are two types of datatypes in js
    //1- Primitive datatype

        //basically they are of seven types
        //1:- number
        //2:- string
        //3:- boolean
        //4:- null
        //5:- undefined
        //6:- symbol
        //7:- BigInt

    //2- Non primitive datatype(reference datatype)

        //basically are of three types
            //1:- objects
            //2:- arrays
            //3:- functions


//   # Declaration of symbol

    const id=Symbol("123")
    const anotherId=Symbol("123")
    console.log(id===anotherId);
    
//   # Declaration of BigInt

    const BigNumber=12312123123n
    console.log(BigNumber);

//   # Declaration of Arrays

    const heroes=["tony","stark","ratan tata"]   //Array always in square bracket[]
    console.log(heroes);

//   # Declaration of object

    const obj={                  //object always in curly braces{}
        name:"shrey",
        age:23
    }
    console.log(obj);


//   # Declaration of Function

    const myFunction=function(){
        console.log("hello world");
    }
    console.log(myFunction);


console.log(typeof undefined);
console.log(typeof null);
console.log(typeof true);
console.log(typeof myFunction);
console.log(typeof obj);


// ************************************** Memory *******************************************

//   stack(Primitive)                 heap(Non primitive)

let name="shrey"
let anotherName=name
console.log(name);
console.log(anotherName);
anotherName="harsh"
console.log(name);
console.log(anotherName);


//Referencing through heap

let user1={
    email:"user@.com",
    upi:"u@ybl"
}
let user2=user1;
console.log(user1);
console.log(user2);
user2.email="123456"
console.log(user1);
console.log(user2);

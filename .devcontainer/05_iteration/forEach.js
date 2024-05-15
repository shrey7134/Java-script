const coding=['js','ruby','python','java','cpp']
coding.forEach(function(val){
    // console.log(val);
})

//                      or

coding.forEach((val)=>{
    // console.log(val);
})

//                     or


function printme(item){
    console.log(item);
}

// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})


//                   or         


const myobj=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myobj.forEach((val)=>{
    console.log(val.languageFileName);
    console.log(val.languageName);
})
(function chai(){             // Named iife
    console.log(`DB connected`);
})();

(() => {                      //un named iife
    console.log(`DB2 connected`);
})();


((name)=>{                    //variable passed un named iife
    console.log(`Db2 connected ${name}`);
})("shrey")
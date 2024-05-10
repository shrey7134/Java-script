const marvel_heros=['thor','ironman','spiderman'];
const dc_heros=['superman','flash','batman'];
//marvel_heros.push(dc_heros); 
//console.log(marvel_heros);

//marvel_heros.concat(dc_heros);
//console.log(marvel_heros);

const heros=marvel_heros.concat(dc_heros);
// console.log(heros);

// ################### spread  ##################

 const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros);

const num=[1,2,3,4,5,6,[1,2,[3,4,5]],8,[1,2,3]]
// const real_array=num.flat(Infinity)
// console.log(real_array);

console.log(Array.isArray("shrey"));

console.log(Array.from("shrey"));


console.log(Array.from({name:"shrey"}));    //we need to tell whom to make array key or values


let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s1,s2,s3));
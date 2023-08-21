const num: number = 10;
console.warn(num);

// defining object type ts 
type objType = {name:string,age:number,email:string}

const person:objType={
name:'Sagar',
age:20,
email:'abc@gmail.com'

}
const user:objType={
name:'Sagar Gupta',
age:22,
email:'abz@gmail.com'

}

console.warn(user.name)

// DEFINING ARRAYS IN TS
 let arr:string[]=["php","java","react","ts"] 
//  it will take only string type values 

let newarr:any[]=[12,'new',true,25.20]
// to put values of different types in array we have to use any type 

console.warn(arr)
console.warn(newarr)

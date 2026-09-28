const person={
    name:"Max",
    Age:30,
    address:222,
}
const toArray=(...args)=>args;
const ( fname, ...otherInfo)=person;
console.log(name, otherInfo);






console.log("hello");
const x=5;

let z=2;
let isvalue=false;;
/*if(z=="2"){
  isvalue=true;
  console.log(isvalue);
}
else{
    console.log(isvalue);
}
*/
let name="";
let result=name||"Guest";
console.log(result);
let w=0;
console.log(w||10);
console.log(w??10);
let status=w>=10?"Adult":"batata";
console.log(status);
for(let i=0;i<=3;i++){
    console.log("For:",i);
}
let i=0;
while(i<=3){
    console.log("While:",i);
    i++;
}
/*let nam="robin";
console.log(`hello ${nam}`);
console.log(nam.toUpperCase());
console.log(nam.toLowerCase());
console.log(nam.indexOf("b"));
console.log(nam.charAt(0));
console.log(nam.includes("ro"));
console.log(nam.slice(0,4));

*/
let p=2.995;
console.log(p.toFixed(1));
console.log(p.toFixed(3));
let h=5.1;
console.log(h.toFixed(0));
console.log(Number("42")+9);
console.log(isNaN("Hello"));
function calculateArea(width,height){
    return width*height;
}
let area=calculateArea(5,3);
console.log(area);
let greet=function(name){
    return `Hi ,${name}`;
}
console.log(greet("Sam"));
let hobbies=["Sports","Cooking"];
console.log(hobbies[0]);
const add=(a,b)=>a+b;
let num=[1,3,5];
num.forEach(n => console.log(n+1));
let double=num.map(x=>x*2);
console.log(double);
let now=new Date();

let birthday=new Date(2004,5,18);
console.log(birthday.toDateString());
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());

now.setFullYear(2030);
console.log(now.toDateString());
let a=[1,2,3,4];
let c=a;

c.pop();

console.log(a);
console.log(Array.isArray(a));
let arr=[1,2,4,5,6,7];
console.log(arr.indexOf(2));
console.log(arr.find(n=>n>5));
console.log(arr.includes(3));
console.log(arr.findIndex(n=>n>5));
console.log(arr.sort());
console.log(arr.sort((a,b)=>a-b));
console.log(arr.sort((a,b)=>b-a));
console.log(arr.reverse());
console.log(arr.filter(n=>n%2===0));
console.log(arr.map(n=>n+2));
arr.forEach(n=>console.log(n+1));
let id=new Set([1,2,2,3,3,3,4]);
console.log(id);
let nums=[1,1,2,2,3];
let unique=[...new Set(nums)];
console.log(unique);






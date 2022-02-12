console.log("hello world");
k = 2 + 2
console.log(k + 3);
let NUM = 4
 console.log(NUM);
 let USERNAME = 'NAVIN'
  console.log(USERNAME);
  let radius = 5
  const pi = 3.14
  
   
     
  area  = pi * radius * radius
  console.log(area)
  let nre = "grate" 
  console.log(typeof nre);
  let num = 12
  console.log(typeof num);
  let num1 = 1000000000000000000000000000000000n
  console.log(num1 + 3n);
  let firstname = "promise"
  let lastname =  "wilson"
  let fullname = firstname + " " + lastname
  console.log(fullname);
  let user = 'PROMISE "WILSON"'
  console.log(user)
  let kate = "pro\tmise wilso\bon"
  console.log(kate);
  boo = 57 < 16
  console.log( typeof boo);
  let ner = null
  console.log(typeof ner )
let numb = Number("123")
console.log(numb, typeof numb)
let x
x = 8
x = x + ""
console.log(x, typeof x)
x = x + 2
console.log(x);
let P
P = 12
P = P + P
console.log(P, typeof P);
 P = P + 2
 console.log(P, typeof P)
 let C = parseInt("123 pro")
 console.log(C);
 let n = 4
 let p = n++
 console.log(P)
 let a = 12
 let b = 10
 let result = a <  b
 console.log(result);
 let c = 7, d = 2, e = 5
 let resulting = c < d || c > e
 console.log(resulting);
 let resultin = c > e || d < e
 m = !resultin
 console.log(m)
 let numb1 = 34
 let numb2 = 13
 if(numb1 > numb2){
   console.log("numb1 is greater");
   console.log('yeee')

 }
 else{
   console.log("numb2 is greater");
   console.log("oops!!!");
 }
 console.log("bye......")
 let number1 = 1;
 let number2 = 10;
 let number3 = 19;
 if(number1 > number2 && number1 > number3){
   console.log("number1 is the greatest");

 }
 else if (number2 > number3){
   console.log("number2 is the greatest");
 }
 else{
   console.log("number3 is the greatest");
 }
 console.log('bye.....');

 let nu = 97
 let res
 if(nu%2===0)
    res = "Even"

else
res = "Odd"

 //res = num%2===0 ? "even" : "odd"
 console.log(res);
 // mon - 7am
 // tues-thurs - 5am
 // fri - 8am
 // sat - 10am
 // sun - 8am
 let day = "sunday";
 switch(day){
case 'monday':
console.log("7am");
break;
case 'tuesday':
console.log("5am");
break;
case 'wednesday':
  console.log("5am");
  break;
  case 'thursday':
    console.log("8am");
    break;
    case 'friday':
    console.log("8am");
    break;
    case 'saturday':
      console.log("10am");
      break;
      case 'sunday':
      console.log("8am");
      break;
      default :
      console.log("learn a carrier or do some meaningful");

 }
console.log("bye...");

let nom1 = -9
let nom2 = 29
let re = nom1 + nom2
//console.log(" the addition of " + nom1 + " and " + nom2 + " is " + " = " + re );
console.log(`the addition of ${nom1} and ${nom2} is ${re}`);
console.log("my name is \npromise");
//let l = -4
//while(l<=4)
//{
 
  //l++;
//}

for( let l=1;l<=5;l++){
  console.log("month",l);
  for(let i=1;i<=5;i++)
  console.log("hello",i);
}
for(let k = 1;k<=100;k++){
if(k%10===0)
  console.log(k);
}
let nos = 356789
while(nos>0){
console.log(nos%10);
nos = parseInt(nos/10);

}
let h = 23
allen = {
  name: 'Promise',
  tech: 'Js',
  age: '23',
  laptop: {
    CPU: 'core I7',
    RAM: '4GB',
    BRAND: 'LENOVO'

  }
}


//for(let date in allen){
  //console.log(date,allen[date])
//}
for(let date in allen.laptop){
  console.log(date,allen.laptop[date])
}

let ko = 1

//while(ko<=5){
 // console.log('hello world');
  //ko++
//}
function greet(us)
{
 return `hello ${us}!`
}

let us = 'pro'
let str = greet(us)
console.log(str)
//function greet(){
  //return "hello dear"
//}
//let str = greet()
//console.log(str);
//let add = function(no1,no2){
 //return no1 + no2
//}
//let egale = add(-6,9)
//console.log(egale);
let user23 = 'navin';
function greet(u){
  let num10 = 5;
  console.log(num10);
  return `hello ${u}`
}
let st = greet(user23);
console.log(st);

function ajoute(s,r,w){
  console.log(`${s}+${r}+${w}`)
  return s + r + w
}
let div = ajoute(9,8,0);
console.log(div);
let gree = (user13) =>{
  console.log("hello world " + user13);
  return 90;
}
console.log(gree("pro"));

let laptop2 = {
  cpu:'i7',
  ram:'16',
  brand:'hp',
  getconfig: function(){
    console.log(this.cpu);
  }
}
let laptop1 = {
  cpu: 'i5',
  ram:'32',
  brand:'dell',
  compare: function(other){
    if(this.cpu>other.cpu){
      console.log(this);
    }
    else
      console.log(other);
    
    
  },
  getconfig: function(){
    console.log(this.cpu);
  }
}

laptop1.compare(laptop2)
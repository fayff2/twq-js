// birthday

const date = new Date();
const day = date.getDate();
const month = date.getMonth() +1;
const myday=1;
const mymonth=11;
if (day == myday && month == mymonth) {
  console.log("happy birthday");
} else{
  console.log("not your birthday");
}



//// even or odd
let number = 6;

if( number%2==0 ){
    console.log("It is even");
}
else{
    console.log("It is odd");   
}



//Grade
if (number >= 90 && number<=100){
    console.log("A");   
}
else if (number >= 80 && number <=89){
    console.log("B");   
}
else if (number >= 70 && number <=79){
    console.log("C");   
}
else if (number >= 60 && number <=69){
    console.log("D");   
}
else{
    console.log("F");       
}

// Prime Numbers

let Primecase=2;
if(number>1 && number%number==0 && number%Primecase!=0 ){
    console.log("Prime Numbers");
}
else{
    console.log("Not prime Numbers");    
}

// Fizz Buzz:
let num = 3
if(num%3==0 && num%5==0){
    console.log("fezzbuzz");
}
else if(num%3==0){
    console.log("fezz");
}
else if(num%5==0){
    console.log("buzz");
}


//// - using for loop calculate the square number between 1 and 10.

for(let i=1; i<=10; i++){
console.log(i*2);

}
console.log("------------------------------")

/// using any loop print odd number between 1 and 20.

for(let i=1; i<=20; i++){
   if(i % 2 ==! 0){
    console.log(i)
   }
    
    }

    console.log("------------------------------")
    //using any loop print even number between 1 and 25.

    for(let i=1; i<=25; i++){
        if(i % 2 == 0){
         console.log(i)
        }
         
         }

         console.log("------------------------------")

/// using loop print the following.



let n = 8; 
let s = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= i; j++) {
    s += j;
  }
  s += "\n";
}
console.log(s);



///Fibonacci sequence:
let next;
let num1=0;
let num2=1;

for (let i = 0; i <=20; i++) {
    console.log(num1);

next= num1+num2;
num1=num2;
num2=next;

}





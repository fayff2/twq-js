
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
num1=0;
num2=1;

for (let i = 0; i <=20; i++) {
    console.log(num1);

next= num1+num2;
num1=num2;
num2=next;

}





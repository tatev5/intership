// 7.	Declare variable. Initialize it with the value, which shows temperature in degrees Celsius. Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to Fahrenheit use the following formula: °C * 1.8 +32 = °F .
let x;

x=20;
console.log((x*1.8)+32);
console.log('   ')

//8.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let numberOne =10;
let numberTwo = 5;

if(numberOne%numberTwo===0 || numberTwo%numberOne===0){
    console.log(1)
}else{
console.log(0)
}
console.log('   ')

// 9.Given three numbers. Find the maximum one.

let arr=[5,25,35]
console.log(Math.max(...arr));
console.log('   ')

//14.  	Print all numbers between 1 and 10.

for(let i=1; i<10;i++){
    console.log(i);
}
console.log('   ')

//15.	Print all numbers between 1 and 10 except 6.

for(let i=1; i<10;i++){
    if(i===6){
        continue
    }
    console.log(i);
}
console.log('   ')

//16.	Print all even numbers between 1 and 10.

for(let i=1; i<10;i++){
    if(i%2===0){
        console.log(i)
    }
    
}
console.log('   ')

//17.	Calculate the sum of all numbers between 1 and 10 (using loop).
let sum=0;
for(let i=1; i<10;i++){
    sum+= i

}
console.log(sum)

console.log('   ')

//18.	Calculate the sum of all numbers between 1 and 10 except 8

let sum2=0;
for(let i=1; i<10;i++){
    if(i===8){
        continue
    }
    sum2+= i

}
console.log(sum2)

console.log('   ')

//19.	Calculate the sum of all odd numbers between 1 and 10.

let sum3=0;
for(let i=1; i<10;i++){
    if(i%2!==0){
        sum3+= i
    }
}
console.log(sum3)
console.log('   ')
//20.	Calculate the sum of squares of all numbers between 1 and 10.

let sum4=0;
for(let i=1; i<10;i++){
        sum4+= i**2
}
console.log(sum4)

console.log('   ')

//22.	Given five numbers as input. Calculate and print the average of the numbers. 

// let a=Number(prompt('type your number'));
// let b=Number(prompt('type your number'));
// let c=Number(prompt('type your number'));
// let d= Number(prompt('type your number'));
// let e=Number(prompt('type your number'));

// console.log((a+b+c+d+e)/5);
//1․ Տրված են երկու թվեր, տպեք դրանցից մեծը
let x = 100;
let y = 23;

console.log(Math.max(x, y));
console.log('   ')

// 2․ Տրված է բնական թիվ։ Ստուգեք արդյոք վերջին թվանշանը 2 է։ 

let a = 12547184;
let number = String(a).slice(-1)
if (Number(number) === 2) {
  console.log('Վերջին թիվը 2 է');
} else {
  console.log('Վերջին թիվը  2 չէ');
}
console.log('   ')
//3․ Տրված է երկու հեռավորություն, մեկը կիլոմետրով, մյուսը մետրով։ Գտեք որն է ավելի մեծ։

// let firstNum=5;
// let secondNum=15;

console.log('   ')

arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45]
//4․ Գտնել զանգվածի երկարություն

console.log(arr.length);
console.log('   ')
//5. Տպել զանգվածի բոլոր էլեմենտները
for (let i of arr) {
  console.log(i)
}

console.log('  ')

//6․ Գտնել զանգվածի բոլոր թվերի գումարը
let sum = 0;
for (let i of arr) {
  sum += i

} console.log(sum);

console.log('  ')

//7․ Գտնել թե քանի 1 կա զանգվածում
let count = 0;
for (let i of arr) {
  if (i === 1) {
    count++
  }
}
console.log(count + " հատ 1 կա զանգավածում");

console.log('  ')

//8․Գտնել զույգ թվերի քանակը

let count2 = 0;
for (let i of arr) {
  if (i % 2 === 0) {
    count2++
  }
}
console.log(count2 + " հատ զույգ թիվ կա զանգավածում");

console.log('  ')

//9․ Գտնել կենտ էլեմենտների քանակը

let count3 = 0;
for (let i of arr) {
  if (i % 2 !== 0) {
    count3++
  }
}
console.log(count3 + " հատ կենտ թիվ կա զանգավածում");
console.log('  ')



//10․ Գտնել զանգվածի մինիմում արժեքը

console.log(Math.min(...arr))

console.log('  ')

//11․ Գտնել զանգվածի մաքսիմում արժեքը

console.log(Math.max(...arr))

console.log('  ')

// /12. Գտնել զանգվածի էլեմենտների քառակուսիների գումարը

let sum1 = 0;

for (let i of arr) {
  sum1 += i ** 2
}
console.log(sum1)

console.log('  ')

//13*․ Շուռ տալ զանգվածը, այնպես որ վերջին արժեքը դառնա առաջինը, իսկ առաջին դառնա վերջինը և այդպես շարունակ

console.log(arr.reverse())

//14*․ Դասավորել աճման կարգով
//1
console.log(arr.sort((a, b) => a - b))

//2
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      valueinArray = arr[i];
      arr[i] = arr[j];
      arr[j] = valueinArray;
    }
  }
}
console.log(arr);


console.log('  ')

let numberCount=0;

arr = ["Hello", 15, "World", true, 89, 157, [1, 3, 7]]

//15. Գտնել զանգվածի էլեմենտներից քանիսի տիպն է number

for (let i of arr) {
  if (typeof i === 'number') {
     numberCount++
  }
}
console.log(numberCount)

console.log('  ')

//16. Գտնել զանգվածի էլեմենտներից քանիսն են բուլյան տիպի

for (let i of arr) {
  if (typeof i === 'boolean') {
    console.log(i)
  }
}
console.log('  ')

//17․ Տպել զանգվածի վերջին էլեմենտի բոլոր էլեմենտները

let arrVal = arr[arr.length - 1]
for (let i of arrVal) {
  console.log(i);
}
console.log('  ')
//18․ Տպել զանգվախի վերջին էլեմենտի բոլոր էլեմենտների գումարը

let sum3 = 0;
for (let i of arrVal) {
  sum3 += i
}
console.log(sum3);

console.log('  ')

//19․ Տպել միայն զույգ ինդեքս ունեցող անդամները
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log(arr[i])
  }
}

console.log('  ')

//20․ Օգտատերը ներմուծում է թիվ։ ներմուծված թվին համապատասխան տպել Ամիսը։ Չօգտագործել if

//let monthName=Number(prompt('type 1-12 number'))
// let month;
// switch(monthName){
//   case 1:
//     month='January'
//     console.log(month);
//     break;
//   case 2:
//     month = "February";
//     console.log(month);
//     break;
//   case 3: 
//     month = "March";
//     console.log(month);
//     break;
//   case 4: 
//     month = "April";
//     console.log(month);
//     break;
//   case 5:
//     month = "May";
//     console.log(month);
//     break;
//   case 6: 
//     month = "June"; 
//     console.log(month);
//     break;
//   case 7: 
//     month = "July";
//     console.log(month);
//     break;
//   case 8: 
//     month = "August";
//     console.log(month);
//     break;
//   case 9: 
//     month = "September";
//     console.log(month);
//     break;
//   case 10: 
//     month = "October";
//     console.log(month);
//     break;
//   case 11:
//     month = "November";
//     console.log(month);
//     break;
//   case 12:
//     month = "December";
//     console.log(month);
//     break;
// }

//21. Օգտատերը ներմուծում է թվեր։ Այդ թվերը ավելացրեք զանգվածում այնքան ժամանակ մինչև չգրի "exit"


// let arrNumbers = [];

// while (true) {
//   let promptNumbers = prompt('type number')
//   if(promptNumbers !== 'exit') {
//     arrNumbers.push(Number(promptNumbers))
//   } else if(promptNumbers === 'exit') {
//     console.log('exit');
//     break;
//   }
// }
// console.log(arrNumbers);


//22. Տրված են 2 զանգվածներ։ Համեմատել նրանց
//	ա) երկարությունը և տպել առաջինն է մեծ թե երկրորդը
//	բ) էլեմենտների գումարը և տպել առաջինն է մեծ թե երկրորդը
 
let arr1=[5,7,10,12,15];
let arr2=[8,10,56,47,23,69]

if(arr1.length>arr2.length){
  console.log('Array 1 մեծ է ');
}else{
  console.log('Array 2 մեծ է ');
}

sum4=0
for(let i of arr1){
  sum4+=i
}
sum5=0;
for(let i of arr2){
  sum5+=i
}
if(sum4>sum5){
  console.log('array 1-ի գումարը ավելի մեծ է');
}else{
  console.log('array 2-ի գումարը ավելի մեծ է');
}
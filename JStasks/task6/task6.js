//1․ Ստեղծել ֆունկցիա, որը կվերցնի զանգված որպես արգումենտ (սթրինգերի) և կվերադարձնի մեկ այլ լիստ, որը կպարունակի այդ 
//լիստի բոլոր այն բառերը, որոնք սկվում են ձայնավորով։

let arr=['Armen','Jora','Alis','Arpi','Syuzanna','Agelina','Ilona','Onik'];

let func1=(arr1)=>{
 return arr1.filter(str => /^[aeiou]/i.test(str))
}
 console.log(func1(arr))


// /2․ Ստեղծել ֆունկցիա, որը որպես արգումենտ ընդունած թիվը կստուգի և կասի այն պարզ թիվ է թե ոչ


function isPrime(n){
    if (n<=1){ 
        return n+" "+'is not prime';
    }else if(n===2){
        return n+" "+'is not prime';
    }else{
        for (var i = 2; i <= n-1; i++)
        if (n % i == 0){
            return  n+" "+'is not prime';;
        }
    return n+" "+'is prime';
    } 
   
}

console.log(isPrime(10));

//3․ Գրել ֆունկցիա, որը կտպի True, եթե լիստի բոլոր էլեմենտները 1 կամ 4 են։ Հակառակ դեպքում տպել False:

let  arr2=[4,4,4,4,4,4,1]

let func2=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 1 && arr[i] !== 4) {
            return false;
        }
    }
    return true;
}
console.log(func2(arr2))


//4․ Ստեղծել ֆունկցիա, որը կստեղծի և կտպի լիստ, որի արժեքները [1, 30]
 //միջակայքում գտնվող թվերի քառակուսիներն են
let pow;
let arrPow=[]
 let funcPow=()=>{

    for(let i=2;i<30;i++){
        pow=i**2
        arrPow.push(pow)
    }
    return arrPow
}
console.log(funcPow())

//5․ Ստեղծել ֆունկցիա, որը կվերցնի մեկ արգումենտ՝ n:
// Վերադարձնել n երկարությամբ լիստ, որը կպարունակի (-100, 400) միջակայքում գտնվող պատահական թվեր։

// const range = (start, end) => {
//     const length = end - start;
//     return Array.from({ length }, (_, i) => start + i);
// }
// console.log(range(-100,400))

let arr5=[]
let  randomFunc=(n)=>{
    let rand=Array(n).fill().map(()=>Math.floor(Math.random()*(400 -(-100)+1))+(-100))
    return rand
}

console.log(randomFunc(200))



//6. Ստեղծել ֆունկցիա, որը կգումարի տրված լիստի բոլոր թվերը և կվերադարձնի այն։ Եթե տարրերից մեկը 13 է, դադարեցնել հաշվարկը
// և վերադարձնել մինչև այդ պահը հաշված գումարը։

let arr6=[7,10,20,13,25,14]
let funcSum=()=>{
    let sum1=0;
    for(let i of arr6){
        sum1+=i;
        if(i===13){
            return sum1 - i
        }
    }
    return sum1;
}
console.log(funcSum(arr6))
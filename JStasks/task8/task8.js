//1․ Գրել ֆունկցիա, որը պարամետրով ստանում է n բնական թիվ և 

// 1-3-ի դեպքում վերադարձնում է "Վատ",
// 4-6 - "Միջին"
// 7-8 - "Լավ"
// 9-10 - "Գերազանց"
// այլ դեպքերում "Սխալ գնահատական"։

let funcNumber=(n)=>{
    if(n===1 || n<=3){
        return 'Վատ'
    }else if(n===4 || n<=6){
        return 'Միջին'
    }else if(n===7 || n<=8){
        return 'լավ'
    }else if(n===9 || n<=10){
        return 'Գերազանց'
    }else{
        return "Սխալ գնահատական"
    }
}
console.log(funcNumber(2))

//2. Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում 0-ից n թվի
// միջև ընկած թվերի գումարը (n-ը ներառյալ)։

let funcSum=(n)=>{
    let sum=0;
    for(let i=0; i<=n;i++){
        sum+=i
    }
return sum
}
console.log(funcSum(7));

// 3․ Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n բնական թիվ և վերադարձնում n թվի ֆակտորյալը։

let funcFactorial=(n)=>{
    if (n === 1) {
        return n
    } else {
        return (n * funcFactorial(n - 1))
    }
}
console.log(funcFactorial(5));

//4 Գրել ֆունկցիա, որը պարամետրով ստանում է կամայական n ամբողջ թիվ և վերադարձնում true n-ը պարզ թիվ լինելու դեպքում,
// հակառակ դեպքում false:

function isPrime(n) 
{
    if (n<=1){ 
        return false
    }else if(n===2){
        return false
    }else{
        for (var i = 2; i <= n; i++)
        if (n % i == 0){
            return  false
        }
    return true;
    } 
   
}

console.log(isPrime(9));

//5․ Գրել ֆունկցիա, որը պարամետրով ստանում է (x1, y1) և (x2, y2) կետերի կոորդինատները և վերադարձնում 2 կետերի
//միջև եղած հեռավորությունը:

let funcCord=(x1,y1,x2,y2)=>{
    let x=x1-x2;
    let y= y1-y2
    return Math.sqrt(x*x+y*y);
}
console.log(funcCord(3, 4, 4, 3))

//6. Գրել ֆունկցիա, որը պարամետրով ստանում է arr զանգված և վերադարձնում նոր զանգված առանց կրկնվող տարրերի։
//օր․ [ 4, 4, 7, 8, 9, 5, 5, 6] --> [ 4, 7, 8, 9, 5, 6 ]:

let arr7=[ 4, 4, 7, 8, 9, 5, 5, 6]
let doubleNumber=(arr)=>{
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}
console.log(doubleNumber(arr7))

//7. https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
    return chickens*2 + cows*4 + pigs*4
}
console.log(animals(2, 3, 5))

//8․ https://edabit.com/challenge/JesaFi5ntBEbGT8bu

function convert(hours, minutes) {
	return hours * 3600 + minutes * 60 ;
}
console.log(convert(1, 3))

//9․ https://edabit.com/challenge/vvuAkYEAArrZvmp6X


function bitwiseAND(n1, n2) {
	return n1 & n2
}

function bitwiseOR(n1, n2) {
	return n1 | n2
}

function bitwiseXOR(n1, n2) {
 return	n1 ^ n2
}

console.log(bitwiseAND(7, 12) )
console.log(bitwiseOR(7, 12))
console.log(bitwiseXOR(7, 12))

//10. https://edabit.com/challenge/3kcrnpHk7krNZdnKK
function binary(decimal) {
	return decimal.toString(2); 
	 
}
console.log(binary(10)); 

//11 https://edabit.com/challenge/Q3n42rEWanZSTmsJm



let ArrVal=[5,10,2,13,489]

function minMax(arr) {
    let arrnew=[];
	let minVal=Math.min(...arr);
    let maxVal=Math.max(...arr);
    arrnew.push(minVal,maxVal)
    return arrnew
	
}
console.log(minMax(ArrVal))


// 12  https://edabit.com/challenge/xsi99TwpGyFC8KS6d

function numberSplit(n) {
    let a = Math.floor(n / 2);
    let b = n - a;
    let c = [];
    c.push(a, b);
    return c;
}

numberSplit(4) 
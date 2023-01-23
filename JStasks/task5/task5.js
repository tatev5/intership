//1. Ստուգել, արդյո՞ք ներմուծված սթրինգը սկսվում է a կամ o-ով։ 
//Եթե հա տպենք սթրինգն ինչպես կա, իսկ հակառակ դեպքում՝ սթրինգի հակառակը։


let stringPromptNumber=prompt('type text');
if(stringPromptNumber.includes('a') || stringPromptNumber.includes('o')){
    console.log(stringPromptNumber)
}else{
    console.log(stringPromptNumber.split('').reverse().join(''))
}
//2. Պահանջել մուտքագրել ծածկագիր։ Եթե ծածկագիրը պարունակում է 6-ից 12-ից նիշ և պարունակում է թվանշաններ, 
//տառեր և հետևյալ սիմվոլներից մեկը "%",  տպել, որ ծածկագիրն ուժեղ է։ 
//Հակառակ դեպքում զգուշացրեք օգտատիրոջը, որ ծածկագիրը պետք է փոխվի։

let passwordPrompt=prompt('number')
let regexprPass= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,12}$)");
if(passwordPrompt.match(regexprPass)){
    console.log('ծածկագիրն ուժեղ է');
}else{
    console.log('Ծածկագիրը պետք է փոխվի')
}

//3. Տրված է սթրինգ։ Տպեք նոր սթրինգ, որը կպարունակի օրիգինալ սթրինգի բոլոր տառերը կրկնապատկված։
//Օրինակ, եթե ունենք հետևյալ սթրինգը՝ Monty, պետք է ստանանք MMoonnttyy

let newString = 'Monty';
let newString2 = '';

for (let i = 0; i < newString.length; i++) {
    newString2 += newString[i].repeat(2)
}
console.log(newString2);

// /4. # Given 2 strings, a and b,
// return the number of the positions where they contain the same length 2 substring. 
//So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.
//Տրված են a և b սթրինգերը։ Գտնել, թե քանի անգամ է դրանց մեջ նույն դիրքում հանդիպում 2 երկարությամբ նույն ենթասթրինգերը հանդիպում։


let a = 'xxcaazz';
let b = 'xxbaaz';


let funcCount=(a,b)=>{

   let lengthAandB = Math.min(a.length, b.length);
   let count = 0;
    for (let i = 0; i < lengthAandB-1; i++) {
        let aSubString=a.substring(i, i+2);
        let bSubString=b.substring(i, i+2);
        if (aSubString===bSubString)
         count++; 

    }
    return count
}
console.log(funcCount(a,b));



// 5․ Տրված է թվերի զանգված։ Ֆիլտրել և ստանալ նոր զանգված, որտեղ բոլոր էլեմենտները մեծ կլինեն 6-ից։ 

let arr = [4, 5, 7, 12, 17, 6, 18, 20, 2]
let res = arr.filter(arr => arr > 6)
console.log(res);

//6. Տրված է թվերի զանգված։ Բոլոր էլեմենտները մեծացնել 5 անգամ։
let mul;
let newArr = []

for (let i of arr) {
    mul = i * 5
    newArr.push(mul)
}
console.log(newArr)

//7․ Տրված է օգտատերերի օբյեկտների զանգված․ 
//let arr = [ {name: "John", age: 30}, {name: "Lilit", age: 25}, {name: "Ani", age: 27}, , {name: "Karen", age: 20}, {name: "Aram", age: 32}, {name: "Luse", age: 17}]

// ա) գտնել օգտատերերի միջին տարիքը
// բ) ֆիլտրել բոլոր օգտատերերին, որոնց տարիքը մեծ է 23-ից։

let arr1 = [
    { name: "John", age: 30 },
    { name: "Lilit", age: 25 },
    { name: "Ani", age: 27 },
    { name: "Karen", age: 20 },
    { name: "Aram", age: 32 },
    { name: "Luse", age: 17 }
]

//// ա) գտնել օգտատերերի միջին տարիքը

let getAverageAges = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
}

let ages = arr1.map(person => person.age);

console.log(getAverageAges(ages));


//// բ) ֆիլտրել բոլոր օգտատերերին, որոնց տարիքը մեծ է 23-ից։

let filterAges = arr1.filter(arr1 => arr1.age > 23)
console.log(filterAges);

//8․ Տրված է հետևյալ օբյեկտը 
let obj = {
    id: 1,
    firstName: "Avetiq",
    lastName: "Avetiq",
    age: 30,
    address: "Komitas 15",
    city: "Ijevan",
    isAdmin: true,
}

//ա) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի բանալիները(keys)
let arr2 = Object.keys(obj);
console.log(arr2);

//բ) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի արժեքները(values)
let arr3 = Object.values(obj)
console.log(arr3);
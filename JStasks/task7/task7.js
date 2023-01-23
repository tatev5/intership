let obj={
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}

//1. Զանգվածով ստանալ վերը նշված օբյեկտի key-երը

let objectKeys = Object.keys(obj);
console.log(objectKeys)


//2. Զանգվածով ստանալ վերը նշված օբյեկտի value-ները
let ovjValue=Object.values(obj)
console.log(ovjValue);

//3․ ['author', 'title', 'readingStatus'] և ['Bill Gates', 'The Road Ahead', true] զանգվածներից ստանալ օբյեկտ, որտեղ key-երը 
//առաջին զանգվածի էլեմենտներն են, իսկ value-ները 2րդ զանգվածի։ 

let arr1=['author', 'title', 'readingStatus'];
let arr2=['Bill Gates', 'The Road Ahead', true];

let obj1={};

arr1.forEach((item,index)=>{
    obj1[item]=arr2[index]
})
console.log(obj1);


let  library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

    

//4 Սորտավորել զանգվածը ըստ յուր․ օբյեկտի libraryId-ի։

console.log(library.sort(function(a, b) {
    return a.libraryID - b.libraryID;
}))

//5․ Գրել ֆունկցիա, որը կջնջի զանգվածում եղած null, 0, '', "", undefined, false էլեմենտները

let arr3=[NaN, 0, 15, false, -22, '',undefined, 47,  null] 

function filterFunc(arr) {

    return arr.filter((arr) => {
      if (arr) {
        return arr;
      }
    });
  }
 
console.log(filterFunc(arr3));

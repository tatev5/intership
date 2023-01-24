for(let i =1;i<=20;i++){
    let newDiv=document.createElement('div');
    newDiv.setAttribute('id',`${i}`)

    myNewdiv.appendChild(newDiv)
    newDiv.style.backgroundColor='green';
    newDiv.style.width='100px';
    newDiv.style.height='100px';
    newDiv.style.margin='10px';
    myNewdiv.style.display='flex';
    myNewdiv.style.flexWrap='wrap'
}

let divs=document.querySelectorAll('div');

let arr=[]
let  secondArr=[]

for(let i=0;i<divs.length;i++){
    arr.push(divs[i].id)
    for(let j=secondArr[0];j<secondArr[1];i++){
     
    }
    divs[i].onclick=function(e){
    
   secondArr.push(divs[i].id)
   for(let j=0; j<secondArr.length;j++){
    console.log(secondArr[0])
    if(Number(secondArr[0])>Number(secondArr[1])){
        divs.target.style.backgroundColor='red'
    }
   }
         
    }
 
    
}

console.log(secondArr)




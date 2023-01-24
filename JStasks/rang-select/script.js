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
    
    divs[i].onclick=function(e){
       
            
   secondArr.push(divs[i].id)
   if(i>secondArr[0]&& i<secondArr[1]){
    e.target.style.backgroundColor='red'
   for(let j=secondArr[0];j<secondArr[1];j++){
    console.log(secondArr[0])
   
     e.target.style.backgroundColor='red'
    }
   }
   e.target.style.backgroundColor='red'
    }
}
    


console.log(secondArr)




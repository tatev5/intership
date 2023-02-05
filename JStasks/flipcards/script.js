let flicpCards=(input)=> {
    let inputsNumbere=document.getElementById('cards').value
   
   // let inputRandomNumber=Math.floor(Math.random() * inputsNumbere) + 1
    //console.log(inputRandomNumber)

    for(let i=1;i<=input*2;i++){
      let arr=[]
        let div = document.createElement('div');
        for(let j = 1; i <= inputsNumbere; j++){
           for(let k = 0; k <inputsNumbere; k++){
            arr.push(i,j)
              console.log(i)
              div.innerHTML=arr[j]; 
           };
        };
        parentCards.append(div);
        
    div.style.width='100px';
    div.style.height='150px';
    div.style.backgroundColor='green';
    div.style.margin='50px';
    parentCards.style.backgroundColor='#e5e2e2'
    parentCards.style.display='flex';
    parentCards.style.justifyContent='center';
    parentCards.style.flexWrap='wrap';
    parentCards.style.width='90%';
    parentCards.style.margin='20px auto';
    }
}
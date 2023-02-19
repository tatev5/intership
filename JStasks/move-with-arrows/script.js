let start=0;
let elems = document.getElementsByClassName("squareDiv");
let keysPressed = {};


document.querySelector('#myDiv').addEventListener('keyup', function (e) {
  console.log(e.key);
  keysPressed[e.key] = true;
  
  if(e.key==='ArrowRight'){
    start+=2
      elems[0].style.left=start+'px'
  }
  else if(e.key==='ArrowLeft'){
      start-=2
        elems[0].style.left=start+'px'
    }
 else if(e.key==='ArrowDown'){
      start+=2
      elems[0].style.top=start+'px'
   }
  else if(e.key==='ArrowUp'){
      start-=2
   elems[0].style.top=start+'px'
   } 

    if (keysPressed['ArrowRight'] && e.key === 'ArrowUp') {
      start+=2
      elems[0].style.left=start+'px';
      elems[0].style.top=start+'px'
   }
    
})

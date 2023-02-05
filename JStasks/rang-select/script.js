for (let i = 1; i <= 20; i++) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', `${i}`)
  myNewdiv.appendChild(newDiv)
  newDiv.style.backgroundColor = 'green';
  newDiv.style.width = '100px';
  newDiv.style.height = '100px';
  newDiv.style.margin = '10px';
  myNewdiv.style.display = 'flex';
  myNewdiv.style.flexWrap = 'wrap'
}

let divs = document.querySelectorAll('div');

let arr = []
for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function () {

    arr.push(Number(divs[i].id))

    divs[i].style.backgroundColor = 'red'
    for (let j = arr[0]; j < arr[1]; j++) {
      divs[j].style.backgroundColor = "red";
    }
    if (arr[0] > arr[1]) {
      for (let c = arr[1]; c < arr[0]; c++) {
        divs[c].style.backgroundColor = "red";
      }

    }
    if (arr[2]) {
      for (let b = 0; b < divs.length; b++) {
        divs[b].style.backgroundColor = "green";
      }
      if (arr[2]) {
        divs[i].style.backgroundColor = "red";
        arr = [];
        arr.push(Number(divs[i].id));
        
       
      }
    }
  }
}


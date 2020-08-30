var restart = document.querySelector("#restart");
var turn = 0;
var squares = document.querySelectorAll("td");


function checkResult() {

  if(squares[0].textContent !== "" && (squares[0].textContent == squares[1].textContent && squares[0].textContent == squares[2].textContent)){
    alert("Winner is "+squares[0].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }

  if(squares[3].textContent !== "" && (squares[3].textContent == squares[4].textContent && squares[3].textContent == squares[5].textContent)){
    alert("Winner is "+squares[3].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }

  if(squares[6].textContent !== "" && (squares[6].textContent == squares[7].textContent && squares[6].textContent == squares[8].textContent)){
    alert("Winner is "+squares[6].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }

  if(squares[0].textContent !== "" && (squares[0].textContent == squares[3].textContent && squares[0].textContent == squares[6].textContent)){
    alert("Winner is "+squares[0].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }

  if(squares[1].textContent !== "" && (squares[1].textContent == squares[4].textContent && squares[1].textContent == squares[7].textContent)){
    alert("Winner is "+squares[1].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }

  if(squares[2].textContent !== "" && (squares[2].textContent == squares[5].textContent && squares[2].textContent == squares[8].textContent)){
    alert("Winner is "+squares[2].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }

  if(squares[0].textContent !== "" && (squares[0].textContent == squares[4].textContent && squares[0].textContent == squares[8].textContent)){
    alert("Winner is "+squares[0].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }
  
  if(squares[2].textContent !== "" && (squares[2].textContent == squares[4].textContent && squares[2].textContent == squares[6].textContent)){
    alert("Winner is "+squares[2].textContent);
    setTimeout(clearBoard, 500);
    turn = 0;
  }
}

function clearBoard(){
  for(var i=0; i<squares.length; i++){
    squares[i].textContent = '';
    turn = 0;
  }
  alert("Game Restarted!!");
}

restart.addEventListener("click", clearBoard);

function changeMarker() {
  if(this.textContent === '' && turn == 0){
    this.textContent = 'X';
    turn = 1;
    setTimeout(checkResult, 500);
  }
  if(this.textContent === '' && turn == 1){
    this.textContent = 'O';
    turn = 0;
    setTimeout(checkResult, 500);
  }
}

for(var i=0; i<squares.length; i++){
  squares[i].addEventListener("click", changeMarker);
}

function startTicTacToe() {

    for (i = 1; i <= 9; i++) {
  
      clearGrid(i);
  
    }
  
    document.player = "X";
  
    document.winner = null;
  
    message(document.player + " will start the game");
  
  }
  
  function getGrid(number) {
  
    return document.getElementById("b" + number).innerText;
  
  }
  
  function message(msg) {
  
    document.getElementById("message").innerText = msg;
  
  }
  
  function nextMove(box) {
  
    if (document.winner !== null) {
  
      message(document.player + " already won");
  
    } else if (box.innerText === "") {
  
      box.innerText = document.player;
  
      nextTurn();
  
    } else {
  
      message("Choose another box");
  
    }
  
  }
  
  function clearGrid(number) {
  
    document.getElementById("b" + number).innerText = "";
  
  }
  
  function winnerCheck(move) {
  
    var result = false;
  
    if (
  
      rowCheck(1, 2, 3, move) ||
  
      rowCheck(4, 5, 6, move) ||
  
      rowCheck(7, 8, 9, move) ||
  
      rowCheck(1, 4, 7, move) ||
  
      rowCheck(2, 5, 8, move) ||
  
      rowCheck(3, 6, 9, move) ||
  
      rowCheck(1, 5, 9, move) ||
  
      rowCheck(3, 5, 7, move)
  
    ) {
  
      result = true;
  
    }
  
    return result;
  
  }
  
  function nextTurn() {
  
    if (winnerCheck(document.player)) {
  
      message(document.player + ", has won!");
  
      document.winner = document.player;
  
    } else if (document.player == "X") {
  
      document.player = "O";
  
      message("It's " + document.player + "'s turn");
  
    } else {
  
      document.player = "X";
  
      message("It's " + document.player + "'s turn");
  
    }
  
  }
  
  function rowCheck(a, b, c, move) {
  
    var result = false;
  
    if (getGrid(a) == move && getGrid(b) == move && getGrid(c) == move) {
  
      result = true;
  
    }
  
    return result;
  
  }
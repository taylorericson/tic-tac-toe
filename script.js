const Player = (name, token) => {
  this.name = name;
  this.token = token;

  return { name, token };
};

const gameBoard = (() => {
  const board = ["", "", "x", "", "x", "", "x", "", ""];

  const getBoard = () => board;

  return { getBoard };
})();

const displayController = (() => {
  const board = gameBoard.getBoard();
  const gameBoardDiv = document.getElementById('gameboard');

  const render = function (){
    for(let i=0; i < board.length; i++) {
        const square = document.createElement("button");
        square.classList.add("square");
        square.textContent = board[i];
        gameBoardDiv.appendChild(square);
    }
  }
  return {render};
})();

const gameController = (() => {
  
})();

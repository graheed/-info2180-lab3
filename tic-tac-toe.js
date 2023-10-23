window.onload = function() {
    const divElements = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    const gameState = new Array(9).fill(null);
  
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function checkWinner(player) {
      return winningCombinations.some(combination =>
        combination.every(index => gameState[index] === player)
      );
    }
  
    divElements.forEach((element, index) => {
      element.classList.add("square");
  
      element.addEventListener('click', function() {
        if (!this.classList.contains('clicked') && gameState[index] === null) {
          this.textContent = currentPlayer;
          this.classList.add(currentPlayer);
          gameState[index] = currentPlayer;
  
          if (checkWinner(currentPlayer)) {
            const divStatus = document.querySelector("#status");
            divStatus.classList.add("you-won");
            divStatus.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
          }
  
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
     });
  
     element.addEventListener('mouseover', function() {
        element.classList.add("hover");
     });
  
     element.addEventListener('mouseout', function() {
        element.classList.remove("hover");
     });
   });

   const resetButton = document.querySelector(".controls .btn");

   resetButton.addEventListener("click", function() {
    divElements.forEach((element, index) => {
        element.classList = [];
        element.classList.add("square");
        element.textContent = "";

        const divStatus = document.querySelector("#status");
        divStatus.classList.remove("you-won");
        divStatus.textContent = `Move your mouse over a square and click to play an X or an O.`;

        gameState[0]= null;
        gameState[1]= null;
        gameState[2]= null;
        gameState[3]= null;
        gameState[4]= null;
        gameState[5]= null;
        gameState[6]= null;
        gameState[7]= null;
        gameState[8]= null;

        currentPlayer = "X";

    });
   });

  };
  
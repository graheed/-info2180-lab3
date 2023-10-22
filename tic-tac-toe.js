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
  };
  
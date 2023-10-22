window.onload = function() {
    const divElements = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    const gameState = new Array(9).fill(null);

    divElements.forEach((element, index) => {
      element.classList.add("square");
  
      element.addEventListener('click', function() {
        if (!this.classList.contains('clicked') && gameState[index] === null) {
          this.textContent = currentPlayer;
          this.classList.add(currentPlayer);
          gameState[index] = currentPlayer;
  
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
  

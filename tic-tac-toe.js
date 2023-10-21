document.addEventListener('DOMContentLoaded', (event) => {
    
    const divElements = document.querySelectorAll("#board div");
    
    divElements.forEach((element) => {
        
            element.classList.add("square");
        
    });
  });
  
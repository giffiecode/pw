document.addEventListener('DOMContentLoaded', () => {
  // Change font of elements with class 'footage' to 'Monospace'
  const foot = document.getElementsByClassName('footage');
  Array.from(foot).forEach(element => {
    element.style.fontFamily = 'Monospace';
  });

  // Add click event listener to the element with class 'code'
  const codeElement = document.querySelector('.code');
  
  // Initialize a variable to keep track of the color state
  let isBlue = false;

  // Function to toggle text color between blue and black
  function toggleTextColor() {
    if (isBlue) {
      codeElement.style.color = 'black'; // Switch to black
    } else {
      codeElement.style.color = '#007bff'; // Switch to blue (#007bff)
    }
    // Update the color state
    isBlue = !isBlue;
  }

  // Add click event listener to toggle text color on each click
  codeElement.addEventListener('click', toggleTextColor);
});



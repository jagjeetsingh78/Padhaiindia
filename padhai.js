document.querySelector('.search-icon').addEventListener('click', () => {
    // Add search functionality here
  });
  
  document.querySelector('.user-icon').addEventListener('click', () => {
    // Add user functionality here
  });
  
  document.querySelector('.nav-links').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      document.querySelector('.nav-links').classList.toggle('active');
    }
  });
  // Optional JavaScript code for the hero section

// Example: Add a click event listener to the hero button
const heroButton = document.querySelector('.hero-button');
heroButton.addEventListener('click', () => {
	alert('You clicked the Enroll now button!');
});
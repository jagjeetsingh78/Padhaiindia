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
  
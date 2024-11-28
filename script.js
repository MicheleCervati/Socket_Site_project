      // Theme toggle functionality
      const themeToggleBtn = document.getElementById('themeToggleBtn');
      const body = document.body;

      // Button styles for sticky position at the bottom-right corner
      themeToggleBtn.classList.add('position-fixed', 'bottom-0', 'end-0', 'm-4', 'p-3');
      
      // Function to toggle the theme
      themeToggleBtn.addEventListener('click', () => {
        // Check current theme
        if (body.classList.contains('bg-light')) {
          // Change to dark theme
          body.classList.remove('bg-light');
          body.classList.add('bg-dark');
          body.classList.add('text-white'); // Text color for dark theme
          themeToggleBtn.textContent = 'Switch to Light Theme'; // Change button text
        } else {
          // Change to light theme
          body.classList.remove('bg-dark', 'text-white');
          body.classList.add('bg-light');
          themeToggleBtn.textContent = 'Switch to Dark Theme'; // Change button text
        }
      });
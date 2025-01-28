// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.left === '0px') {
      menu.style.left = '-300px';
    } else {
      menu.style.left = '0px';
    }
  }
  
  // Navigation Functionality
  function navigateTo(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.style.display = 'none';
    });
  
    // Show the selected screen
    const selectedScreen = document.getElementById(screenId);
    if (selectedScreen) {
      selectedScreen.style.display = 'block';
    }
  
    // Hide menu if open
    const menu = document.getElementById('menu');
    menu.style.left = '-300px';
  }
  
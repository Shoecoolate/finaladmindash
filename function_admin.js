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
  document.querySelectorAll('.screen').forEach(screen => {
    screen.style.display = 'none';
  });

  const activeScreen = document.getElementById(screenId);
  if (activeScreen) {
    activeScreen.style.display = 'flex';
  }

  // Hide menu if open
  document.getElementById('menu').style.left = '-300px';
}

// Show Dashboard on page load
document.addEventListener("DOMContentLoaded", function () {
  navigateTo('dashboard');
});

// Work Hours Functions
function addWorkHours() {
  alert("Add Work Hours functionality goes here.");
}

function editWorkHours() {
  alert("Edit Work Hours functionality goes here.");
}

function deleteWorkHours() {
  alert("Delete Work Hours functionality goes here.");
}

function saveWorkHours() {
  const gracePeriod = document.getElementById('grace-period').value;
  if (gracePeriod) {
    alert(`Grace Period of ${gracePeriod} minutes saved.`);
  } else {
    alert("Please enter a grace period.");
  }
}

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
// Function to save announcement
function saveAnnouncement() {
  const announcementText = document.getElementById("announcement-text").value;

  if (announcementText.trim() === "") {
      alert("Please enter an announcement.");
      return;
  }

  document.getElementById("saved-announcements").value += announcementText + "\n\n";
  document.getElementById("announcement-text").value = ""; // Clear input field
  alert("Announcement saved successfully.");
}

// Function to post announcement
function postAnnouncement() {
  const selectedOption = document.getElementById("post-options").value;
  const announcements = document.getElementById("saved-announcements").value.trim();

  if (!announcements) {
      alert("No saved announcements available.");
      return;
  }

  alert(`Posting announcements: ${selectedOption}`);
}

// Function to delete saved announcements
function deleteAnnouncement() {
  if (confirm("Are you sure you want to delete all saved announcements?")) {
      document.getElementById("saved-announcements").value = "";
      alert("All saved announcements have been deleted.");
  }
}

// Function to view announcements (for now, just an alert)
function viewAnnouncements() {
  const announcements = document.getElementById("saved-announcements").value.trim();

  if (!announcements) {
      alert("No saved announcements to view.");
  } else {
      alert("Saved Announcements:\n\n" + announcements);
  }
}

// Toggle Main Menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.left === '0px') {
    menu.style.left = '-300px';
  } else {
    menu.style.left = '0px';
  }

  // Always close the Attendance submenu when toggling main menu
  document.getElementById('attendance-submenu').style.display = 'none';
}

// Toggle Attendance List Submenu
function toggleAttendanceMenu(event) {
  event.stopPropagation(); // Prevents menu from closing immediately
  const submenu = document.getElementById('attendance-submenu');

  // Close all other menus before opening this one
  closeAllMenus();

  // Toggle submenu visibility
  submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

// Show Attendance List Page and Update Content
function showAttendanceContent(contentType) {
  navigateTo('attendance-list');

  let headerText = "Attendance List";
  if (contentType === "time-log") {
    headerText = "Time Log";
  } else if (contentType === "users-active") {
    headerText = "Users Active";
  } else if (contentType === "users-inactive") {
    headerText = "Users Inactive";
  }

  document.getElementById('attendance-list-header').innerText = headerText;

  // Hide submenu after selection
  document.getElementById('attendance-submenu').style.display = 'none';
}

// Close all menus
function closeAllMenus() {
  document.getElementById('attendance-submenu').style.display = 'none';
}

// Hide submenu when clicking outside or selecting an item
document.addEventListener('click', function (event) {
  const submenu = document.getElementById('attendance-submenu');

  // If the submenu is open and the click is outside OR inside a submenu item, close it
  if (submenu.style.display === 'block' && !submenu.contains(event.target)) {
    submenu.style.display = 'none';
  }
});

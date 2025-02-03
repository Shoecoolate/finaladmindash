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

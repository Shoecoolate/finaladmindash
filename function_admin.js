// Toggle Menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.left === '0px') {
    menu.style.left = '-300px';
  } else {
    menu.style.left = '0px';
  }
}

let lastVisitedSection = 'dashboard'; // Default to dashboard

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });

    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.style.display = 'flex';
    }

    // Update the last visited section
    lastVisitedSection = screenId;

    // Hide menu if open
    document.getElementById('menu').style.left = '-300px';

    // Show/hide the dashboard shortcut icon based on the active page
    const dashboardShortcut = document.getElementById('dashboard-shortcut');
    if (screenId === 'dashboard') {
        dashboardShortcut.style.display = 'none'; // Hide on dashboard
    } else {
        dashboardShortcut.style.display = 'block'; // Show on other pages
    }
}

// Show Dashboard on page load
document.addEventListener("DOMContentLoaded", function () {
    navigateTo('dashboard'); // Load dashboard and hide shortcut on start
});

// Redirect to the last visited section when clicking the dashboard icon
document.getElementById('dashboard-shortcut').addEventListener('click', function() {
    navigateTo(lastVisitedSection);
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

// Store the latest posted announcement
let latestPostedAnnouncement = "";

// Function to post announcement
function postAnnouncement() {
    const selectedOption = document.getElementById("post-options").value;
    const savedAnnouncements = document.getElementById("saved-announcements").value.trim().split("\n\n");

    if (!savedAnnouncements.length || savedAnnouncements[0] === "") {
        alert("No saved announcements available.");
        return;
    }

    if (selectedOption === "recent") {
        // Store only the most recent announcement
        latestPostedAnnouncement = savedAnnouncements[savedAnnouncements.length - 1];

    } else if (selectedOption === "selected") {
        // Store only the selected text
        const selectedText = window.getSelection().toString().trim();
        if (!selectedText) {
            alert("Please select an announcement to post.");
            return;
        }
        latestPostedAnnouncement = selectedText;

    } else if (selectedOption === "all") {
        // Store all announcements
        latestPostedAnnouncement = savedAnnouncements.join("\n\n");
    }

    // Keep the prompt the same
    alert(`Posting announcements: ${selectedOption}`);
}

function deleteAnnouncement() {
  const savedAnnouncements = document.getElementById("saved-announcements");
  const selectedText = window.getSelection().toString(); // Get selected text

  if (!selectedText) {
      alert("Please select an announcement to delete.");
      return;
  }

  if (confirm("Are you sure you want to delete the selected announcement?")) {
      // Replace only the selected text with an empty string
      savedAnnouncements.value = savedAnnouncements.value.replace(selectedText, "").trim();
      alert("Selected announcement deleted.");
  }
}

// Function to view announcements (only shows the latest posted one)
function viewAnnouncements() {
  if (!latestPostedAnnouncement) {
      alert("No saved announcements to view.");
      return;
  }

  alert(`Saved Announcements:\n\n${latestPostedAnnouncement}`);
}

// Store the header text without displaying it in the HTML
let attendanceHeaderText = "Time Log > By Company";

function updateAttendanceHeader() {
  const type = document.getElementById("attendance-type").value;
  const company = document.getElementById("attendance-company").value;

  let typeText = "Time Log";
  if (type === "users-active") {
    typeText = "Users Active";
  } else if (type === "users-inactive") {
    typeText = "Users Inactive";
  }

  let companyText = "By Company";
  if (company === "lorem-ipsum-1") {
    companyText = "Lorem Ipsum 1";
  } else if (company === "lorem-ipsum-2") {
    companyText = "Lorem Ipsum 2";
  }

  // Store the text instead of updating an HTML element
  attendanceHeaderText = `${typeText} > ${companyText}`;
}

// Ensure dropdown selections update the stored header text
document.getElementById("attendance-type").addEventListener("change", updateAttendanceHeader);
document.getElementById("attendance-company").addEventListener("change", updateAttendanceHeader);

// Keep the filtering message when clicking "Go"
function filterAttendance() {
  alert("Filtering attendance for: " + attendanceHeaderText);
}
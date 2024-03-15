var currentMonth = new Date().getMonth();
var holidayHours = document.getElementById("Holiday");

if (currentMonth === 10) {
  holidayHours.innerHTML += "<p>We will be closed on Thanksgiving Day.</p>";
} else if (currentMonth === 11) {
  holidayHours.innerHTML += "<p>We will be closed on Christmas Day.</p>";
}

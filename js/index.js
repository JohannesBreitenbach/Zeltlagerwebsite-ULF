console.log("Hello")
const activePage = window.location.pathname;
const navLinks = Array.from(document.querySelectorAll('nav a')).forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('nav-selected')
        console.log("Hello")
    }
});

function setCountdownValue() {
    let nextCamp = new Date("2024-07-26T00:00:00");
    let now = new Date();
    let difference = nextCamp - now;
  
    // Calculating time difference in days, hours, minutes, and seconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    // Displaying the countdown
    document.getElementById("countdown").innerHTML = days;
  }
  
  // Call the function immediately
setCountdownValue();
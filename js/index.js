import { CountUp } from './countUp.min.js';

//Active Navbar
const activePage = window.location.pathname;
const navLinks = Array.from(document.querySelectorAll('nav a')).forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('nav-selected')
        console.log("Hello")
    }
});

//Counter Days
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
    const countUp = new CountUp('countdown', days, { enableScrollSpy: true });
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}

// Call the function immediately
setCountdownValue();

//FOOTER
const scriptURL = 'https://script.google.com/macros/s/AKfycbzeceool1UJ8gT4FykVZGnG1UYhbLT39i_Wy0tzDnGM9tvWrFNtpfZx0NBrmHFfhKyYtA/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            let formData = new FormData(form);
            formData.append("email", document.getElementById('footer-email-input').value)
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    // Get the snackbar DIV
                    var x = document.getElementById("snackbar");
                    // Add the "show" class to DIV
                    x.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    form.reset();
                })
                .catch(error => {
                    // Get the snackbar DIV
                    var x = document.getElementById("snackbar");
                    x.textContent = "Hmm.. da hat etwas nicht funktioniert, versuchen Sie es bitte später erneut!"
                    // Add the "show" class to DIV
                    x.className = "show";
                    // After 3 seconds, remove the show class from DIV
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                })
        })
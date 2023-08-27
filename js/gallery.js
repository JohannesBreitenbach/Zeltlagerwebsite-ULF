const activePage = window.location.pathname;
const navLinks = Array.from(document.querySelectorAll('nav a')).forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('nav-selected')
        console.log("Hello")
    }
});

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
console.log("DGINSOGHSOIDGHSOÄUGHOIUH")

function openFullImg(src){
    fullImgBox.style.display = "flex";
    fullImg.src = src;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

fullImgBox.addEventListener("click", e => {
    if(e.target != e.currentTarget){
        return;
    }
    fullImgBox.style.display = "none";
})
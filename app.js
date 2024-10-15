
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");



// AOS.init({
//     duration:800,
//     delay:400
//   });

// Home page
document.querySelectorAll('.navbar .links a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.navbar .links a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item'); // Select all items in the slider
const intervalTime = 3000; // Set the interval time (in milliseconds)
let currentIndex = 0;

function showNextImage() {
    // Move the current image to the end of the slider
    slider.append(items[currentIndex]);
    currentIndex = (currentIndex + 1) % items.length; // Update the index
}

function activate(e) {
    if (e.target.matches('.next')) {
        showNextImage(); // Show next image on click
    } else if (e.target.matches('.prev')) {
        slider.prepend(items[(currentIndex - 1 + items.length) % items.length]); // Move the previous item to the start
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Update the index
    }
}

document.addEventListener('click',activate,false);


// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
setInterval(showNextImage, intervalTime); 

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Museum locator


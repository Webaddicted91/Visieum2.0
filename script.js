import { museums } from './data21.js';


// Select the path by its ID
//const path = document.getElementById('IN-AN');
const description = document.getElementById('desc');
const cardTitle = document.getElementById('cardTitle');
const cardImage = document.getElementById('museumImage');




const changeInfo = (regionName) => {
    console.log(regionName);

    museums.forEach(museum => {
        if(regionName == museum.state){
            cardTitle.innerText = museum.museumName;
            description.innerText = museum.description;
            cardImage.src = museum.img;
        }
    });
}

// Repeat for other paths or use a loop to attach event listeners to all paths
const paths = document.querySelectorAll('path');

paths.forEach(function(p) {
    p.addEventListener('click', function(event) {
        const regionName = event.target.getAttribute('data-name');
        changeInfo(regionName);
        //alert(`You clicked on: ${regionName}`);
        // You can perform different actions based on the ID or data attributes
    });
});
// booking section js
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Get form values
    const visitDate = document.getElementById('visitDate').value;
    const visitTime = document.getElementById('visitTime').value;
    const numVisitors = document.getElementById('numVisitors').value;
    const email = document.getElementById('email').value;

    // Simple validation check (you can add more advanced validation as needed)
    if (visitDate && visitTime && numVisitors > 0 && email) {
        // Show confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
    } else {
        alert('Please fill out all fields correctly.');
    }
});
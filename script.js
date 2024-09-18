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

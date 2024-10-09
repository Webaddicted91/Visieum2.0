// Function to handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    m
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        nation: document.getElementById('nation').value,
        gender: document.getElementById('gender').value,
        language: document.getElementById('language').value,
        dob: document.getElementById('dob').value,
        description: document.getElementById('description').value
    };

   
    console.log("Form submitted with data:", formData);

   
    alert('Profile updated successfully!');
});

// Cancel button functionality
const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.addEventListener('click', function() {
   
    form.reset();
    alert('Edit cancelled.');
});

// Logout button functionality
const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", function() {
    alert('Logging out...');
   
    window.location.href = 'index.html';
});

// Delete account button functionality
const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", function() {
    alert('Account deleted');
   e
    window.location.href = 'index.html';
});


// Get the file input and image elements
const uploadInput = document.getElementById('upload');
const profileImage = document.getElementById('profile-image');

// Add an event listener to the file input
uploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          
            profileImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

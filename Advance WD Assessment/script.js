// Image Array containing image paths
const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

// Variable to keep track of the current image index
let currentIndex = 0;

// Selecting DOM elements
const sliderImage = document.getElementById("slider-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update the image source based on currentIndex
function updateImage() {
    sliderImage.src = images[currentIndex];
    console.log(`Current Image: ${images[currentIndex]}`);
}

// Next Button Click Event
nextBtn.addEventListener("click", function() {
    if (currentIndex < images.length - 1) {
        currentIndex++; // Move to next image
    } else {
        currentIndex = 0; // Loop back to first image
    }
    updateImage();
});

// Previous Button Click Event
prevBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--; // Move to previous image
    } else {
        currentIndex = images.length - 1; // Loop back to last image
    }
    updateImage();
});

// Initial Image Load
updateImage();

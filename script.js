document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const image = document.getElementById('image');

    toggleButton.addEventListener('click', function() {
        if (image.src.endsWith('image1.jpg')) {
            image.src = 'image2.jpg';
            image.alt = 'Image 2';
        } else {
            image.src = 'image1.jpg';
            image.alt = 'Image 1';
        }
    });
});

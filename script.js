document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Change header color when clicked
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        this.style.backgroundColor = '#e0e0e0';
    });
});
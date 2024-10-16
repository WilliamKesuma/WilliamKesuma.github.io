// Smooth scrolling for the "Explore Now" button
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth' });
});

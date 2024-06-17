document.addEventListener('DOMContentLoaded', function() {
    // Select the element to animate
    const animateElement = document.querySelector('.animate-on-scroll');

    // Options for the IntersectionObserver
    const options = {
        root: null, // null uses the viewport as the observer
        rootMargin: '0px', // no margin
        threshold: 0.5 // 50% of the element is visible
    };

    // Callback function to handle intersection changes
    const callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animate class if in view
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(callback, options);

    // Observe the target element
    observer.observe(animateElement);
});

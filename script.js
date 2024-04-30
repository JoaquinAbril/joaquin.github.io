document.addEventListener('DOMContentLoaded', function() { // Executes when the DOM content is loaded
    const sections = document.querySelectorAll('section'); // Selects all sections
    sections.forEach(section => { // Iterates through each section
        section.addEventListener('click', function() { // Adds click event listener to each section
            this.style.backgroundColor = '#f0f0f0'; // Changes background color of the clicked section
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Selects all anchor elements with href attribute starting with #
    anchor.addEventListener('click', function (e) { // Adds click event listener to each anchor element
        e.preventDefault(); // Prevents default anchor behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({ // Scrolls to the target element smoothly
            behavior: 'smooth' // Specifies the scrolling behavior
        });
    });
});

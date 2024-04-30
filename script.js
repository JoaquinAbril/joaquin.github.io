document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Selects all anchor elements with href attribute starting with #
    anchor.addEventListener('click', function (e) { // Adds click event listener to each anchor element
        e.preventDefault(); // Prevents default anchor behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({ // Scrolls to the target element smoothly
            behavior: 'smooth' // Specifies the scrolling behavior
        });
    });
});

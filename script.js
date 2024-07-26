document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('close');

    // Function to show the active section
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    // Event listener for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
            // Hide the menu after clicking a link (for mobile view)
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                closeBtn.classList.remove('active');
            }
        });
    });

    // Toggle the navigation menu (hamburger)
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        closeBtn.classList.toggle('active');
    });

    // Close the navigation menu
    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        closeBtn.classList.remove('active');
    });

    // Show the default section on page load
    showSection('about');
});

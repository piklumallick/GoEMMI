document.addEventListener('DOMContentLoaded', () => {
    // Get the current page filename (e.g., "index.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        // Remove existing active classes just in case
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // If the link's href matches the current page, highlight it
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});
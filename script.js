function opentab(tabname) {
    var i;
    var x = document.getElementsByClassName("tab-contents");
    var y = document.getElementsByClassName("tab-links");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-tab");
    }
    for (i = 0; i < y.length; i++) {
        y[i].classList.remove("active-link");
    }
    document.getElementById(tabname).classList.add("active-tab");
    document.querySelector(`[onclick="opentab('${tabname}')"]`).classList.add("active-link");

    // Hide the tab content after 3 seconds
    setTimeout(function() {
        document.getElementById(tabname).classList.remove("active-tab");
        document.querySelector(`[onclick="opentab('${tabname}')"]`).classList.remove("active-link");
    }, 3000); // 3000 milliseconds = 3 seconds
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust offset if needed
                behavior: 'smooth'
            });
        }
    });
});

// Toggle the mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');

        // Auto close the menu after 10 seconds
        if (navMenu.classList.contains('show')) {
            setTimeout(function() {
                navMenu.classList.remove('show');
            }, 10000); // 10000 milliseconds = 10 seconds
        }
    });
});

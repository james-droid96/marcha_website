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
}
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
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

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = event.target.NAME.value.trim();
    const email = event.target.EMAIL.value.trim();
    const message = event.target.MESSAGE.value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (you can replace this with an actual API call)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    event.target.reset();
});
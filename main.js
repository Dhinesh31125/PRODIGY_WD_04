document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    if (name.value.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
    }

    if (email.value.trim() === '') {
        isValid = false;
        alert('Please enter your email.');
    } else if (!validateEmail(email.value)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (message.value.trim() === '') {
        isValid = false;
        alert('Please enter your message.');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.submit();
    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

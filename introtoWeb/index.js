document.getElementById("contactForm").addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#fname').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    const phone = document.querySelector('#phone').value.trim();

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let valid = true;
    if (!name) {
        document.querySelector('#fnameerror').textContent = "Name is required";
        valid = false;
    }

    if (!email) {
        document.querySelector('#emailError').textContent = "Email is required";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.querySelector('#emailError').textContent = "Email is invalid";
        valid = false;
    }

    if (!message) {
        document.querySelector('#messageError').textContent = "Message is required";
        valid = false;
    }

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Use format: 123-456-7890';
        valid = false;
    }

    if (valid) {
        alert(`Thank you ${name}, we will get back to you soon!`);
        document.getElementById("contactForm").reset();
    }
}
)
// ======== Navbar ========

const hamburger = document.querySelector('.hamburger');
const navNavbar = document.querySelector('.navbar-nav');
const links = document.querySelectorAll('.navbar .navbar-nav .nav-ul .nav-item .nav-link');

let open = false;

hamburger.addEventListener('click', () => {
    if (open) {
        navNavbar.style.left = '-100%';
    } else {
        navNavbar.style.left = '0px';
    }

    open = !open;
});

if (innerWidth < 700) {
    Array.from(links).forEach(link => {
        link.addEventListener('click', () => {
            if (open) {
                navNavbar.style.left = '-100%';
                open = !open
            }
        });
    });
}

// ======== Form Validation ========

const nameValidation = name => !(name == null || name == '');
const emailValidation = email => /(^[a-zA-Z])*@*\.com$/.test(email);
const msgValidation = message => !(message == null || message == '');

// ======== Contact Form ========

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.form.name.value;
    const email = document.form.email.value;
    const msg = document.form.msg.value;

    const details = {
        name,
        email,
        msg
    }

    let error = false;

    if (
        nameValidation(name) &&
        emailValidation(email) &&
        msgValidation(msg)
    ) {
        alert(`${name} your Form has Submited`);
        console.log(details);
    } else {
        error = true;
        alert('Invaild Details');
    }

    // ========== Sending Data to the Server =========

    // if (!error) {
    //     const url = 'http://myServer.com';
    //     const params = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(details)
    //     };
    //     fetch(url, params)
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }
});
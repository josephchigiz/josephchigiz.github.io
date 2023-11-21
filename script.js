// *  JS Script for my web portfolio


// *** Sticky Bar ***//
const navbar = document.querySelector("header");
let scrolling = false; //This will track scrolling

function stickyNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
        scrolling = true;

        //flag is set to true if scrolling is detected
        //hence removes sticky bar after a certain period of inacticity

        setTimeout(() => {
            if (!scrolling) {
                navbar.classList.remove('sticky');
            }
        }, 200);
    } else {
        navbar.classList.remove('sticky');
        scrolling = false;
    }
}

window.addEventListener('scroll', stickyNavbar);


// *** email validation *** //
const btn = document.getElementById('button');

document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_im542yk';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent Successfully!');
    }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
    });
});
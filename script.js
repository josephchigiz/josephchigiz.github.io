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
function emailValidation(userInput) {
    var mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userInput.value.match(mailFormat)) {
        document.contact-form.email.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.contact-form.email.focus();
        return false;
    }
}

/* =========================================
   TYPED TEXT
========================================= */

const typed = new Typed(".text", {
    strings: [
        "Full Stack Developer",
        
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: false,
});


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const percent = document.getElementById("percent");
    const mainContent = document.getElementById("main-content");

    let count = 0;

    // Make sure website is hidden initially
    if (mainContent) {
        mainContent.style.display = "none";
    }

    const loading = setInterval(function () {

        count++;

        if (percent) {
            percent.textContent = count + "";
        }

        const progress = document.getElementById("loader-progress");

        if (progress) {
            progress.style.width = count + "%";
        }

        if (count >= 100) {

            clearInterval(loading);

            // Small delay for smoother transition
            setTimeout(function () {

                if (loader) {
                    loader.classList.add("loader-hide");
                }

                if (mainContent) {
                    mainContent.style.display = "block";
                }

                // Completely remove loader after animation
                setTimeout(function () {
                    if (loader) {
                        loader.style.display = "none";
                    }
                }, 700);

            }, 300);
        }

    }, 25);

});


/* =========================================
   PARTICLES
========================================= */

window.addEventListener("load", function () {

    if (typeof particlesJS !== "undefined") {

        particlesJS("particles-js", {

            particles: {

                number: {
                    value: 65,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },

                color: {
                    value: "#00eaff"
                },

                shape: {
                    type: "circle"
                },

                opacity: {
                    value: 0.35,
                    random: true
                },

                size: {
                    value: 2.5,
                    random: true
                },

                line_linked: {
                    enable: true,
                    distance: 140,
                    color: "#00eaff",
                    opacity: 0.12,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }

            },

            interactivity: {

                detect_on: "canvas",

                events: {

                    onhover: {
                        enable: true,
                        mode: "grab"
                    },

                    onclick: {
                        enable: true,
                        mode: "push"
                    },

                    resize: true

                },

                modes: {

                    grab: {
                        distance: 160,
                        line_linked: {
                            opacity: 0.3
                        }
                    },

                    push: {
                        particles_nb: 3
                    }

                }

            },

            retina_detect: true

        });

    }

});


/* =========================================
   EMAILJS
========================================= */
(function () {
    // Initialize EmailJS
    if (typeof emailjs !== "undefined") {
        emailjs.init("xc1gPdZCN41Iq6z6e");
    }
})();


/* =========================================
   CONTACT FORM
========================================= */

window.addEventListener("load", function () {

    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return;


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* =========================================
           SUBMIT BUTTON
        ========================================= */

        const submitButton = contactForm.querySelector(".submit-btn");

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "SENDING...";
        }


        /* =========================================
           GET FORM VALUES

           1. Name
           2. Email
           3. Location
           4. Phone Number
           5. Message
        ========================================= */

        const name =
            contactForm.elements["from_name"]?.value.trim();

        const email =
            contactForm.elements["from_email"]?.value.trim();

        const location =
            contactForm.elements["location"]?.value.trim();

        const phone =
            contactForm.elements["phone"]?.value.trim();

        const message =
            contactForm.elements["message"]?.value.trim();


        /* =========================================
           VALIDATE FORM
        ========================================= */

        if (!name || !email || !location || !phone || !message) {

            Toastify({
                text: "Please fill in all required fields ⚠️",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#ff9800"
                }
            }).showToast();


            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "SEND MESSAGE";
            }

            return;
        }


        /* =========================================
           CHECK EMAILJS
        ========================================= */

        if (typeof emailjs === "undefined") {

            Toastify({
                text: "Email service not loaded. Please refresh and try again ❌",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#ff3d3d"
                }
            }).showToast();


            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "SEND MESSAGE";
            }

            return;
        }


        /* =========================================
           SEND EMAIL
        ========================================= */

        emailjs.sendForm(
            "service_smr7ike",
            "template_fcv75mk",
            contactForm
        )

        .then(function () {

            Toastify({
                text: "Message Sent Successfully ✅",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#00c853"
                }
            }).showToast();


            // Clear form
            contactForm.reset();


            // Reset button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "SEND MESSAGE";
            }

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);


            Toastify({
                text: "Message Failed to Send ❌",
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "#ff3d3d"
                }
            }).showToast();


            // Reset button
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = "SEND MESSAGE";
            }

        });

    });

});
/* =========================================
   NAVBAR ACTIVE SECTION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navButtons = document.querySelectorAll(".navbar button");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navButtons.forEach(function (button) {

        button.classList.remove("active");

        const clickValue = button.getAttribute("onclick");

        if (clickValue && clickValue.includes("'" + current + "'")) {

            button.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-box, .edu-card, .about, .contact-form"
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   PROJECT BUTTON
========================================= */

document.querySelectorAll(".live-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        const url = this.getAttribute("data-url");

        if (url && url !== "#") {

            window.open(url, "_blank");

        }

    });

});
/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    // Open / Close Menu
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navbar.classList.toggle("active");
    });

    // Close when clicking menu item
    document.querySelectorAll(".navbar button").forEach(button => {
        button.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (
            !navbar.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            navbar.classList.remove("active");
        }
    });

}
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       WHATSAPP NUMBER
       Apna number yahan add karo.
       Example:
    ========================================= */

    const whatsappNumber = "8286812215";


    /* =========================================
       PRELOADER
    ========================================= */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (preloader) {

                preloader.style.opacity = "0";

                setTimeout(() => {
                    preloader.style.display = "none";
                }, 600);

            }

        }, 600);

    });


    /* =========================================
       NAVBAR
    ========================================= */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton =
        document.getElementById("menuButton");

    const navMenu =
        document.getElementById("navMenu");


    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        menuButton.textContent =
            navMenu.classList.contains("show")
                ? "✕"
                : "☰";

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            menuButton.textContent = "☰";

        });

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {
        observer.observe(element);
    });


    /* =========================================
       COUNTERS
    ========================================= */

    const counters =
        document.querySelectorAll(".counter");


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const counter = entry.target;

                    const target =
                        Number(
                            counter.dataset.target
                        );

                    let current = 0;

                    const increment =
                        Math.max(
                            1,
                            Math.ceil(target / 70)
                        );


                    const timer =
                        setInterval(() => {

                            current += increment;

                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }

                            counter.textContent =
                                current;

                        }, 25);


                    counterObserver.unobserve(counter);

                });

            },
            {
                threshold: 0.7
            }
        );


    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =========================================
       SERVICE FILTER
    ========================================= */

    const filterButtons =
        document.querySelectorAll(".filter");

    const serviceCards =
        document.querySelectorAll(".service-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
                button.dataset.filter;


            serviceCards.forEach(card => {

                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hide");

                    setTimeout(() => {

                        card.style.animation =
                            "cardAppear .5s ease";

                    }, 10);

                } else {

                    card.classList.add("hide");

                }

            });

        });

    });


    /* =========================================
       SERVICE -> CONTACT FORM
    ========================================= */

    const serviceButtons =
        document.querySelectorAll(".service-button");

    const serviceSelect =
        document.getElementById("service");


    serviceButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedService =
                button.dataset.service;


            if (serviceSelect) {

                serviceSelect.value =
                    selectedService;

            }


            document
                .getElementById("contact")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* =========================================
       3D HERO MOUSE EFFECT
    ========================================= */

    const heroVisual =
        document.querySelector(".hero-visual");

    const heroImage =
        document.querySelector(".hero-image-wrap");


    if (heroVisual && heroImage) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateY =
                    (x - centerX) / 28;

                const rotateX =
                    (centerY - y) / 28;


                heroImage.style.transform =
                    `rotateY(${rotateY}deg)
                     rotateX(${rotateX}deg)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                heroImage.style.transform =
                    "rotateY(-8deg) rotateX(5deg)";

            }
        );

    }


    /* =========================================
       SERVICE CARD 3D TILT
    ========================================= */

    serviceCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const rotateX =
                    (y - rect.height / 2) / 25;

                const rotateY =
                    (rect.width / 2 - x) / 25;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });


    /* =========================================
       FORM
    ========================================= */

    const form =
        document.getElementById("leadForm");

    const formMessage =
        document.getElementById("formMessage");


    form.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const business =
            document.getElementById("business").value.trim();

        const service =
            document.getElementById("service").value;

        const budget =
            document.getElementById("budget").value;

        const details =
            document.getElementById("details").value.trim();

        const privacy =
            document.getElementById("privacy").checked;


        if (
            !name ||
            !phone ||
            !service ||
            !details
        ) {

            showMessage(
                "Please fill all required fields.",
                false
            );

            return;

        }


        if (!privacy) {

            showMessage(
                "Please accept the contact permission.",
                false
            );

            return;

        }


        if (phone.replace(/\D/g, "").length < 10) {

            showMessage(
                "Please enter a valid phone number.",
                false
            );

            return;

        }


        /* CUSTOMER DATA */

        const customerData = {

            name,
            phone,
            email,
            business,
            service,
            budget,
            details,

            submittedAt:
                new Date().toISOString()

        };


        console.log(
            "Customer enquiry:",
            customerData
        );


        showMessage(
            "Enquiry submitted successfully!",
            true
        );


        /* WHATSAPP */

        if (whatsappNumber) {

            const message =
`Hello, I want to enquire about your digital services.

Name: ${name}
Phone: ${phone}
Business: ${business || "Not provided"}
Service: ${service}
Budget: ${budget || "Not specified"}

Project Details:
${details}`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            setTimeout(() => {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }, 700);

        }


        form.reset();

    });


    /* =========================================
       FORM MESSAGE
    ========================================= */

    function showMessage(message, success) {

        formMessage.textContent = message;

        formMessage.style.display = "block";


        if (success) {

            formMessage.style.color =
                "#5ff0bd";

            formMessage.style.background =
                "rgba(0,220,160,.1)";

            formMessage.style.border =
                "1px solid rgba(0,220,160,.2)";

        } else {

            formMessage.style.color =
                "#ff8795";

            formMessage.style.background =
                "rgba(255,60,80,.1)";

            formMessage.style.border =
                "1px solid rgba(255,60,80,.2)";

        }


        setTimeout(() => {

            formMessage.style.display =
                "none";

        }, 5000);

    }


    /* =========================================
       WHATSAPP
    ========================================= */

    function openWhatsApp() {

        if (!whatsappNumber) {

            alert(
                "Please add WhatsApp number in script.js"
            );

            return;

        }


        const message =
            "Hello, I want to know more about your digital services.";


        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            url,
            "_blank"
        );

    }


    document
        .getElementById("whatsappButton")
        .addEventListener(
            "click",
            openWhatsApp
        );


    document
        .getElementById("footerWhatsApp")
        .addEventListener(
            "click",
            openWhatsApp
        );


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backTop =
        document.getElementById("backTop");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================================
       ACTIVE NAV
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-menu a");


    window.addEventListener("scroll", () => {

        let current = "";


        sections.forEach(section => {

            const top =
                section.offsetTop - 180;


            if (window.scrollY >= top) {
                current =
                    section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =========================================
       YEAR
    ========================================= */

    document.getElementById("year").textContent =
        new Date().getFullYear();


    console.log(
        "DigitalPro Premium Website Loaded Successfully 🚀"
    );

});
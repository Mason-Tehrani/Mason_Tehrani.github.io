document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    function setActiveLink() {
        let scrollPosition = window.scrollY + 100; // Adjust offset

        document.querySelectorAll("section").forEach((section) => {
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                links.forEach((link) => link.classList.remove("active"));
                document
                    .querySelector(`nav a[href="#${section.id}"]`)
                    .classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animated-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.add("hidden");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


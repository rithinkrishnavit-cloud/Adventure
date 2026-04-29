document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const faqItems = document.querySelectorAll(".faq-item");

    const updateNavbar = () => {
        if (!nav) {
            return;
        }

        nav.classList.toggle("nav-scrolled", window.scrollY > 24);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-btn");
        
        btn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all other FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-icon").textContent = "+";
            });

            if (!isActive) {
                item.classList.add("active");
                item.querySelector(".faq-icon").textContent = "-";
            }
        });
    });
});
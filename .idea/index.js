document.getElementById("contact").addEventListener("click", function () {
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
        throw new Error("Could not find contact section");
    }
});



document.getElementById("contact").addEventListener("click", function () {
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
        throw new Error("Could not find contact section");
    }
});
document.getElementById('SKILLS').addEventListener("click", function () {
    document.getElementById("skills23").scrollIntoView({ behavior: "smooth" });
})
document.getElementById("about").addEventListener("click", function () {
    document.getElementById("about22").scrollIntoView({ behavior: "smooth" });
})



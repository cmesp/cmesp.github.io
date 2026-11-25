
let contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let subject = document.querySelector("#subject").value.trim();
    let message = document.querySelector("#message").value.trim();

    let nameError = document.querySelector("#name-error");
    let emailError = document.querySelector("#email-error");
    let subjectError = document.querySelector("#subject-error");
    let messageError = document.querySelector("#message-error");
    let successMessage = document.querySelector("#form-success");

    let errorMessages = [nameError, emailError, subjectError, messageError, successMessage];

    errorMessages.forEach(function(error) {
    error.textContent = "";
 });
    let hasError = false;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        hasError = true;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email address.";
        hasError = true;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        hasError = true;
    }

    if (subject === "") {
        subjectError.textContent = "Please enter a subject.";
        hasError = true;
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        hasError = true;
    }

    if (hasError === false) {
        successMessage.textContent = "Thank you for contacting Butter Bun! Your message has been submitted.";
        contactForm.reset();
    }

});

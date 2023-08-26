document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const formData = { name, email, message };

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form data submitted successfully');
                // Reset the form
                contactForm.reset();
            } else {
                console.log('Error submitting form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

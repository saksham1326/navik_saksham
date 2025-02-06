document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    function addClickListener(id, url) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", function (event) {
                if (event) event.preventDefault(); // Prevent form submission (if applicable)
                window.location.href = url;
            });
        } else {
            console.error(`Button with ID '${id}' not found.`);
        }
    }

    addClickListener("google-signin", "https://accounts.google.com/signin");
    addClickListener("facebook-signin", "https://www.facebook.com/login");
    addClickListener("signup-link", "signup.html");
    addClickListener("forgot-password", "forgot-password.html");

    document.getElementById("login-btn")?.addEventListener("click", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email.trim() && password.trim()) {
            // Redirect to a dashboard or home page after login (replace with your actual URL)
            window.location.href = "dashboard.html";
        }
    });
});

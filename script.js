
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("message").textContent =
        "Registration Successful! Welcome " + name;

    console.log("Student Name:", name);
    console.log("Student Email:", email);

});

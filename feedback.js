const scriptURL = "https://script.google.com/macros/s/AKfycbx-_dR4EvLY5E1UMiSgDWMacJZsUEpNXyHO_2pDdxZdJmRrUGusdynNVLJ9WIOwT1s5/exec";

const form = document.getElementById("feedbackForm");
const submitButton = document.querySelector(".continue");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked");
    const comments = document.getElementById("comments").value.trim();

    if (!rating) {

        alert("Please select a rating.");
        return;

    }

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    const formData = new FormData();

    formData.append("rating", rating.value);
    formData.append("comments", comments);

    fetch(scriptURL, {

        method: "POST",

        body: formData

    })

    .then(response => {

        alert("Thank you for your feedback!");

        window.location.href = "review.html";

    })

    .catch(error => {

        console.error("Error:", error);

        submitButton.disabled = false;
        submitButton.innerHTML = "Continue";

        alert("Unable to send feedback. Please try again.");

    });

});
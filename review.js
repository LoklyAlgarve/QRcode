document.addEventListener("DOMContentLoaded", function () {

    // Clear temporary data ready for the next visitor
    localStorage.removeItem("loklyCustomer");
    localStorage.removeItem("loklyFeedback");

    // Replace this with your actual Google Review URL
    const googleReviewURL = "https://www.google.com/";

    const googleButton = document.querySelector(".googleButton");

    if (googleButton) {
        googleButton.href = googleReviewURL;
    }

});
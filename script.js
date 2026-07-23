// =====================================
// LOKLY HOME PAGE
// script.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // Get the three cards
    const rewardCard = document.querySelector(".reward");
    const feedbackCard = document.querySelector(".feedback");
    const reviewCard = document.querySelector(".review");

    // Small press animation
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousedown", () => {
            card.style.transform = "scale(0.98)";
        });

        card.addEventListener("mouseup", () => {
            card.style.transform = "";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

        card.addEventListener("touchstart", () => {
            card.style.transform = "scale(0.98)";
        });

        card.addEventListener("touchend", () => {
            card.style.transform = "";
        });

    });

    // Claim Reward
    rewardCard.addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = "reward.html";

    });

    // Private Feedback
    feedbackCard.addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = "feedback.html";

    });

    // Google Review
    reviewCard.addEventListener("click", function (e) {

        e.preventDefault();

        window.location.href = "review.html";

    });

});
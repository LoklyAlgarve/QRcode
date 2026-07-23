const scriptURL = "PASTE YOUR GOOGLE SCRIPT URL HERE";


document.getElementById("feedbackForm").addEventListener("submit", function(e) {

    e.preventDefault();


    const rating = document.querySelector('input[name="rating"]:checked');

    const comments = document.getElementById("comments").value.trim();



    if (!rating) {

        alert("Please select a rating.");
        return;

    }



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

        alert("Unable to send feedback. Please try again.");


    });


});
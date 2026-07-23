const scriptURL = "https://script.google.com/macros/s/AKfycbx-_dR4EvLY5E1UMiSgDWMacJZsUEpNXyHO_2pDdxZdJmRrUGusdynNVLJ9WIOwT1s5/exec";


const form = document.getElementById("rewardForm");
const submitButton = document.getElementById("submitButton");


form.addEventListener("submit", function(e) {

    e.preventDefault();


    const customer = {

        firstName: document.getElementById("firstName").value.trim(),

        lastName: document.getElementById("lastName").value.trim(),

        email: document.getElementById("email").value.trim(),

        country: document.getElementById("country").value,

        visitor: document.getElementById("visitorType").value,

        partySize: document.getElementById("partySize").value,

        heardAbout: document.getElementById("source").value

    };


    if (
        customer.firstName === "" ||
        customer.lastName === "" ||
        customer.email === "" ||
        customer.country === "" ||
        customer.visitor === "" ||
        customer.partySize === ""
    ) {

        alert("Please complete all required fields.");
        return;

    }


    // Stop double submissions
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";


    const formData = new FormData();


    formData.append("firstName", customer.firstName);

    formData.append("lastName", customer.lastName);

    formData.append("email", customer.email);

    formData.append("country", customer.country);

    formData.append("visitor", customer.visitor);

    formData.append("partySize", customer.partySize);

    formData.append("heardAbout", customer.heardAbout);



    fetch(scriptURL, {

        method: "POST",

        body: formData

    })


    .then(response => {


        localStorage.setItem(
            "loklyCustomer",
            JSON.stringify(customer)
        );


        window.location.href = "voucher.html";


    })


    .catch(error => {


        console.error("Error:", error);


        submitButton.disabled = false;

        submitButton.innerHTML = "Continue";


        alert("Unable to submit registration. Please try again.");


    });


});
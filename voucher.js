const customer = JSON.parse(localStorage.getItem("loklyCustomer"));

function generateVoucherNumber() {

    const today = new Date();

    const year = today.getFullYear().toString().slice(-2);
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const random = Math.floor(1000 + Math.random() * 9000);

    return `LK-${year}${month}${day}-${random}`;

}

// Check if a voucher already exists
let voucherNumber = localStorage.getItem("loklyVoucher");

if (!voucherNumber) {

    voucherNumber = generateVoucherNumber();

    localStorage.setItem("loklyVoucher", voucherNumber);

}

// Display voucher number
document.getElementById("voucherNumber").textContent = voucherNumber;
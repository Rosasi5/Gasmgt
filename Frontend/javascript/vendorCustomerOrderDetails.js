function returnToOrderspage() {
    window.location.href = 'vendorOrdersPage.html';
}

function showPaymentContainer() {
    //Show the payment container
    document.getElementById('paymentAmountContainerDiv').style.display = "block";

    //blur the background
    document.body.classList.add("blur");

}
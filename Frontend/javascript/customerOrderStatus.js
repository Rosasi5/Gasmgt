/*window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
    // Check the origin of the sender
    if (event.origin !== 'https://vendorCustomerOrderDetails.html') {
        return;
    }

    // Handle the message
    if (event.data.type === 'orderAccepted') {
        const enteredAmount = event.data.amount;
        displayOrderAcceptedAlert(enteredAmount);
    }
}

function displayOrderAcceptedAlert(enteredAmount) {
    alert(`Your order has been accepted. Amount to be paid: ${enteredAmount}`);
}*/


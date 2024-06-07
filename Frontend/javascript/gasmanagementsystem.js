function navigatetocustomervendorsigningpage() {
     window.location.href = "customervendorsigningpage.html";
    }

function navigatetoaccountdetailsform() {
    window.location.href = "accountdetailsform.html";
}

/*function navigateToCustomerHomePage() {
    window.location.href = "customerHomePage.html";
}*/

function navigateToVendorAccountDetailsform() {
    window.location.href = "VendorAccountDetailsForm.html";
}

function changeColor() {
    document.getElementById('accountcreatebutton').style.backgroundColor = 'white';
}

function restoreButtonColor() {
    document.getElementById('accountcreatebutton').style.backgroundColor = ''
}

function changeCustomerButtonColor() {
    document.getElementById('customerbutton').style.backgroundColor = 'darkorange';
}

function restoreCustomerButtonColor() {
    document.getElementById('customerbutton').style.backgroundColor = '';
}

function changeVendorButtonColor() {
    document.getElementById('gasvendorbutton').style.backgroundColor = 'burlywood';
}

function restoreVendorButtonColor() {
    document.getElementById('gasvendorbutton').style.backgroundColor = '';
}

function changeSubmitFormButtonColor() {
    document.getElementById('createAccountButton').style.backgroundColor = 'burlywood';
}

function restoreSubmitFormButtonColor() {
    document.getElementById('createAccountButton').style.backgroundColor = '';
}

function changeClickToRefillButtonColor() {
    document.getElementById('clickHereToRefillBtnDiv').style.backgroundColor = 'Cyan';
}

function restoreClickToRefillButtonColor() {
    document.getElementById('clickHereToRefillBtnDiv').style.backgroundColor = '';
}

function navigateToCustomerGasOrderDetails() {
    window.location.href = "customerGasOrderDetails.html";
}

function changePlaceOrderBtnColor() {
    document.getElementById('placeOrderBtn').style.backgroundColor = '#00004d';
}

function restorePlaceOrderBtnColor() {
    document.getElementById('placeOrderBtn').style.backgroundColor = '#9999ff';
}

function navigateToCustomerOrderStatus() {
    window.location.href = "customerOrderStatus.html";
}


/*........customer order status track delivery button javascript.....*/

function navigateToVendorProfilePage() {
    window.location.href = "vendorProfilePage.html"
}

function changetrackDeliveryButtonColor() {
    document.getElementById('trackDeliveryButton').style.backgroundColor = 'darkgoldenrod';
}

function restoretrackDeliveryButtonColor() {
    document.getElementById('trackDeliveryButton').style.backgroundColor = '';
}


/*..............Vendor Account Details........*/ 

function navigateToVendorHomePage() {
    window.location.href = "vendorHomePage.html";
}


/*..............Vendor Home Page...............*/

function changeGoToOrdersBtnColor() {
    document.getElementById('Go-to-orders-button').style.backgroundColor = '#fc6203';
}

function restoreGoToOrdersBtnColor() {
    document.getElementById('Go-to-orders-button').style.backgroundColor = '';
}

function changeSaveBtnColor() {
    document.getElementById('save-btn').style.backgroundColor = '#03fc98';
}

function restoreSaveBtnColor() {
    document.getElementById('save-btn').style.backgroundColor = '';
}

function changeEditBtnColor() {
    document.getElementById('edit-btn').style.backgroundColor = '#036bfc';
}

function restoreEditBtnColor() {
    document.getElementById('edit-btn').style.backgroundColor = '';
}

function navigateToVendorOrdersPage() {
    window.location.href = "vendorOrdersPage.html";
}

function saveProfile() {
    const fields = document.querySelectorAll('.underline');
    fields.forEach(field => {
        field.setAttribute('contenteditable', 'false')
    });
}

function enableEditing() {
    const fields = document.querySelectorAll('.underline');
    fields.forEach(field => {
        field.setAttribute('contenteditable', 'true');
    });
}



/*..........Vendor Order Page Javascript.............*/




/*........VENDOR CUSTOMER ORDER DETAILS PAGE............ */



/*.....Get Vendor Location......*/


let vendorWatchId; // Declare the global variable
let customerWatchId;

function goToVendorMapLocation() {
    window.location.href = 'vendorMapLocation.html';
}

function getVendorLocation() {
    const mapElement = document.getElementById('map');
    const stopLocation = document.getElementById('stopLocation');

    // Show the "Stop Showing Location" button
    stopLocation.style.display = 'inline';

    // Watch the user's position
    vendorWatchId = navigator.geolocation.watchPosition(
        position => {
            console.log(position);
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            // Scroll and display map with latitude / longitude.
            scrollMap(mapElement, latitude, longitude);
        },
        handleError
    );
    //window.watchId = vendorWatchId;
}

function scrollMap(latitude, longitude) {
    const mapElement = document.getElementById('map');
    // Scroll map to latitude / longitude.
    
    mapElement.innerHTML = `<iframe width="800" height="600" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`;
}

function stopShowingVendorLocation() {
    const mapElement = document.getElementById('map');
    const stopLocation = document.getElementById('stopLocation');

    // Hide the "Stop Showing Location" button
    stopLocation.style.display = 'none';

    // Stop watching the user's position using the correct watchId
    navigator.geolocation.clearWatch(vendorWatchId);

    // Clear the map
    mapElement.innerHTML = '';
}

function returnToVendorProfilePage() {
    window.location.href = 'vendorProfilePage.html';
}

function handleError(error) {
    // Display error based on the error code.
    const { code } = error;
    switch (code) {
        case PositionError.TIMEOUT:
            // Handle timeout.
            console.error("Geolocation request timed out.");
            break;
        case PositionError.PERMISSION_DENIED:
            // User denied the request.
            console.error("User denied geolocation request.");
            break;
        case PositionError.POSITION_UNAVAILABLE:
            // Position not available.
            console.error("Geolocation information is not available.");
            break;
        default:
            // Handle other error cases.
            console.error("An error occurred:", error.message);
            break;
    }
}



/*..............SHOWING CUSTOMER'S LOCATION WHEN VENDOR CLICKS ACCEPT ORDER BUTTON.......... */



/*function goToCustomerMap() {
    //retrieve the entered amount
    const enteredAmount = document.getElementById('amountToBePaidTextArea').value;
    
    //send a message to the customer order status.html page
    window.parent.postMessage({
        type: 'orderAccepted',
        amount: enteredAmount
    }, 'customerOrderStatus.html');


    window.location.href = 'customerMapLocation.html';

    // Remove the blur effect
    document.body.classList.remove("blur");

    // Optionally, you can add additional logic for the amountSubmitBtn here
}*/



/*window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
    // Check the origin of the sender
    console.log('Message received:', event.data);

    if (event.origin !== 'https://127.0.0.1:5500') {
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





function showCustomerLocation() {
    const mapElement = document.getElementById('mapCustomer');
    const stopCustomerLocation = document.getElementById('stopCustomerLocation');

    //show the stopCustomerLocation button
    stopCustomerLocation.style.display = 'inline';

    // Watch the user's position
    customerWatchId = navigator.geolocation.watchPosition(
        position => {
            const { latitude, longitude } = position.coords;
            // Scroll and display map with latitude / longitude.
            scrollMap(mapElement, latitude, longitude);
        },
        handleError
    );

    // Store the watchId in a global variable so that it can be accessed later
    //window.watchId = customerWatchId;
}

function scrollMap(mapElement, latitude, longitude) {
        //const mapElement = document.getElementById('mapCustomer');
        // Scroll map to latitude / longitude.
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        mapElement.innerHTML = `<iframe width="1700" height="900" src="https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed"></iframe>`;
    }

function stopShowingCustomerLocation() {
    const mapElement = document.getElementById('mapCustomer');
    const stopLocation = document.getElementById('stopCustomerLocation');

    // Hide the "Stop Showing Location" button
    stopCustomerLocation.style.display = 'none';

    // Stop watching the user's position using the correct watchId
    navigator.geolocation.clearWatch(customerWatchId);

    // Clear the map
    mapElement.innerHTML = '';

}

function returnToVendorCustomerOrderDetailsPage() {
    window.location.href = 'VendorCustomerOrderDetails.html';
}




/*...........REVIEWS JAVASCRIPT...................... */


    /*document.addEventListener("DOMContentLoaded", function(){
        const writeReviewLink = document.getElementById("writeReviewLink");
        const customerReview = document.getElementById("customerReview");

        writeReviewLink.addEventListener("click", function() {
            customerReview.style.display = 'block';

        });

        function submitReview() {
            //////////////
            customerReview.style.display = 'none';
        }

    })*/



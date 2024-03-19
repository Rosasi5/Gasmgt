document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sideMenuButtons');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            button.style.backgroundColor = '#6b03fc';
        });

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = 'lightsteelblue';
        })
    })
})

function loadCustomerOrderDetailsPage() {
    window.location.href = 'VendorCustomerOrderDetails.html';
}
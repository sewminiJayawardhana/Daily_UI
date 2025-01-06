// Get the buttons by their IDs
const monthlyPayButton = document.getElementById('monthly-pay');
const yearlyPayButton = document.getElementById('yearly-pay');

// Add event listeners to the buttons
monthlyPayButton.addEventListener('click', function() {
    alert('Add your card details for the Monthly Plan.');
});

yearlyPayButton.addEventListener('click', function() {
    alert('Add your card details for the Yearly Plan.');
});

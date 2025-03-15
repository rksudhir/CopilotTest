
// Function to show "Thank you" message and navigate to the portfolio page
function showThankYouAndNavigate() {
    alert("Thank you for your feedback!");
    window.location.href ="index.html"; // Replace with the actual path to your portfolio page
}

// Example usage: Add an event listener to a button on the feedback form page
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitFeedbackButton").addEventListener("click", showThankYouAndNavigate);
});


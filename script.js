

// Example usage: Add an event listener to a button on the feedback form page
//document.addEventListener("DOMContentLoaded", function() {
//    document.getElementById("submitFeedbackButton").addEventListener("click", showThankYouAndNavigate);
//});

// Function to validate form inputs
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const feedback = document.getElementById("feedback").value.trim();
    let isValid = false;
    if (!name || !email || !feedback) {
        alert("Please fill out all fields before submitting.");
        return false;
    }
    document.getElementById("email").value = "abcd";
    
    return true;
    
}

document.getElementById("submitFeedbackButton").addEventListener("click", function() {
    if (validateForm()) {
        alert("Thank you for your feedback!");
        window.location.href = "index.html"; // Replace with the actual path to your portfolio page
    }
});

// Add event listener for the Cancel button
document.getElementById("cancelFeedbackButton").addEventListener("click", function() {
        window.location.href = "index.html"; // Replace with the actual path to your portfolio page
});
// Function to show "Thank you" message and navigate to the portfolio page
function showThankYouAndNavigate() {
    if (validateForm()) {
        alert("Thank you for your feedback!");
        window.location.href = "index.html"; // Replace with the actual path to your portfolio page
    }
}




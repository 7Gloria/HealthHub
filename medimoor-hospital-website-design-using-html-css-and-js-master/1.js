// Function to display the confirmation modal
function showConfirmation() {
    var modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';
}

// Function to close the confirmation modal
function closeConfirmation() {
    var modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('confirmationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
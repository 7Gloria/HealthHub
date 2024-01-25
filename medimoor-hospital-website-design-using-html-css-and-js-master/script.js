
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Add your logic for form submission and appointment scheduling here
    
    // Simulate email confirmation (replace with actual logic)
    sendConfirmationEmail();

    alert('Appointment scheduled successfully! Confirmation email sent.');
    // You can redirect or perform additional actions as needed
});

function sendConfirmationEmail() {
    // Add logic to send confirmation email using backend (JavaMailSender, etc.)
    // This is a placeholder function, replace with actual implementation
}
function submitPrescription() {
    const patientName = document.getElementById('patientName').value;
    const medication = document.getElementById('medication').value;
    const instructions = document.getElementById('instructions').value;

    // You can handle the prescription data here, for example, by sending it to the server
    // For simplicity, let's just log the data to the console in this example
    console.log('Prescription Data:');
    console.log('Patient Name:', patientName);
    console.log('Medication:', medication);
    console.log('Instructions:', instructions);

    // You can also perform additional actions like storing the prescription data in a database
    // or redirecting the user to another page
    alert('Prescription submitted successfully!');
}
function submitLabReport() {
    const patientName = document.getElementById('patientName').value;
    const testType = document.getElementById('testType').value;
    const testResult = document.getElementById('testResult').value;

    // You can handle the lab report data here, for example, by sending it to the server
    // For simplicity, let's just log the data to the console in this example
    console.log('Lab Report Data:');
    console.log('Patient Name:', patientName);
    console.log('Test Type:', testType);
    console.log('Test Result:', testResult);

    // You can also perform additional actions like storing the lab report data in a database
    // or redirecting the user to another page
    alert('Lab Report submitted successfully!');
}
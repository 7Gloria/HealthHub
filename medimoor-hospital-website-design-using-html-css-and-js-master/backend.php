<?php
// Simulating a database of doctors
$doctors = array(
    array('name' => 'Dr. John Doe', 'specialty' => 'cardiologist', 'location' => 'City A'),
    array('name' => 'Dr. Jane Smith', 'specialty' => 'dermatologist', 'location' => 'City B'),
    // Add more doctors as needed
);

// Get the user's selected specialty
$selectedSpecialty = isset($_GET['specialty']) ? $_GET['specialty'] : '';

// Filter doctors based on the selected specialty
$filteredDoctors = array_filter($doctors, function ($doctor) use ($selectedSpecialty) {
    return strtolower($doctor['specialty']) === strtolower($selectedSpecialty);
});

// Display search results
foreach ($filteredDoctors as $doctor) {
    echo '<div>';
    echo '<h3>' . $doctor['name'] . '</h3>';
    echo '<p>Specialty: ' . $doctor['specialty'] . '</p>';
    echo '<p>Location: ' . $doctor['location'] . '</p>';
    echo '</div>';
}
?>

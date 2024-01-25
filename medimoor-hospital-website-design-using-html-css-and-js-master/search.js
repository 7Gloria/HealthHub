function searchDoctors() {
    var specialty = document.getElementById('specialty').value;

    // Use AJAX to send a request to the server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                displayResults(xhr.responseText);
            } else {
                alert('Error fetching data: ' + xhr.status);
            }
        }
    };

    // Replace 'backend.php' with the actual backend script handling the search
    xhr.open('GET', 'backend.php?specialty=' + encodeURIComponent(specialty), true);
    xhr.send();
}

function displayResults(data) {
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = data;
}

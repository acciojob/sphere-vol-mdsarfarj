function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the radius value from the input field
    const radiusInput = document.getElementById("radius");
    const radius = parseFloat(radiusInput.value);

    // Check if the radius is a valid number
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the "Volume" field with the calculated volume
    const volumeField = document.getElementById("volume");
    volumeField.value = volume.toFixed(2);
}

// Attach the volume_sphere() function to the form's onsubmit event
window.onload = function() {
    const form = document.getElementById('MyForm');
    form.onsubmit = volume_sphere;
};

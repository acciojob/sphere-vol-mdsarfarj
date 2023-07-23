function volume_sphere() {
    //Write your code here
   const radiusInput = document.getElementById("radius");
    const radius = parseFloat(radiusInput.value);

    // Check if the radius is a valid number
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return false; // Returning false prevents the form from submitting
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Update the "Volume" field with the calculated volume
    const volumeField = document.getElementById("volume");
    volumeField.value = volume.toFixed(2);

    return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

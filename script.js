// Function to calculate the volume of a sphere
function volume_sphere(radius) {
    // Ensure the input is a number
    radius = parseFloat(radius);

    // Check if the input is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume using the formula: V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        
        // Return the calculated volume as a string with 2 decimal places
        return volume.toFixed(2);
    } else {
        // If the input is not a valid number, return an error message
        return "Invalid input. Please enter a valid number for the radius.";
    }
}

// Function to handle form submission
document.getElementById("MyForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the user input for radius
    const radiusInput = document.getElementById("radius");
    const radiusValue = radiusInput.value;

    // Call the volume_sphere function and display the result
    const volumeResult = volume_sphere(radiusValue);
    document.getElementById("volume").value = volumeResult;
});

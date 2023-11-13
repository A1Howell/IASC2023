function addNumbers() {
    // Get the values from the input fields
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Convert the input values to numbers
    var num1AsNumber = parseFloat(num1);
    var num2AsNumber = parseFloat(num2);

    // Add the numbers together
    var total = num1AsNumber + num2AsNumber;

    // Display the total in the output element
    document.getElementById("output").innerText = total;
}

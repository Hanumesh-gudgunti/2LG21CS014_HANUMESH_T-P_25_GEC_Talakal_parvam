<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Example 1</title>
</head>

<body>

    <div>
        <label for="txt1">value 1</label>
        <input type="text" id="txt1" name="fname" placeholder="">
    </div>
    <div>
        <label for="txt2">value 2</label>
        <input type="text" id="txt2" name="lastname1" placeholder="">
    </div>
    <div>
        <label for="txt3">value 3</label>
        <input type="text" id="txt3" name="lastname2" placeholder="">
    </div>
    <div>
        <button onclick="processInputs()">Submit</button>
    </div>
    <h2 style="color:chocolate" id="flname"></h2>

    <script>
        function processInputs() {
            var val1 = document.getElementById('txt1').value;
            var val2 = document.getElementById('txt2').value;
            var val3 = document.getElementById('txt3').value;

    

            if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
                // If all inputs are numbers, add them
                document.getElementById('flname').innerText = "Sum: " + (num1 + num2 + num3);
            } else {
                // If any input contains text, concatenate them
                document.getElementById('flname').innerText = val1 + " " + val2 + " " + val3;
            }
        }
    </script>

</body>

</html>

    
            
        

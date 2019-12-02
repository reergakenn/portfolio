function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);

        
        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("addition").checked) {
            operator = document.getElementById("addition").value;
        }
        if (document.getElementById("subtract").checked) {
            operator = document.getElementById("subtract").value;
        }
        if (document.getElementById("multiply").checked) {
            operator = document.getElementById("multiply").value;
        }
        if (document.getElementById("divide").checked) {
            operator = document.getElementById("divide").value;
        }


        var result;
        
        /* if the operator was "Min" then set result to the minimum */
        if (operator == "add") {
                result = operand1fp + operand2fp;
        }
        if (operator == "sub") {
                result = operand1fp - operand2fp;
        }
        if (operator == "mult") {
                result = operand1fp * operand2fp;
        }
        if (operator == "div") {
                result = operand1fp / operand2fp;
        }


        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

         function clearform()
        {
            document.getElementById("Operand1").value = "";
            document.getElementById("Operand1Error").innerHTML = "";
            document.getElementById("Operand2").value = "";
            document.getElementById("Operand2Error").innerHTML = "";
            document.getElementById("Result").innerHTML = "";
            document.getElementById("OperatorError").innerHTML = "";
            /* clear the radio button*/
            document.getElementById("addition").checked = false;
            document.getElementById("subtract").checked = false;
            document.getElementById("multiply").checked = false;
            document.getElementById("divide").checked = false;
        }
        
/* Form Validation */
$( "#myform" ).validate({
 
});
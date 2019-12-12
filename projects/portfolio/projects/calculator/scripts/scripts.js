$(document).ready(function() {

    $("#calculate").click(function() {
        var firstNumber = $("#firstNumber").val();
        firstNumber = parseInt(firstNumber);

        var secondNumber = $("#secondNumber").val();
        secondNumber = parseInt(secondNumber);

        $("#output").append(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
        $("#output").append("<br>");
        $("#output").append(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
        $("#output").append("<br>");
        $("#output").append(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        $("#output").append("<br>");
        $("#output").append(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
    });

    

});
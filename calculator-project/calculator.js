$(document).ready(function() {

    // creating array that stores the numbers from button clicks
    var resultArray = [];
    //stores numbers from resultArray that are on the left of an oppertor
    var num1;
    //stores numbers from resultArray that are on the right of an oppertor
    var num2;
    //stores the result of the calculation
    var calculation;

    $("#btnclear").click(function() {
       resultArray = [];
       $("#result").empty();
       console.log('button clear clicked');
    });

    $("#btn0").click(function() {
       resultArray.push(0);
       $("#result").html(resultArray);
    });

    $("#btn1").click(function() {
       resultArray.push(1);
       $("#result").html(resultArray);
    });

    $("#btn2").click(function() {
       resultArray.push(2);
       $("#result").html(resultArray);
    });

    $("#btn3").click(function() {
       resultArray.push(3);
       $("#result").html(resultArray);
    });

    $("#btn4").click(function() {
       resultArray.push(4);
       $("#result").html(resultArray);
    });

    $("#btn5").click(function() {
       resultArray.push(5);
       $("#result").html(resultArray);
    });

    $("#btn6").click(function() {
       resultArray.push(6);
       $("#result").html(resultArray);
    });

    $("#btn7").click(function() {
       resultArray.push(7);
       $("#result").html(resultArray);
    });

    $("#btn8").click(function() {
       resultArray.push(8);
       $("#result").html(resultArray);
    });

    $("#btn9").click(function() {
       resultArray.push(9);
       $("#result").html(resultArray);
    });

    $("#btnPlus").click(function() {
       resultArray.push("+");
       $("#result").html(resultArray);
    });

    $("#btnMinus").click(function() {
       resultArray.push("-");
       $("#result").html(resultArray);
    });

    $("#btnDivide").click(function() {
       resultArray.push("/");
       $("#result").html(resultArray);
    });

    $("#btnMultiply").click(function() {
       resultArray.push("*");
       $("#result").html(resultArray);
    });

    $("#btnPercent").click(function() {
       resultArray.push("%");
       $("#result").html(resultArray);
    });

    $("#btnDecimal").click(function() {
       resultArray.push(".");
       $("#result").html(resultArray);
    });

    function calculate() {

      for( let i = 0; i < resultArray.length; i++) {

        if(isNaN(parseInt(resultArray[i])) && (resultArray[i] !== ".") && (i !== resultArray.length -1 )) {
            var operator = resultArray[i];
            num1 = resultArray.splice(0, i).join("");
            num2 = resultArray.splice(1, resultArray.length - 2).join("");

            if( operator === "+") {
              calculation = parseFloat(num1) + parseFloat(num2);
            }
            else if( operator === "-") {
              calculation = parseFloat(num1) - parseFloat(num2);
            }
            else if( operator === "/") {
              calculation = (parseFloat(num1) / parseFloat(num2)).toFixed(1);
            }
            else if( operator === "*") {
              calculation = (parseFloat(num1) * parseFloat(num2)).toFixed(1);
            }
            else if( operator === "%") {
              calculation = (parseFloat(num1) / 100);
            }

         }
      }
    }

    $("#btnEqual").click(function(){
       resultArray.push("=");
       calculate();
       $("#result").append("=" + calculation);
    });

});

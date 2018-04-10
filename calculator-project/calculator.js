$(document).ready(function() {

  // creating array that stores the numbers from button clicks
  var resultArray = [];
  //stores numbers from resultArray that are on the left of an oppertor
  var num1;
  //stores numbers from resultArray that are on the right of an oppertor
  var num2;
  //stores the result of the calculation
  var calculation;

  $(".btn").click(function() {
    resultArray.push(this.value);
    $("#result").html(resultArray);
 });

  $("#btnclear").click(function() {
     resultArray = [];
     $("#result").empty();
     console.log('button clear clicked');
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
     calculate();
     $("#result").append( calculation);
  });

});

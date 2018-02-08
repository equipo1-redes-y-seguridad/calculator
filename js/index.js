function executeOperation(operation) {

  var values = document.getElementById("in-user").value
  var numbers = values.split(",")
  
  var number1 = parseInt(numbers[0])
  var number2 = parseInt(numbers[1])

  switch(operation) {

    case "add":
    alert(number1 + number2)
    break;

    case "min":
    alert(number1 - number2)
    break;

    case "multi":
    alert(number1 * number2)
    break;

    case "div":
    if(number2 != 0) {
      alert(number1 / number2)
    }
    else {
      alert("División entre 0 no permitida")
    }
    
    break;
  }
}

function executeUnit(operation) {

  var number = prompt('Ingrese un número', '1')
  var intNumber = parseInt(number)

  switch(operation) {
    case "sqrt":
      alert(Math.sqrt(intNumber))
    break;

    case "div":
      alert(1/intNumber)
    break;
  }
}
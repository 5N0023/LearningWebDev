var result = document.getElementById("result");

function buttonClick(value) {
	
  if (value == "=") {
    result.value = eval(result.value);
  } else {
    result.value += value;
  }
}

function clearResult() {
  result.value = "";
}
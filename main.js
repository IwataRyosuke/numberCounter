function doesSomething(){
	var count_value = parseInt($("#output").html()) + 1;
	$("#output").html(count_value);
}

function doSomething(){
	var minus_value = parseInt($("#output").html()) - 1;
	$("#output").html(minus_value);
}

function maybeDoSomething(){
	var reset_value = 0;
	document.querySelector('#output').innerHTML = reset_value;
}


function sum(){
	var countvalue = parseInt($("#o").html()) + 1;
	$("#o").html(countvalue);
}

function decrease(){
	var minusvalue = parseInt($("#o").html()) - 1;
	$("#o").html(minusvalue);
}

function fromTheStart(){
	var resetvalue = 0;
	document.querySelector('#o').innerHTML = resetvalue;
}





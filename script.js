function buttonClick() {
	let input = document.getElementById('input2');
	input.value = '!!!';
}
function buttonAlert() {
	let input = document.getElementById('input3');
	alert(input.value);
}
function buttonSq() {
	let input = document.getElementById('input4');
	let number = +input.value;
	let square = number*number;
	alert(square);
}
function buttonClickInput() {
	let input1 = document.getElementById('input5-1');
	let input2 = document.getElementById('input5-2');
	let input1Value = input1.value;
	let input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
}
function changeColor() {
	let input = document.getElementById('input6');
	input.style.color = 'red';
}
//Заблокирует элемент
function buttonBlock() {
	let input = document.getElementById('input7');
	input.disabled = true;
}

//Отблокирует элемент
function buttonUnblock() {
	let input = document.getElementById('input7');
	input.disabled = false;
}
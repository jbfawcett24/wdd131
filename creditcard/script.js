function isCardNumberValid(number) {
	return number === '1234123412341234'
}
function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.number.value)
	displayError('')
	if (isNaN(this.number.value) || !isCardNumberValid(this.number.value)) {
		errorMsg += 'Card number is not a valid number\n'
	}
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}
document.querySelector("form").addEventListener("submit", submitHandler);
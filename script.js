const inputMail = document.getElementById('email');
const mailContainer = document.querySelector('.form__email--container');
const button = document.querySelector('.form__email--arrow');
const errorMsg = document.querySelector('.form__email--errorMsg');
const regEx = /\S+@\S+\.\S+/;

function validate() {
	if (regEx.test(inputMail.value)) {
		console.log('Email valid');
	} else {
    errorMsg.style.visibility = "visible";
    inputMail.classList.add('error');
		mailContainer.style.border = "medium solid red";
	}
}

button.addEventListener('click', validate);
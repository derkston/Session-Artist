window.addEventListener('DOMContentLoaded' , function(){
	const regBtn = document.querySelector('.register');
	const regPopup = document.querySelector('.reg-popup');
	const closeRegPopup = regPopup.querySelector('.close');
	regBtn.addEventListener('click' , function(){
		regPopup.classList.add('active')
		document.body.classList.add('fixed');
	});
	closeRegPopup.addEventListener('click' , function(){
		regPopup.classList.remove('active')
		document.body.classList.remove('fixed');
	});

	/* Validate Reg Form */
	const regForm = document.querySelector('.reg__form'),
				regInputs = regForm.querySelectorAll('input'),
				regEmail = regForm.querySelector('.email'),
				regPassword = regForm.querySelector('.password');
	function validateEmail (email){
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	regForm.onsubmit = function(){

		let emailVal = regEmail.value ,
				passwordVal = regPassword.value ,
				emptyInputs = Array.from(regInputs).filter(input => input.value === '');

		regInputs.forEach(function(input){
			if(input.value === ''){
				input.classList.add('error')
				return false
			}else {
				input.classList.remove('error')
			}
		});

		if (emptyInputs.length !== 0) {
			return false;
		}


		if (!validateEmail(emailVal)){
			regEmail.classList.add('error')
			return false 
		}	else {
			regEmail.classList.remove('error')
		}
	};
});
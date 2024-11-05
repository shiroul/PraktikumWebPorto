document.addEventListener("DOMContentLoaded", function() {
    const name = document.getElementById("name")

    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("checkMail");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var emailValid = 0;

    const phoneInput = document.getElementById("phone");
    const phoneMessage = document.getElementById("checkPhone");
    const phonePattern = /^08\d{7,}$/;
    var phoneValid = 0;

    const submitForm = document.getElementById("contactForm");

    // const submitButton = this.documentElement.getElementById("submit")

    function checkPattern (word, x){
        if (x){
            return emailPattern.test(word)
        }
        return phonePattern.test(word)
    }

    emailInput.addEventListener("blur", function() {
        if(checkPattern(emailInput.value, 1)){
            emailMessage.textContent = "";
            emailValid = 1;
            return;
        }
        emailValid = 0;
        emailMessage.textContent = "Please input valid email format.";
        emailMessage.style.color = "red"; 
    });

    phoneInput.addEventListener("blur", function() {
        if(checkPattern(phoneInput.value, 0)){
            console.log('atas')
            phoneMessage.textContent = "";
            phoneValid = 1;
            return;
        }

        phoneValid = 0;
        phoneMessage.textContent = "Please input valid Phone Number format.";
        phoneMessage.style.color = "red"; 
    });

    submitForm.addEventListener("submit", function(event){
        event.preventDefault();

        if(!name.value){
            alert("please input your name before submit")
            return
        }

        if(!emailValid){
            alert("please input your email before submit")
            return
        }

        if(!phoneValid){
            alert("please input your phone number before submit")
            return
        }

        alert(`Thank you for reaching me Mr/Mrs ${name.value} i will try to contact u to ${phoneInput.value}`)
        this.submit();
    });

});

window.onload = selectElements();

function selectElements(){
    document.getElementById("sign-in__button").addEventListener("click",validateInfo);
    document.getElementById("subscribe-message__close-button").addEventListener("click",closeModal);   
}

function validateInfo(e){
    e.preventDefault();
    const userEmail = document.getElementById("sign-in__email").value;
    const regEx = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/; 

    const emailIsValid = regEx.test(userEmail);
    
    document.getElementById("sign-in__email-error-message").setAttribute("aria-hidden", emailIsValid);
    document.getElementById("sign-in__email").setAttribute("aria-invalid",!emailIsValid);

    if (!emailIsValid)
        return;

    document.getElementById("user-email-address").innerHTML = userEmail;
    document.getElementById("subscribe-message").setAttribute("aria-hidden",false);
}

function closeModal() {
    document.getElementById("subscribe-message").setAttribute("aria-hidden",true);   
}
window.addEventListener('load', ()=>{
    var form = document.querySelector('#form-login');
    form.addEventListener('submit', ()=>{
        // Captura de datos
        var email = document.querySelector('#txtEmail').value;
        var password = document.querySelector('#txtPassword').value;
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        var iconEmail = document.querySelector('.fa-envelope');
        var inputEmail = document.querySelector('#txtEmail');
        var iconPassword = document.querySelector('.fa-lock');
        var inputPassword = document.querySelector('#txtPassword');

        
        // Validaciones
        if(email == ""){
            iconEmail.style.color="tomato";
            inputEmail.style.border="1px solid tomato";
        }
        else{
            iconEmail.style.color="lightgreen";
            inputEmail.style.border="1px solid green";
        }

        if(password == ""){
            iconPassword.style.color="tomato";
            inputPassword.style.border="1px solid tomato";
        }
        else{
            iconPassword.style.color="lightgreen";
             inputPassword.style.border="1px solid green";
        }
    })
})
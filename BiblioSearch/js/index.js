$(document).foundation()

var mail = $('.input-mail');
var password = $('.input-password');
var login = $('.button');
var is_pswd_visible = false;        // El password empieza siendo invisible

mail.on('click', function(){
   $('.floating-label').animate({top: '15%', opacity: 0}, 500);
});

mail.on('focus', function(){
   $('.floating-label').animate({top: '15%', opacity: 0}, 500);
});

password.on('click', function(){
    $('.floating-label-pswd').animate({top: '37%', opacity: 0}, 500);
})

password.on('focus', function(){
    $('.floating-label-pswd').animate({top: '37%', opacity: 0}, 500);
})


//Change password visibility
$('#show-password').on('click', function() {
    if(is_pswd_visible){
        password.attr('type', 'password');
        is_pswd_visible = false;
    }else{
        password.attr('type', 'text');
        is_pswd_visible = true;
    }
});

// Actions when user logs in
login.on('click', function(){
    //Check first if the e-mail adress is valid e.g. ends with itesm.mx and if both inputs are filled
    if(mail.val() !== '' && password.val() !== '' && mail.val().match(/@itesm.mx$/)){
        window.location.href="inicio.html";
    }else{
        $('.error-msg').show();
    }
    
});

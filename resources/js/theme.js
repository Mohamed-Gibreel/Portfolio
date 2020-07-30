let theme = localStorage.getItem('theme');
    

if (theme == null){
    setTheme('blue');
}
else{
    setTheme(theme)
}

 let themeDots = document.querySelectorAll('.theme-dot');

 for (var i=0; themeDots.length > i; i++){
     themeDots[i].addEventListener('click', function(){
         let mode = this.dataset.mode;
         console.log(mode)
         setTheme(mode);
     })
 }

function setTheme(mode){
     if(mode == 'blue'){
         document.querySelector('#theme-style').href = 'resources/css/style.css'
     }

     if(mode == 'green'){
        document.querySelector('#theme-style').href = 'resources/css/green-theme.css'
    }

    if(mode == 'light'){
        document.querySelector('#theme-style').href = 'resources/css/white-theme.css'
    }

    if(mode == 'purple'){
        document.querySelector('#theme-style').href = 'resources/css/purple-theme.css'
    }

    localStorage.setItem('theme', mode)
 }


let submitbtn = document.querySelector('#submit-btn');

submitbtn.addEventListener('click', function(){
    let name = document.querySelector('#contact-name').value;
    let email = document.querySelector('#contact-email').value;
    let message = document.querySelector('#contact-message').value;
    let subject = document.querySelector('#contact-subject').value;
    let errorMsg = document.querySelector('.status');

    errorMsg.textContent =''
    if(email.length >5 && email.includes('@') && email.includes('.')
        && subject.length>2 && message.length > 10){
        errorMsg.classList.toggle('success')
        errorMsg.append('Email Sent!')
        setTimeout(() => {
            errorMsg.style.display="none";
            errorMsg.textContent = '';
            errorMsg.classList.toggle('status')
        }, 5000);
        
    }
    else if (email.length <5 && email.includes('@') != 1 && email.includes('.') != 1){
        event.preventDefault();
        errorMsg.append('Invalid Email!')
        errorMsg.style.display="block";
    }
    else if (subject.length < 2){
        event.preventDefault();
        errorMsg.append('Subject is too short!')
        errorMsg.style.display="block";
    }
    
    else if(message.length < 10){
        event.preventDefault();
        errorMsg.append('Message should be longer than 10 characters!')
        errorMsg.style.display="block";
    }
})

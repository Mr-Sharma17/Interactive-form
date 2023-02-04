//catching containers
const memeContainer = document.getElementById('meme-container'),
    formContainer = document.getElementById('form-container'),
    name = document.getElementById('name'),
    number = document.getElementById('number'),
    password = document.getElementById('password'),
    cfmpassword = document.getElementById('cfmpassword'),
    submitBtn = document.getElementById('submit'),
    nameSpan = document.getElementById('username-span'),
    numberSpan = document.getElementById('number-span'),
    passwordSpan = document.getElementById('password-span'),
    cfmpasswordSpan = document.getElementById('confirmpassword-span');



function handleSubmit() {

    //if name field is empty
    if (!name.value.trim()) {
        nameSpan.innerHTML = `<img src='https://i.kym-cdn.com/photos/images/original/001/535/068/29d.jpg' alt='name-meme' />`;
        setTimeout(() => {
            nameSpan.innerHTML = null;
        }, 10000);
        return;
    }
    //if number field is empty
    else if (!number.value) {
        numberSpan.innerHTML = `<img src='https://media.makeameme.org/created/so-whats-your-apg6z1.jpg' alt='number-meme' />`;
        setTimeout(() => {
            numberSpan.innerHTML = null;
        }, 10000);
        return;
    }
    //if num.length < 10
    else if (number.value.length > 0 && number.value.length < 10) {
        numberSpan.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVJrzx-7nwF8NFgJj_WKcH4OK_8s8HQqDgQ&usqp=CAU' alt='number-meme' />`;
        setTimeout(() => {
            numberSpan.innerHTML = null;
        }, 6000);
        return;
    }
    //if num.length > 10
    else if (number.value.length > 10) {
        numberSpan.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4CyVRE-3bhsWcidzvSCw60DuYNT4dAI2YA&usqp=CAU' alt='number-meme' />`;
        setTimeout(() => {
            numberSpan.innerHTML = null;
        }, 6000);
        return;
    }
    //if password field is empty
    else if (!password.value.trim()) {
        passwordSpan.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8mkJI-eoX1X_huhkrlQ2G-e2JJ6dDeU9kw&usqp=CAU' alt='password-meme' />`;
        setTimeout(() => {
            passwordSpan.innerHTML = null;
        }, 10000);
        return;
    }
    //if password.length < 8
    else if (password.value.length < 8) {
        passwordSpan.innerHTML = `<img src='https://media.makeameme.org/created/well-crap-who.jpg' alt='password-meme' />`;
        setTimeout(() => {
            passwordSpan.innerHTML = null;
        }, 6000);
        return;
    }
    //if confirmpassword field is empty
    else if (!cfmpassword.value.trim()) {
        cfmpasswordSpan.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jgBJyzBeM3EExyWgeIkKZ5urvkP86BOXQQ&usqp=CAU' alt='password-meme' />`;
        setTimeout(() => {
            cfmpasswordSpan.innerHTML = null;
        }, 10000);
        return;
    }
    //if both passwords are different
    else if (password.value.trim() !== cfmpassword.value.trim()) {
        cfmpasswordSpan.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xJ0XPwQU-ijW3QUn6lJpnfuVy45aSSHekQ&usqp=CAU' alt='wrongpassword-meme' />`;
        setTimeout(() => {
            cfmpasswordSpan.innerHTML = null;
        }, 8000);
        return;
    }
    //if all conditions are been satisfied
    else {
        formContainer.innerHTML = null;
        formContainer.innerHTML = "<img src='https://media.tenor.com/rhghD8RPVhUAAAAd/congratulations-tribe.gif' alt='congo' />";
        formContainer.style.borderRadius = '60px 0';
        formContainer.style.padding = '0';
        name.value = '', password.value = '', number.value = '', cfmpassword.value = '';
    }
}

submitBtn.addEventListener('click', handleSubmit); //listening event on submit button


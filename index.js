const memeContainer = document.getElementById('meme-container'),
    formContainer = document.getElementById('form-container'),
    name = document.getElementById('name'),
    number = document.getElementById('number'),
    password = document.getElementById('password'),
    cfmpassword = document.getElementById('cfmpassword'),
    submitBtn = document.getElementById('submit');



const handleSubmit = () => {

    formContainer.style.display = "none";
    memeContainer.innerHTML = null;
    memeContainer.style.display = 'block';
    
    if (!name.value.trim()) {
        memeContainer.innerHTML = `<img src='https://media.tenor.com/IkFqKVJ0tSIAAAAM/wait-a-minute.gif' alt='name-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 10000);
        return;
    }
    else if (!number.value) {
        memeContainer.innerHTML = `<img src='https://media.makeameme.org/created/so-whats-your-apg6z1.jpg' alt='number-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 10000);
        return;
    }
    else if (number.value.length > 0 && number.value.length < 10) {
        memeContainer.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVJrzx-7nwF8NFgJj_WKcH4OK_8s8HQqDgQ&usqp=CAU' alt='number-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 6000);
        return;
    }
    else if (number.value.length > 10) {
        memeContainer.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4CyVRE-3bhsWcidzvSCw60DuYNT4dAI2YA&usqp=CAU' alt='number-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 6000);
        return;
    }
    else if (!password.value.trim()) {
        memeContainer.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8mkJI-eoX1X_huhkrlQ2G-e2JJ6dDeU9kw&usqp=CAU' alt='password-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 10000);
        return;
    }
    else if (!cfmpassword.value.trim()) {
        memeContainer.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jgBJyzBeM3EExyWgeIkKZ5urvkP86BOXQQ&usqp=CAU' alt='password-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 10000);
        return;
    }
    else if (password.value.trim() !== cfmpassword.value.trim()) {
        memeContainer.innerHTML = `<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xJ0XPwQU-ijW3QUn6lJpnfuVy45aSSHekQ&usqp=CAU' alt='wrongpassword-meme' />`;
        setTimeout(() => {
            formContainer.style.display = "block";
            memeContainer.style.display = 'none';
        }, 10000);
        return;
    }
    else {
        memeContainer.innerHTML = "<img src='https://media.tenor.com/rhghD8RPVhUAAAAd/congratulations-tribe.gif' alt='congo' />";
        setTimeout(() => {
            memeContainer.style.display = 'none';
            formContainer.style.display = 'block';
        }, 10000);
    }
};

submitBtn.addEventListener('click', handleSubmit);


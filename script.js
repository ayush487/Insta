const userInput = document.getElementById('username-field')
const passInput = document.getElementById('password-field')
const userLabel = document.getElementById('username-label')
const passLabel = document.getElementById('password-label')
const passShowBtn = document.getElementById('password-show')

const showUserLabel = (e) => {
    if(userInput.value){
        userLabel.hidden = false
        userInput.style.paddingTop = '14px'
    }else {
        userLabel.hidden = true
        userInput.style.paddingTop = '9px'
    }
}
const showPassLabel = () => {
    if(passInput.value){
        passLabel.hidden = false
        passInput.style.paddingTop = '14px'
        passShowBtn.hidden = false
    }else {
        passLabel.hidden = true
        passInput.style.paddingTop = '9px'
        passShowBtn.hidden = true
    }
}

const togglePassword = () => {
    if(passShowBtn.textContent === 'Show') {
        passInput.type = 'text'
        passShowBtn.textContent = 'Hide'
    }else if(passShowBtn.textContent === 'Hide') {
        passShowBtn.textContent = 'Show'
        passInput.type = 'password'
    }
}

userInput.addEventListener('input', showUserLabel)
passInput.addEventListener('input', showPassLabel)
passShowBtn.addEventListener('click', togglePassword)
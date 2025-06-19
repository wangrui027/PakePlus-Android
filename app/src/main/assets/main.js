let greetInputEl
let greetMsgEl

async function get_data() {
    fetch('https://api.github.com/users/octocat')
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data)
            greetMsgEl = document.querySelector('#greet-msg')
            greetMsgEl.textContent = data.login
            greetInputEl.value = data.login
        })
        .catch((error) => {
            console.error('error', error)
        })
}

window.addEventListener('DOMContentLoaded', () => {
    greetInputEl = document.querySelector('#greet-input')
    document.querySelector('#getdata').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('getdata')
        get_data()
    })
})

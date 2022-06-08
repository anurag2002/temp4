const { Axios } = require("axios");

function uservalidate1() {
    let name1 = document.getElementById("userName").value;
    var rel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (rel.test(name1)) {
        document.getElementById("userName").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("userName").style.borderColor = "red";
        return false;
    }
}

function passvalidate1() {
    let name1 = document.getElementById("pass").value;
    var rel = /^[0-9a-zA-Z]$/;
    if (rel.test(name1)) {
        document.getElementById("pass").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("pass").style.borderColor = "red";
        return false;
    }
}

const BASE_URL = 'http://localhost:3000/';

function check() {
    userNameBorder = document.getElementById("userName").style.borderColor;
    passBorder = document.getElementById("pass").style.borderColor;

    if (userNameBorder != "green" || passBorder != "green") {
        document.getElementById("loginPage").reset();
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("pass").style.borderColor = "red";
    }
    try {
        const response = await Axios.get(`${BASE_URL}`);

        const todoItems = response.data;

        console.log(`GET: Here's the list of todos`, todoItems);

        return todoItems;
    } catch (errors) {
        console.error(errors);
    }

}

// const form = document.getElementById('loginPage')
// form.addEventListener('submit', loginUser)

// async function loginUser(event) {
//     event.preventDefault()
//     const userName = getElementById('userName').value
//     const password = getElementById('pass').value

//     const result = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             userName,
//             password
//         })
//     }).then((res) => res.json())

//     if (result.status === 'ok') {
//         // everythign went fine
//         console.log('Got the token: ', result.data)
//         localStorage.setItem('token', result.data)
//         alert('Success')
//     } else {
//         alert(result.error)
//     }

// }
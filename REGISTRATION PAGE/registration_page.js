function namevalidate() {
    let name1 = document.getElementById("name").value;
    var rel = /^[a-zA-Z\s]{3,50}$/;
    if (rel.test(name1)) {
        document.getElementById("name").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("name").style.borderColor = "red";
        return false;
    }
}

function emailvalidate() {
    let name1 = document.getElementById("email").value;
    var rel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (rel.test(name1)) {
        document.getElementById("email").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("email").style.borderColor = "red";
        return false;
    }
}

function passvalidate() {
    let name1 = document.getElementById("password").value;
    var rel = /^[0-9a-zA-Z]{8,16}$/;
    if (rel.test(name1)) {
        document.getElementById("password").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("password").style.borderColor = "red";
        return false;
    }
}


// function check1() {
//     nameBorder = document.getElementById("name").style.borderColor;
//     mailBorder = document.getElementById("email").style.borderColor;
//     passBorder = document.getElementById("password").style.borderColor;

//     if (nameBorder != "green" || mailBorder != "green" || passBorder != "green") {
//         document.getElementById("registrationForm").reset();
//         document.getElementById("name").style.borderColor = "red";
//         document.getElementById("email").style.borderColor = "red";
//         document.getElementById("password").style.borderColor = "red";

//     }
// }

// const form = document.getElementById('registrationForm')

// form.addEventListener('submit', async(event) => {
//     event.preventDefault()
//     const name = document.getElementById('name').value
//     const username = document.getElementById('email').value
//     const password = document.getElementById('password').value

//     const result = await fetch('/api/register', {
//         method: 'POST',
//         body: JSON.stringify({
//             name: name,
//             email: email,
//             password: password
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }

//     }).then((res) => res.json())

//     if (result.status === 'ok') {
//         // everythign went fine
//         alert('Success')
//     } else {
//         alert(result.error)
//     }
// }) 

// const submitHandler = async(e) => {
//     const name = document.getElementById('name');
//     const password = document.getElementById('password');
//     const email = document.getElementById('email');
//     // const mail = {};

//     fetch("http://localhost:3000/register", { // returns a promise
//             method: "post", // specify method as post
//             body: JSON.stringify({ name: name.target.value, password: password.target.value, email: email.target.value }), // specify body as mail to send to request
//         })
//         .then(response => response.json()) // converting promise to JSON
//         .then(res => console.log(res)) // view the response from server, later after our express server is set
//         .catch(error => console.log(error))
// }
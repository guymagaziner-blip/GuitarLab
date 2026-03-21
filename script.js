document.getElementById("signUp").onclick = function () {

    let userName = document.getElementById("username").value; 
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = Number(document.getElementById("age").value);
    let message = document.getElementById("message").value;

    if (userName.length < 1 || userName.length > 20) {
        document.getElementById("username").style.borderColor = "red";
        alert("Invalid User Name");
        return;
    } else {
        document.getElementById("username").style.borderColor = "black";
    }

    if (email.length < 5 || !email.includes("@")) {
        document.getElementById("email").style.borderColor = "red";
        alert("Invalid Email");
        return;
    } else {
        document.getElementById("email").style.borderColor = "black";
    }

    if (phone.length != 10) {
        document.getElementById("phone").style.borderColor = "red";
        alert("Invalid phone number");
        return;
    } else {
        document.getElementById("phone").style.borderColor = "black";
    }

    if (age < 1 || age > 120 ) {
        document.getElementById("age").style.borderColor = "red";
        alert("Invalid age");
        return;
    } else {
        document.getElementById("age").style.borderColor = "black";
    }

    if (message === "") {
        document.getElementById("message").style.borderColor = "red";
        alert("Invalid message");
        return;
    } else {
        document.getElementById("message").style.borderColor = "black";
    }

    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name: userName, 
            email: email, 
            age: age, 
            phonenumber: phone, 
            message: message 
        })
    })
    .then(res => res.text())
    .then(data => {
        console.log(userName);
        console.log(email);
        console.log(age);
        console.log(phone);
        console.log(message);
        alert("הנתונים נשלחו בהצלחה! תשובת השרת: " + data);
    })
    .catch(err => {
        console.error("שגיאה בשליחה:", err);
        alert("קרתה שגיאה בשליחת הנתונים לשרת.");
    });

};
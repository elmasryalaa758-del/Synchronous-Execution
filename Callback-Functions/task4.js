function nextStep() {
    console.log("Redirecting to Dashboard...");
}

function login(username, password, callback) {
    if (username === "admin" && password === "1234") {
        console.log("Login Successful!");
        callback();
    } else {
        console.log("Invalid Username or Password.");
    }
}

login("admin", "1234", nextStep);
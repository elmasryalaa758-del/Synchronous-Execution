function afterGreeting() {
    console.log("Welcome to Elmasry");
}

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

greet("Alaa ", afterGreeting);
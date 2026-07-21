function sendMessage(message) {
    console.log("Sending message...");

    setTimeout(() => {
        console.log("Message received: " + message);
    }, 2000);
}

sendMessage("Welcome to JavaScript!");
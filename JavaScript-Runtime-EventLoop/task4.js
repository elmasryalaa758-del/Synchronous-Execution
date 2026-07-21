function first() {
    console.log("First Function");
}

function second() {
    setTimeout(() => {
        console.log("Async Function");
    }, 0);
}

function third() {
    console.log("Third Function");
}

first();
second();
third();

console.log("Program Finished");
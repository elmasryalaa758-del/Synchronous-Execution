function secondFunction() {
    console.log("Step 2: Inside Second Function");
}

function firstFunction() {
    console.log("Step 1: Inside First Function");

    secondFunction();

    console.log("Step 3: Back to First Function");
}

console.log("Program Started");

firstFunction();

console.log("Program Finished");
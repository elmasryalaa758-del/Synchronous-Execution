function loadingFinished() {
    console.log("Data Loaded Successfully!");
}

function loadData(callback) {
    console.log("Loading Data...");

    setTimeout(() => {
        callback();
    }, 5000);
}

loadData(loadingFinished);
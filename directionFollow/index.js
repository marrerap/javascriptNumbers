const values = require("./follow");
let errored = false;

console.log("\n---------------------------------\n\n");

if (values.testGroup === "a") {
    if (values.birthYear !== 1940) {
        console.error(
            `birthYear is incorrect, it's currently: "${values.birthYear}"`
        );
        errored = true;
    }

    if (values.thisYear !== 2021) {
        console.error(
            `thisYear is incorrect, it's currently: "${values.thisYear}"`
        );
        errored = true;
    }

    if (values.firstName !== "Charles") {
        console.error(
            `firstName is incorrect, it's currently: "${values.firstName}"`
        );
        errored = true;
    }

    if (values.lastName !== "Xzavier") {
        console.error(
            `lastName is incorrect, it's currently: "${values.lastName}"`
        );
        errored = true;
    }

    if (
        values.greeting !==
        "Hey Bud! I am Charles Xzavier. You may be surprised to learn that I am only 81 years old!!!"
    ) {
        console.error(
            `greeting is incorrect, it's currently: "${values.greeting}"`
        );
        errored = true;
    }
}

if (values.testGroup === "b") {
    if (values.birthYear !== 1940) {
        console.error(
            `birthYear is incorrect, it's currently: "${values.birthYear}"`
        );
        errored = true;
    }

    if (values.thisYear !== 2021) {
        console.error(
            `thisYear is incorrect, it's currently: "${values.thisYear}"`
        );
        errored = true;
    }

    if (values.firstName !== "Charles") {
        console.error(
            `firstName is incorrect, it's currently: "${values.firstName}"`
        );
        errored = true;
    }

    if (values.lastName !== "Xzavier") {
        console.error(
            `lastName is incorrect, it's currently: "${values.lastName}"`
        );
        errored = true;
    }

    if (values.age !== 81) {
        console.error(`lastName is incorrect, it's currently: "${values.age}"`);
        errored = true;
    }

    if (values.fullName !== "Charles Xzavier") {
        console.error(
            `lastName is incorrect, it's currently: "${values.fullName}"`
        );
        errored = true;
    }

    if (
        values.greeting !==
        "Hey Bud! I am Charles Xzavier. You may be surprised to learn that I am only 81 years old!!!"
    ) {
        console.error(
            `greeting is incorrect, it's currently: "${values.greeting}"`
        );
        errored = true;
    }
}

if (!errored && values.testGroup === "a") {
    console.log("Congrats! Move onto the next step!");
} else if (errored && values.testGroup === "a") {
    console.log("Try again");
}

if (!errored && values.testGroup === "b") {
    console.log("Congrats! Move onto the next lesson!");
} else if (errored) {
    console.log("Try again");
}

console.log("\n---------------------------------\n\n");
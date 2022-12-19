const userName = process.argv[2].split("=")[1];

const printCurrentDir = () => {
    console.log(`You are currently in ${process.cwd()}`)
};

const printOperationError = () => {
    console.log("Operation failed")
}

const printInvalidInputError = () => {
    console.log("Invalid input")
}

const printGreeting = () => {
    console.log(`Welcome to the File Manager, ${userName}!`)
}

const printByeUser = () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
}

const printUserName = () => {
    console.log(userName)
}

export { printCurrentDir, printByeUser, printGreeting, printInvalidInputError, printOperationError, printUserName }
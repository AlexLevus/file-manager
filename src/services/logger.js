class Logger {
  static currentDir() {
    console.log(`You are currently in ${process.cwd()}`);
  }

  static operationError() {
    console.log("Operation failed");
  }

  static invalidInputError() {
    console.log("Invalid input");
  }

  static greeting(userName) {
    console.log(`Welcome to the File Manager, ${userName}!`);
  }

  static byeUser(userName) {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  }
}

export default Logger;

import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

import Logger from "./services/logger.js";
import Commander from "./services/commands.js";

class Program {
  constructor(userName) {
    this.userName = userName || process.env.USER || "guest";

    const rl = readline.createInterface({ input, output });

    rl.on("line", (userInput) => {
      const [command, ...args] = userInput.split(" ");
      const parsedArgs = args.map((arg) =>
          arg.startsWith("--") ? arg.slice(2) : arg
      );

      Commander.execute(this.userName, command, parsedArgs)
          .then(() => Logger.currentDir());
    });

    rl.on("SIGINT", () => {
      this.stop()
    });

    process.on('uncaughtException', () => {
      Logger.operationError()
      Logger.currentDir()
    });
  }

  start() {
    Logger.greeting(this.userName);
    Logger.currentDir();
  }

  stop() {
    Logger.byeUser(this.userName);
    process.exit(0);
  }
}

export default Program;

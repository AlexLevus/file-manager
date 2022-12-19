import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import execCommand  from "./commands.js";
import { printCurrentDir, printGreeting, printByeUser, printOperationError } from "./notifier.js";

printGreeting()
printCurrentDir();

const rl = readline.createInterface({ input, output });

rl.on("line", (userInput) => {
  const [command, ...args] = userInput.split(" ");
  const parsedArgs = args.map(arg => arg.startsWith('--') ? arg.slice(2) : arg)

  execCommand(command, parsedArgs)
      .catch(() => printOperationError())
      .finally(() => printCurrentDir())
});

rl.on("SIGINT", () => {
  printByeUser()
  process.exit(0);
});

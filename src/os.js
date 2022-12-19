import os from "node:os";

import { OS_ARGS } from "./const.js";
import { printUserName } from "./notifier.js";

const logOsInfo = (args) => {
  for (const arg of args) {
    if (arg === OS_ARGS.ARCH) {
      console.log(os.arch());
    }

    if (arg === OS_ARGS.EOL) {
      console.log(JSON.stringify(os.EOL));
    }

    if (arg === OS_ARGS.CPUS) {
      console.log(os.cpus());
    }

    if (arg === OS_ARGS.HOME_DIR) {
      console.log(os.homedir());
    }

    if (arg === OS_ARGS.USER_NAME) {
      printUserName();
    }
  }
};

export { logOsInfo };

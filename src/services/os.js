import os from "node:os";

import { OS_FLAGS } from "../const.js";

class OS {
  static showInfo(flags) {
    for (const flag of flags) {
      if (flag === OS_FLAGS.ARCH) {
        console.log(os.arch());
      }

      if (flag === OS_FLAGS.EOL) {
        console.log(JSON.stringify(os.EOL));
      }

      if (flag === OS_FLAGS.CPUS) {
        console.log(os.cpus());
      }

      if (flag === OS_FLAGS.HOME_DIR) {
        console.log(os.homedir());
      }

      if (flag === OS_FLAGS.USER_NAME) {
        console.log(os.userInfo().username);
      }
    }
  }
}

export default OS;

import { rename } from "node:fs/promises";

import { compress, decompress } from "./zip.js";
import { COMMAND } from "./const.js";
import {
  printInvalidInputError,
  printByeUser,
} from "./notifier.js";
import {
  copyFile,
  createFile,
  deleteFile,
  hashFile,
  readFile,
} from "./file.js";
import { changeDir, listDir, upDir } from "./dir.js";
import { logOsInfo } from "./os.js";

const execCommand = async (command, args) => {
  const [arg1, arg2] = args;

  switch (command) {
    case COMMAND.CLOSE_APP:
      printByeUser();
      process.exit(0);
      break;

    case COMMAND.MOVE_FILE:
    case COMMAND.RENAME_FILE: return await rename(arg1, arg2)
    case COMMAND.READ_FILE: return await readFile(arg1)
    case COMMAND.CREATE_FILE: return await createFile(arg1)
    case COMMAND.COPY_FILE: return await copyFile(arg1, arg2)
    case COMMAND.DELETE_FILE: return await deleteFile(arg1)
    case COMMAND.CHANGE_DIR: return changeDir(arg1)
    case COMMAND.HASH_FILE: return hashFile(arg1)
    case COMMAND.COMPRESS_FILE: return await compress(arg1, arg2)
    case COMMAND.DECOMPRESS_FILE: return await decompress(arg1, arg2)

    case COMMAND.UP_DIR: return upDir()
    case COMMAND.LIST_DIR: return await listDir()

    case COMMAND.OS: return logOsInfo(args)

    default: printInvalidInputError()
  }
};

export default execCommand;

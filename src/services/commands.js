import Archive from "./archive.js";
import { COMMAND } from "../const.js";
import Logger from "./logger.js";
import File from "./file.js";
import Directory from "./directory.js";
import OS from "./os.js";

class Commander {
  static async execute(userName, command, args) {
    const [arg1, arg2] = args;

    switch (command) {
      case COMMAND.CLOSE_APP:
        Logger.byeUser(userName);
        process.exit(0);
        break;

      case COMMAND.MOVE_FILE:
      case COMMAND.RENAME_FILE: return await File.rename(arg1, arg2);
      case COMMAND.HASH_FILE: return File.hash(arg1);
      case COMMAND.READ_FILE: return await File.read(arg1);
      case COMMAND.CREATE_FILE: return await File.create(arg1);
      case COMMAND.DELETE_FILE: return await File.delete(arg1);
      case COMMAND.COPY_FILE: return await File.copy(arg1, arg2);

      case COMMAND.COMPRESS_FILE: return await Archive.compress(arg1, arg2);
      case COMMAND.DECOMPRESS_FILE: return await Archive.decompress(arg1, arg2);

      case COMMAND.UP_DIR: return Directory.up();
      case COMMAND.LIST_DIR: return await Directory.list();
      case COMMAND.CHANGE_DIR: return Directory.change(arg1);

      case COMMAND.OS: return OS.showInfo(args);

      default:
        Logger.invalidInputError();
    }
  }
}

export default Commander;

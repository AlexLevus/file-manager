import { cp, rename, unlink } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import crypto from "node:crypto";

class File {
  static async delete(pathToFile) {
    await unlink(pathToFile);
  }

  static async create(fileName) {
    const writeStream = createWriteStream(fileName);
    writeStream.end();
  }

  static async copy(pathToFile, destPath) {
    await cp(pathToFile, destPath, {
      recursive: true,
      errorOnExist: true,
      force: false
    });
    await this.delete(pathToFile)
  }

  static async read(pathToFile) {
    const readStream = createReadStream(pathToFile);
    await readStream.pipe(process.stdout)
  }

  static async hash(pathToFile) {
    const hash = crypto.createHash("sha256");
    const input = createReadStream(pathToFile);

    input.on("readable", () => {
      const data = input.read();
      if (data) {
        hash.update(data)
      } else {
        console.log(hash.digest("hex"));
      }
    });
  }

  static async rename(pathToFile, newFileName) {
    await rename(pathToFile, newFileName);
  }
}

export default File;

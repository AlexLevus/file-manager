import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

class Archive {
  static async compress(pathToFile, pathToDest) {
    const zip = zlib.createBrotliCompress();

    const read = createReadStream(pathToFile);
    const write = createWriteStream(pathToDest);

    read.pipe(zip).pipe(write);
  }

  static async decompress(pathToArchive, pathToDest) {
    const zip = zlib.createBrotliDecompress();

    const read = createReadStream(pathToArchive);
    const write = createWriteStream(pathToDest);

    read.pipe(zip).pipe(write);
  }
}

export default Archive;

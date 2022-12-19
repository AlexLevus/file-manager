import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async (pathToFile, pathToDest) => {
    const zip = zlib.createBrotliCompress();

    const read = createReadStream(pathToFile);
    const write = createWriteStream(pathToDest);

    read.pipe(zip).pipe(write);
};

const decompress = async (pathToArchive, pathToDest) => {
    const zip = zlib.createBrotliDecompress();

    const read = createReadStream(pathToArchive);
    const write = createWriteStream(pathToDest);

    read.pipe(zip).pipe(write);
};

export { compress, decompress }
import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async (pathToFile, pathToDest) => {
    const zip = zlib.createGzip();
    const read = createReadStream(pathToFile);
    const write = createWriteStream(pathToDest);

    read.pipe(zip).pipe(write);
};

const decompress = async (pathToFile, pathToDest) => {
    const zip = zlib.createGunzip();
    const read = createReadStream(pathToDest);
    const write = createWriteStream(pathToFile);

    read.pipe(zip).pipe(write);
};

export { compress, decompress }
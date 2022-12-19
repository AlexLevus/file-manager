import {cp, unlink} from "node:fs/promises";
import {createReadStream, createWriteStream} from "node:fs";
import {promisify} from "node:util";
import stream from "node:stream";
import crypto from "node:crypto";

const pipeline = promisify(stream.pipeline);

const deleteFile = async (pathToFile) => {
    await unlink(pathToFile);
}

const createFile = async (fileName) => {
    const writeStream = createWriteStream(fileName);
    writeStream.end();
}

const copyFile = async (pathToFile, destPath) => {
    await cp(pathToFile, destPath, {
        recursive: true,
        errorOnExist: true,
        force: false,
    });
}

const hashFile = async (pathToFile) => {
    const hash = crypto.createHash("sha256");
    const input = createReadStream(pathToFile);

    input.on("readable", () => {
        const data = input.read();
        if (data) hash.update(data);
        else {
            console.log(hash.digest("hex"));
        }
    });
}


const readFile = async (pathToFile) => {
    const readStream = createReadStream(pathToFile);
    await pipeline(readStream, process.stdout);
}

export { deleteFile, createFile, readFile, copyFile, hashFile }
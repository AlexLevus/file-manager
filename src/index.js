import Program from "./program.js";

const userName = process.argv[2].split("=")[1];

const program = new Program(userName);
program.start()
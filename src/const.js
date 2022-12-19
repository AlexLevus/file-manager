const COMMAND = {
    CLOSE_APP: ".close",

    UP_DIR: "up",
    CHANGE_DIR: "cd",
    LIST_DIR: "ls",

    CREATE_FILE: "add",
    READ_FILE: "cat",
    RENAME_FILE: "rn",
    COPY_FILE: "cp",
    MOVE_FILE: "mv",
    DELETE_FILE: "rm",
    HASH_FILE: "hash",
    COMPRESS_FILE: "compress",
    DECOMPRESS_FILE: "decompress",

    OS: "os"
};

const OS_ARGS = {
    EOL: 'EOL',
    CPUS: 'cpus',
    HOME_DIR: 'homedir',
    USER_NAME: 'username',
    ARCH: 'architecture'
}

export { COMMAND, OS_ARGS }
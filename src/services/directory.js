import { readdir } from "node:fs/promises";

class Directory {
  static up() {
    process.chdir("..");
  }

  static change(pathToDir) {
    process.chdir(pathToDir);
  }

  static async list() {
    const getDirEntriesByType = (dirEntries, type) => {
      return dirEntries
        .filter((entry) =>
          type === "file" ? entry.isFile() : entry.isDirectory()
        )
        .map((entry) => ({
          name: entry.name,
          type: entry.isFile() ? "file" : "directory",
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
    };

    const dirEntries = await readdir(process.cwd(), {
      withFileTypes: true,
    });
    const files = getDirEntriesByType(dirEntries, "file");
    const dirs = getDirEntriesByType(dirEntries, "dir");
    console.table([...dirs, ...files], ["name", "type"]);
  }
}

export default Directory;

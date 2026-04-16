import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
function runCmd(cmd: string, args: string[], cwd: string = process.cwd()) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd,
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code !== 0) return new Error("Failed to create project");
      resolve(true);
    });

    child.on("error", (error) => reject(error));
  });
}

async function isPathExists(path: string) {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    return false;
  }
}

async function getPakageDependencies() {
  const pakageJsonPath = path.join(process.cwd(), "package.json");
  const pakageJson = await fs.readFile(pakageJsonPath, "utf-8");
  const pakage = JSON.parse(pakageJson);
  return Object.keys(pakage.dependencies);
}

export { runCmd, isPathExists, getPakageDependencies };

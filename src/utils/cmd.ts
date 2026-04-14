import { spawn } from "child_process";
function runCmd(cmd: string, args: string[], cwd: string) {
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
  });
}

export { runCmd };

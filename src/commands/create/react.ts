import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function react(appName: string) {
  //copy template
  const tempPath = path.join(__dirname, "../../../templates/react-ts-tailwind");
  const appPath = path.join(process.cwd(), appName);
  await fs.cp(tempPath, appPath, {
    recursive: true,
  });
  //----change app names in project template
  //package.json
  const packageJsonPath = path.join(appPath, "package.json");
  const packageJsonContent = await fs.readFile(packageJsonPath, "utf-8");
  const newPackageJsonContent = packageJsonContent.replace("app-name", appName);
  await fs.writeFile(packageJsonPath, newPackageJsonContent);
  //index.html
  const indexHtmlPath = path.join(appPath, "index.html");
  const indexHtmlContent = await fs.readFile(indexHtmlPath, "utf-8");
  const newIndexHtmlContent = indexHtmlContent.replace("app-name", appName);
  await fs.writeFile(indexHtmlPath, newIndexHtmlContent);
  //App.tsx
  const appTsPath = path.join(appPath, "src", "App.tsx");
  const appTsContent = await fs.readFile(appTsPath, "utf-8");
  const newAppTsContent = appTsContent.replace("app-name", appName);
  await fs.writeFile(appTsPath, newAppTsContent);

  console.log(chalk.green("\n✔ App created successfully!"));

  //run npm install
  console.log(chalk.blue("\nInstalling dependencies..."));
  await runCmd("npm", ["install"], appPath);
  console.log(chalk.green("\n✔ Dependencies installed successfully!"));

  //run npm run dev
  console.log(chalk.blue("\nRunning dev server..."));
  await runCmd("npm", ["run", "dev"], appName);
}

export default react;

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

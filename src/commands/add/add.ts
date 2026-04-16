import chalk from "chalk";
import sectionsJson from "../../registry/sections.json" with { type: "json" };
import path from "path";
import { fileURLToPath } from "url";
import { getPakageDependencies, isPathExists } from "../../utils/cmd.js";
import addSection from "./section.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function add(name: string) {
  if (!(await validate())) return;
  const availableSections = sectionsJson.sections.map(
    (section) => section.name,
  );

  if (availableSections.includes(name)) return await addSection(name);

  return console.log(
    chalk.red("Please enter a valid section or component name"),
  );
}

export default add;

//----------------helpers----------------//
async function validate(): Promise<Boolean> {
  //check is package.json exists
  const pakageJsonPath = path.join(process.cwd(), "package.json");
  const isFileExists = await isPathExists(pakageJsonPath);
  if (!isFileExists) {
    console.log(chalk.red("No package.json found"));
    return false;
  }

  //check is valid project folder
  const packageDependencies = await getPakageDependencies();
  if (
    packageDependencies.includes("next") ||
    packageDependencies.includes("react")
  )
    return true;

  console.log(chalk.red("This folder is not a react or next.js project"));
  return false;
}

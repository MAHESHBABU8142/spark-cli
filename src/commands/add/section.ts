import { getPakageDependencies, runCmd } from "../../utils/cmd.js";
import sectionsJson from "../../registry/sections.json" with { type: "json" };
import chalk from "chalk";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function addSection(name: string) {
  const packageDependencies = await getPakageDependencies();

  //for next project
  if (packageDependencies.includes("next")) return nextProject(name);

  //for react project
  if (packageDependencies.includes("react")) return reactProject(name);
}

export default addSection;

//-----------------helpers----------------//

async function reactProject(name: string) {
  const sections = sectionsJson.sections;

  for (const section of sections) {
    if (section.name === name) {
      const sectionPath = path.join(__dirname, section.source);
      const targetPath = path.join(process.cwd(), ...section.target.split("/"));
      await fs.cp(sectionPath, targetPath, {
        recursive: true,
      });

      console.log(chalk.green(`\n✔ ${section.name} section added`));

      const uninstalledDependencies: string[] = [];
      const dependencies = await getPakageDependencies();
      section.dependencies.forEach((dep) => {
        if (!dependencies.includes(dep)) uninstalledDependencies.push(dep);
      });

      if (!uninstalledDependencies.length)
        return console.log(chalk.green("\n✔ No new dependencies installed!"));

      await new Promise((res) => setTimeout(res, 1000));

      //install dependencies
      console.log(chalk.blue("\nInstalling new dependencies..."));
      uninstalledDependencies.forEach((dep) =>
        console.log(`${chalk.blue("-")} ${dep}`),
      );

      await runCmd("npm", ["install", ...uninstalledDependencies]);

      console.log(chalk.green("\n✔ Dependencies installed successfully!"));
    }
  }
}

function nextProject(name: string) {
  console.log(chalk.green(`\n✔ Next ${name}  Section added successfully!`));
}

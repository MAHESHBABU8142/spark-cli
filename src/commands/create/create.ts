import inquirer from "inquirer";
import react from "./react.js";

async function create(appName: string) {
  let template = await getFramework();
  if (template === "react") await react(appName);
}
export default create;

//helpers
async function getFramework() {
  const { framework } = await inquirer.prompt([
    {
      type: "select",
      name: "framework",
      message: "Select framework:",
      choices: ["React"],
    },
  ]);

  return framework.toLowerCase();
}

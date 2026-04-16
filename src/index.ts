#!/usr/bin/env node

import { Command } from "commander";
import create from "./commands/create/create.js";
import preview from "./commands/preview/preview.js";
import add from "./commands/add/add.js";

const program = new Command();
program.name("spark").version("1.0.0");

//for creating a new app
program
  .command("create <app-name>")
  .description("create a new app")
  .action(create);

//for adding a new component/section/page
program
  .command("add <name>")
  .description("add a new component/section/page")
  .action(add);

//for previewing
program
  .command("preview")
  .description("preview all available sections and components")
  .action(preview);

program.parseAsync();

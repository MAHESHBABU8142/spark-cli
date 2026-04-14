#!/usr/bin/env node

import { Command } from "commander";
import create from "./commands/create/create.js";
import preview from "./commands/preview/preview.js";

const program = new Command();
program.name("spark").version("1.0.0");

//for creating a new app
program
  .command("create <app-name>")
  .description("create a new app")
  .action(create);

program
  .command("preview")
  .description("preview all available sections and components")
  .action(preview);

/*
program
  .command("add <type> <name>")
  .description("add a new component/section/page")
  .action((type, name) => {
    console.log(`you added a ${type} called ${name}`);
  });*/

program.parseAsync();

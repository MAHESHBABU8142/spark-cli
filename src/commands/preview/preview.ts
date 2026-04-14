import { runCmd } from "../../utils/cmd.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function preview() {
  const studioPath = path.join(__dirname, "../../../studio");
  await runCmd("npm", ["run", "dev"], studioPath);
}
export default preview;

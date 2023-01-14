const fs = require("fs");
const jsdoc2md = require("jsdoc-to-markdown");
let output = fs.readFileSync("./doc/README.header.md");
output += jsdoc2md.renderSync({ files: ["./src/*.js"] });
output += fs.readFileSync("./doc/README.footer.md");
fs.writeFileSync("README.md", output);

#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const options_values_1 = require("./options.values");
const angular_library_builder_1 = require("../core/angular-library-builder");
const argv = yargs
    .help('help')
    .alias('help', 'h')
    .version(() => require('../package.json').version)
    .alias('version', 'v')
    .usage('Usage: $0 [options]')
    .example('Example: $0 --rootDir src/lib --outDir dist', '[root directory is src/lib and the output directory is dist]')
    .options(options_values_1.optionsValues)
    .strict()
    .epilog('Angular (2+) Library Builder')
    .argv;
const builder = new angular_library_builder_1.AngularLibraryBuilder(argv);
builder.buildLibrary();
//# sourceMappingURL=nglb.js.map
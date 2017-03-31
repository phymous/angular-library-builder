"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_keys_1 = require("../model/options.keys");
exports.optionsValues = {
    [options_keys_1.OptionsKeys.ROOT_DIR]: {
        describe: 'Specifies the root directory of input files',
        demand: true,
        type: 'string'
    },
    [options_keys_1.OptionsKeys.OUT_DIR]: {
        describe: 'Redirect output structure to the directory',
        demand: true,
        type: 'string'
    }
};
//# sourceMappingURL=options.values.js.map
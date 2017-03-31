"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Logger {
    static success(text) {
        console.log(chalk.green(text));
    }
    static error(text) {
        console.log(chalk.red(text));
    }
    static warning(text) {
        console.log(chalk.yellow(text));
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map
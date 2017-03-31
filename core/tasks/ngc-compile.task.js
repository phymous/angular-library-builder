"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const options_keys_1 = require("../../model/options.keys");
const main_1 = require("@angular/compiler-cli/src/main");
const logger_1 = require("../services/logger");
/**
 * Compile our typescript files with ngc
 */
class NgcCompileTask {
    /**
     * Registring the task
     */
    registerTask(argv, onError, dependencies = []) {
        const taskName = 'compile-ngc';
        const ngcArguments = { p: `${argv[options_keys_1.OptionsKeys.OUT_DIR]}/tsconfig-ngc.json` };
        gulp.task(taskName, dependencies, (done) => {
            main_1.main(ngcArguments, logger_1.Logger.error).then((exitCode) => {
                if (exitCode == 0) {
                    done();
                }
                else {
                    onError();
                }
            });
        });
        return taskName;
    }
}
exports.NgcCompileTask = NgcCompileTask;
//# sourceMappingURL=ngc-compile.task.js.map
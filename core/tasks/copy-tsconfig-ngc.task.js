"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const options_keys_1 = require("../../model/options.keys");
const path = require("path");
const plumber = require("gulp-plumber");
/**
 * Copy tsconfig-ngc.json to the outDir folder
 */
class CopyTsconfigNgcTask {
    /**
     * Registring the task
     */
    registerTask(argv, onError, dependencies = []) {
        const taskName = 'copy-tsconfig-ngc-task';
        const pathFromDirname = path.resolve(__dirname, CopyTsconfigNgcTask.tsconfigPath);
        const relativePathFromCwd = path.relative(process.cwd(), pathFromDirname);
        gulp.task(taskName, dependencies, () => {
            return gulp.src(relativePathFromCwd)
                .pipe(plumber(onError))
                .pipe(gulp.dest(argv[options_keys_1.OptionsKeys.OUT_DIR]));
        });
        return taskName;
    }
}
/**
 * tsconfig-ngc.json path.
 * Path from this file to tsconfig-ngc.json when project is compiled to javascript
 */
CopyTsconfigNgcTask.tsconfigPath = '../../tsconfig-ngc.json';
exports.CopyTsconfigNgcTask = CopyTsconfigNgcTask;
//# sourceMappingURL=copy-tsconfig-ngc.task.js.map
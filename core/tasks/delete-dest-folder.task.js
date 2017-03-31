"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const del = require("del");
const options_keys_1 = require("../../model/options.keys");
/**
 * Delete our dist folder before every run
 */
class DeleteDestFolderTask {
    /**
     * Registring the task
     */
    registerTask(argv, onError, dependencies = []) {
        const taskName = 'delete-dest-folder-task';
        gulp.task(taskName, dependencies, () => {
            return del([argv[options_keys_1.OptionsKeys.OUT_DIR]]);
        });
        return taskName;
    }
}
exports.DeleteDestFolderTask = DeleteDestFolderTask;
//# sourceMappingURL=delete-dest-folder.task.js.map
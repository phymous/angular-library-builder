"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const main_task_1 = require("./tasks/main.task");
const logger_1 = require("./services/logger");
/**
 * This is just an abstraction on top of gulp
 */
class AngularLibraryBuilder {
    constructor(args) {
        this.args = args;
        this.mainTask = new main_task_1.MainTask();
    }
    /**
     * Invoke mainTask to register all the other tasks in gulp api
     * Then run the main task with gulp.
     */
    buildLibrary() {
        const taskName = this.mainTask.registerAllTasks(this.args, this.onError);
        gulp.start(taskName, this.onSuccess);
    }
    /**
     * When everything finishes with success this method should be called!
     */
    onSuccess() {
        logger_1.Logger.success('Your library was successfully built! Congratulations!');
        process.exit(0);
    }
    /**
     * When something wrong happens this method should be called!
     */
    onError() {
        logger_1.Logger.warning('\nUnfortunately we were not able to build your library! :( \n');
    }
}
exports.AngularLibraryBuilder = AngularLibraryBuilder;
//# sourceMappingURL=angular-library-builder.js.map
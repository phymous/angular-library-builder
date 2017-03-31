"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const delete_dest_folder_task_1 = require("./delete-dest-folder.task");
const inline_html_css_task_1 = require("./inline-html-css.task");
const ngc_compile_task_1 = require("./ngc-compile.task");
const copy_tsconfig_ngc_task_1 = require("./copy-tsconfig-ngc.task");
/**
 * Main taks that manages all dependencies between other tasks
 */
class MainTask {
    constructor() {
        this.deleteTask = new delete_dest_folder_task_1.DeleteDestFolderTask();
        this.inlineTask = new inline_html_css_task_1.InlineHtmlCssTask();
        this.copyTsconfigTask = new copy_tsconfig_ngc_task_1.CopyTsconfigNgcTask();
        this.ngcTask = new ngc_compile_task_1.NgcCompileTask();
    }
    registerAllTasks(argv, onError) {
        const deleteTaskName = this.deleteTask.registerTask(argv, onError);
        const inlineTaskName = this.inlineTask.registerTask(argv, onError, [deleteTaskName]);
        const copyTsconfigTaskName = this.copyTsconfigTask.registerTask(argv, onError, [inlineTaskName]);
        const ngcTaskName = this.ngcTask.registerTask(argv, onError, [copyTsconfigTaskName]);
        const taskName = 'main-task';
        gulp.task(taskName, [ngcTaskName]);
        return taskName;
    }
}
exports.MainTask = MainTask;
//# sourceMappingURL=main.task.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const options_keys_1 = require("../../model/options.keys");
const template_processor_1 = require("./inline-html-css.helpers/template.processor");
const style_processor_1 = require("./inline-html-css.helpers/style.processor");
const plumber = require("gulp-plumber");
const inlineNg2Template = require('gulp-inline-ng2-template');
/**
 * The task that inlines HTML and CSS inside the component
 * It replaces templateUrl with template
 *   and also styleUrls with styles
 */
class InlineHtmlCssTask {
    /**
     * Registring the task
     */
    registerTask(argv, onError, dependencies = []) {
        const taskName = 'inline-html-css-task';
        const inputFolder = `./${argv[options_keys_1.OptionsKeys.ROOT_DIR]}`;
        const inputTypescriptFiles = `${inputFolder}/**/*.ts`;
        const rejectTypescriptSpecFiles = `!${inputFolder}/**/*.spec.ts`;
        const destFolder = `./${argv[options_keys_1.OptionsKeys.OUT_DIR]}`;
        gulp.task(taskName, dependencies, () => {
            return gulp.src([inputTypescriptFiles, rejectTypescriptSpecFiles])
                .pipe(plumber(onError))
                .pipe(inlineNg2Template(this.getInlineNg2ConfigObject(inputFolder)))
                .pipe(gulp.dest(destFolder));
        });
        return taskName;
    }
    /**
     * Some default config settings for gulp-inline-ng2-template
     */
    getInlineNg2ConfigObject(inputFolder) {
        return {
            base: inputFolder,
            useRelativePaths: true,
            removeLineBreaks: true,
            supportNonExistentFiles: true,
            templateProcessor: template_processor_1.templateProcessor,
            styleProcessor: style_processor_1.styleProcessor,
        };
    }
}
exports.InlineHtmlCssTask = InlineHtmlCssTask;
//# sourceMappingURL=inline-html-css.task.js.map
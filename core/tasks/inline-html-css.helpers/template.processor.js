"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html_minifier_1 = require("html-minifier");
const logger_1 = require("../../services/logger");
/**
 * Using html-minifier in order to minify our HTML
 * Some conservative rules used in order to preserve angular functionality
 *
 */
function templateProcessor(path, ext, file, cb) {
    try {
        var minifiedFile = html_minifier_1.minify(file, {
            collapseWhitespace: true,
            caseSensitive: true,
            removeComments: true,
            removeRedundantAttributes: true,
            keepClosingSlash: true
        });
        cb(null, minifiedFile);
    }
    catch (err) {
        logger_1.Logger.error('Problem with html-minifier. Please create an issue https://github.com/bmvantunes/angular-library-builder');
        cb(err);
    }
}
exports.templateProcessor = templateProcessor;
//# sourceMappingURL=template.processor.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sass_compiler_1 = require("./sass.compiler");
const postcss = require("postcss");
const logger_1 = require("../../services/logger");
const csso = require('csso');
const autoprefixer = require('autoprefixer');
/**
 * If our file is .scss or .sass we first compile it using node-sass, then
 *   we just call applyOptimization with the compile css.
 * If it is a plain css file, we just call applyOptimization
 */
function styleProcessor(path, ext, file, cb) {
    if (['.scss', '.sass'].indexOf(ext[0]) >= 0) {
        sass_compiler_1.compileSass(path, ext, file, cb, applyOptimization);
    }
    else {
        applyOptimization(file, cb);
    }
}
exports.styleProcessor = styleProcessor;
/**
 * Apply optimizations to our code
 * Add autoprefixer:
 *   - if we have something like position: sticky;
 *      - with autoprefixer the end result is something like:
 *      - position:-webkit-sticky; position:sticky;
 *
 * We also minify with CSSO that is a really powerful minifier
 *   - sometimes too greedy
 */
function applyOptimization(css = '', cb) {
    try {
        const autoprefixed = postcss([autoprefixer]).process(css).css;
        const minified = csso.minify(autoprefixed).css;
        cb(null, minified);
    }
    catch (err) {
        logger_1.Logger.error('Problem with autoprefixer/csso. Please create an issue https://github.com/bmvantunes/angular-library-builder');
        cb(err);
    }
}
//# sourceMappingURL=style.processor.js.map
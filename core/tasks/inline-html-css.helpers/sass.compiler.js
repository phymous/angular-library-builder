"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_sass_1 = require("node-sass");
const logger_1 = require("../../services/logger");
/**
 * We use node-sass to compile our scss/sass
 * If we get an error we call our callback with the error
 * If we don't have any errors, we just call onSucess with
 *   the resulting css and the initial callback
 */
function compileSass(path, ext, file, callback, onSuccess) {
    node_sass_1.render({
        file: path,
        outputStyle: 'compressed',
        importer: importer
    }, (error, result) => {
        if (error) {
            logger_1.Logger.error(error.formatted);
            callback(error);
        }
        else {
            onSuccess(result.css, callback);
        }
    });
}
exports.compileSass = compileSass;
/**
 * When the compiler tries to import something like @import "~something/something"
 * it will actually get the file /your/project/path/node_modules/something/something.scss
 * This only happens if we type ~ in the beginning of the import path.
 * Otherwise it would work as normally node-sass works:
 *   node-sass will try to use something like ./something/something.scss
 */
function importer(url, prev, done) {
    const newPath = url.replace(/^~/, `${process.cwd()}/node_modules/`);
    done({ file: newPath });
}
//# sourceMappingURL=sass.compiler.js.map
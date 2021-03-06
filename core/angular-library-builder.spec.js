"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const chai = require("chai");
const angular_library_builder_1 = require("./angular-library-builder");
const options_keys_1 = require("../model/options.keys");
const copy_tsconfig_ngc_task_1 = require("./tasks/copy-tsconfig-ngc.task");
describe('Integration Tests', () => {
    // We need this in order to run with ts-node inside src folder instead of project root
    copy_tsconfig_ngc_task_1.CopyTsconfigNgcTask.tsconfigPath = `../${copy_tsconfig_ngc_task_1.CopyTsconfigNgcTask.tsconfigPath}`;
    beforeEach(() => {
        chai.use(require('chai-fs'));
    });
    it('should be able to handle Basic html, basic css and scss files', (done) => {
        runIntegrationTestExpectSuccess('basic-html-basic-scss-and-css', done);
    });
    it('should process html with Angular attributes [property] and *ngIf', (done) => {
        runIntegrationTestExpectSuccess('basic-html-no-css', done);
    });
    it('should allow empty/no-content scss files without node-sass errors', (done) => {
        runIntegrationTestExpectSuccess('allow-empty-scss-files', done);
    });
    it('should ignore all *.spec.ts files and not output them to outDir folder', (done) => {
        runIntegrationTestExpectSuccess('basic-html-no-css-with-spec-files', done);
    });
    // it('Expect Scss problems - Exception', (done) => {
    //   runIntegrationTestExpectExceptionNoOutput('scss-does-not-compile', done);
    // });
});
// function runIntegrationTestExpectExceptionNoOutput(testName: string, done: Function) {
//   const inputFolder = `test/fixtures/${testName}/input`;
//   const outputFolder = `test/fixtures/${testName}/output`;
//   // const expectedOutputFolder = `test/fixtures/${testName}/output-expected`;
//   const builder = new AngularLibraryBuilder({
//     [OptionsKeys.ROOT_DIR]: inputFolder,
//     [OptionsKeys.OUT_DIR]: outputFolder,
//   });
//   expect(builder.buildLibrary).to.throw();
// }
function runIntegrationTestExpectSuccess(testName, done) {
    const inputFolder = `test/fixtures/${testName}/input`;
    const outputFolder = `test/fixtures/${testName}/output`;
    const expectedOutputFolder = `test/fixtures/${testName}/output-expected`;
    const builder = new angular_library_builder_1.AngularLibraryBuilder({
        [options_keys_1.OptionsKeys.ROOT_DIR]: inputFolder,
        [options_keys_1.OptionsKeys.OUT_DIR]: outputFolder,
    });
    builder.onSuccess = () => {
        chai_1.expect(outputFolder).to.be.a.directory().and.equal(expectedOutputFolder);
        done();
    };
    builder.buildLibrary();
}
//# sourceMappingURL=angular-library-builder.spec.js.map
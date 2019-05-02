// @noflow

module.exports = function(config) {
	config.set({
		mutator: 'javascript',
		packageManager: 'npm',
		reporters: ['clear-text', 'progress'],
		testRunner: 'mocha',
		transpilers: ['babel'],
		babelrcFile: '.babelrc',
		testFramework: 'mocha',
		coverageAnalysis: 'off',
		mochaOptions: {
			files: ['src/__tests__/index.js']
		}
	});
};

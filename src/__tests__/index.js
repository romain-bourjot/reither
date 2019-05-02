// @noflow

import {expect} from 'chai';
import {isError, success, fail} from 'reither';

describe('reither', () => {
	it('Should create a fail', () => {
		const expectedValue = Symbol();

		const result = fail(expectedValue);

		const expected = {
			isError: true,
			error: expectedValue,
			value: undefined
		};

		const actual = {
			isError: isError(result),
			error: result.error,
			value: result.value
		};

		expect(expected).to.deep.equal(actual);
	});

	it('Should create a successs', () => {
		const expectedValue = Symbol();

		const result = success(expectedValue);

		const expected = {
			isError: false,
			error: undefined,
			value: expectedValue
		};

		const actual = {
			isError: isError(result),
			error: result.error,
			value: result.value
		};

		expect(expected).to.deep.equal(actual);
	});
});

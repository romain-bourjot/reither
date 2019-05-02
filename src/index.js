// @flow

export type Either<T, U> = $ReadOnly<
	| {|isError: true, error: U|}
	| {|isError: false, value: T|}
>;

export function fail<T>(error: T): Either<empty, T> {
	return {isError: true, error};
}

export function success<T>(value: T): Either<T, empty> {
	return {isError: false, value};
}

export function isError(either: Either<any, any>): boolean %checks {
	return either.isError;
}

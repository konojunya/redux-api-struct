"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
describe("createDefaultStruct testing", () => {
    test("not args createDefaultStruct", () => {
        expect(__1.createDefaultStruct()).toEqual({
            status: __1.ReduxAPIState.INITIAL,
            data: undefined,
            error: __1.errorDefault()
        });
    });
    test("default args createDefaultStruct", () => {
        expect(__1.createDefaultStruct(1)).toEqual({
            status: __1.ReduxAPIState.INITIAL,
            data: 1,
            error: __1.errorDefault()
        });
    });
});
describe("errorDefault testing", () => {
    test("errorDefault", () => {
        expect(__1.errorDefault()).toEqual({
            statusCode: 999,
            message: "",
            error: Error()
        });
    });
});
describe("alias", () => {
    test("alias initial", () => {
        expect(__1.isInitial).toEqual(__1.ReduxAPIState.INITIAL);
    });
    test("alias fetching", () => {
        expect(__1.isFetching).toEqual(__1.ReduxAPIState.FETCHING);
    });
    test("alias loading", () => {
        expect(__1.isLoading).toEqual(__1.ReduxAPIState.INITIAL || __1.ReduxAPIState.FETCHING);
    });
    test("alias success", () => {
        expect(__1.isSuccess).toEqual(__1.ReduxAPIState.SUCCESS);
    });
    test("alias failure", () => {
        expect(__1.isFailure).toEqual(__1.ReduxAPIState.FAILURE);
    });
});

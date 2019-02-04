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
describe("alias function", () => {
    test("function isInitial", () => {
        expect(__1.ReduxAPIState.isInitial(__1.ReduxAPIState.INITIAL)).toBeTruthy();
    });
    test("function isFetching", () => {
        expect(__1.ReduxAPIState.isFetching(__1.ReduxAPIState.FETCHING)).toBeTruthy();
    });
    test("function isLoading", () => {
        expect(__1.ReduxAPIState.isLoading(__1.ReduxAPIState.INITIAL)).toBeTruthy();
        expect(__1.ReduxAPIState.isLoading(__1.ReduxAPIState.FETCHING)).toBeTruthy();
    });
    test("function isSuccess", () => {
        expect(__1.ReduxAPIState.isSuccess(__1.ReduxAPIState.SUCCESS)).toBeTruthy();
    });
    test("function isFailure", () => {
        expect(__1.ReduxAPIState.isFailure(__1.ReduxAPIState.FAILURE)).toBeTruthy();
    });
});

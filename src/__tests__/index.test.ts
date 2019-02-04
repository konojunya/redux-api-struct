import { createDefaultStruct, errorDefault, ReduxAPIState } from "../";

describe("createDefaultStruct testing", () => {
  test("not args createDefaultStruct", () => {
    expect(createDefaultStruct()).toEqual({
      status: ReduxAPIState.INITIAL,
      data: undefined,
      error: errorDefault()
    });
  });
  test("default args createDefaultStruct", () => {
    expect(createDefaultStruct(1)).toEqual({
      status: ReduxAPIState.INITIAL,
      data: 1,
      error: errorDefault()
    });
  });
});

describe("errorDefault testing", () => {
  test("errorDefault", () => {
    expect(errorDefault()).toEqual({
      statusCode: 999,
      message: "",
      error: Error()
    });
  });
});

describe("alias function", () => {
  test("function isInitial", () => {
    expect(ReduxAPIState.isInitial(ReduxAPIState.INITIAL)).toBeTruthy();
  });
  test("function isFetching", () => {
    expect(ReduxAPIState.isFetching(ReduxAPIState.FETCHING)).toBeTruthy();
  });
  test("function isLoading", () => {
    expect(ReduxAPIState.isLoading(ReduxAPIState.INITIAL)).toBeTruthy();
    expect(ReduxAPIState.isLoading(ReduxAPIState.FETCHING)).toBeTruthy();
  });
  test("function isSuccess", () => {
    expect(ReduxAPIState.isSuccess(ReduxAPIState.SUCCESS)).toBeTruthy();
  });
  test("function isFailure", () => {
    expect(ReduxAPIState.isFailure(ReduxAPIState.FAILURE)).toBeTruthy();
  });
});

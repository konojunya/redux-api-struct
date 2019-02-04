import {
  createDefaultStruct,
  errorDefault,
  ReduxAPIState,
  isInitial,
  isFetching,
  isLoading,
  isSuccess,
  isFailure
} from "../";

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

describe("alias", () => {
  test("alias initial", () => {
    expect(isInitial).toEqual(ReduxAPIState.INITIAL);
  });
  test("alias fetching", () => {
    expect(isFetching).toEqual(ReduxAPIState.FETCHING);
  });
  test("alias loading", () => {
    expect(isLoading).toEqual(ReduxAPIState.INITIAL || ReduxAPIState.FETCHING);
  });
  test("alias success", () => {
    expect(isSuccess).toEqual(ReduxAPIState.SUCCESS);
  });
  test("alias failure", () => {
    expect(isFailure).toEqual(ReduxAPIState.FAILURE);
  });
});

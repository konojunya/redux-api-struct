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

export interface ReduxAPIError {
  statusCode: number;
  error: Error;
  message?: string;
}

export enum ReduxAPIState {
  INITIAL,
  FETCHING,
  SUCCESS,
  FAILURE
}

export interface ReduxAPIStruct<T> {
  status: ReduxAPIState;
  data: T;
  error: ReduxAPIError;
}

export const createDefaultStruct = <T>(
  defaultValue?: any
): ReduxAPIStruct<T> => ({
  status: ReduxAPIState.INITIAL,
  data: defaultValue,
  error: errorDefault()
});

export const errorDefault = (): ReduxAPIError => ({
  statusCode: 999,
  message: "",
  error: Error()
});

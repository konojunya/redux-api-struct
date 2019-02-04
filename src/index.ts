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

// alias
export const isInitial = ReduxAPIState.INITIAL;
export const isFetching = ReduxAPIState.FETCHING;
export const isLoading = ReduxAPIState.INITIAL || ReduxAPIState.FETCHING;
export const isSuccess = ReduxAPIState.SUCCESS;
export const isFailure = ReduxAPIState.FAILURE;

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

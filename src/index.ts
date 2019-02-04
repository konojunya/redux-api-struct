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

// functions
export namespace ReduxAPIState {
  export const isInitial = (state: ReduxAPIState) =>
    state === ReduxAPIState.INITIAL;
  export const isFetching = (state: ReduxAPIState) =>
    state === ReduxAPIState.FETCHING;
  export const isLoading = (state: ReduxAPIState) =>
    state === ReduxAPIState.INITIAL || state === ReduxAPIState.FETCHING;
  export const isSuccess = (state: ReduxAPIState) =>
    state === ReduxAPIState.SUCCESS;
  export const isFailure = (state: ReduxAPIState) =>
    state === ReduxAPIState.FAILURE;
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

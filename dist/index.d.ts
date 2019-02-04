export interface ReduxAPIError {
    statusCode: number;
    error: Error;
    message?: string;
}
export declare enum ReduxAPIState {
    INITIAL = 0,
    FETCHING = 1,
    SUCCESS = 2,
    FAILURE = 3
}
export declare namespace ReduxAPIState {
    const isInitial: (state: ReduxAPIState) => boolean;
    const isFetching: (state: ReduxAPIState) => boolean;
    const isLoading: (state: ReduxAPIState) => boolean;
    const isSuccess: (state: ReduxAPIState) => boolean;
    const isFailure: (state: ReduxAPIState) => boolean;
}
export interface ReduxAPIStruct<T> {
    status: ReduxAPIState;
    data: T;
    error: ReduxAPIError;
}
export declare const createDefaultStruct: <T>(defaultValue?: any) => ReduxAPIStruct<T>;
export declare const errorDefault: () => ReduxAPIError;

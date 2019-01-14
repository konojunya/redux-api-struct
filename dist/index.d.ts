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
export interface ReduxAPIStruct<T> {
    status: ReduxAPIState;
    data: T;
    error: ReduxAPIError;
}
export declare const createDefaultStruct: <T>(defaultValue?: any) => ReduxAPIStruct<T>;
export declare const errorDefault: () => ReduxAPIError;

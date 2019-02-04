"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxAPIState;
(function (ReduxAPIState) {
    ReduxAPIState[ReduxAPIState["INITIAL"] = 0] = "INITIAL";
    ReduxAPIState[ReduxAPIState["FETCHING"] = 1] = "FETCHING";
    ReduxAPIState[ReduxAPIState["SUCCESS"] = 2] = "SUCCESS";
    ReduxAPIState[ReduxAPIState["FAILURE"] = 3] = "FAILURE";
})(ReduxAPIState = exports.ReduxAPIState || (exports.ReduxAPIState = {}));
// alias
exports.isInitial = ReduxAPIState.INITIAL;
exports.isFetching = ReduxAPIState.FETCHING;
exports.isLoading = ReduxAPIState.INITIAL || ReduxAPIState.FETCHING;
exports.isSuccess = ReduxAPIState.SUCCESS;
exports.isFailure = ReduxAPIState.FAILURE;
exports.createDefaultStruct = (defaultValue) => ({
    status: ReduxAPIState.INITIAL,
    data: defaultValue,
    error: exports.errorDefault()
});
exports.errorDefault = () => ({
    statusCode: 999,
    message: "",
    error: Error()
});

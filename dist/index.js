"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxAPIState;
(function (ReduxAPIState) {
    ReduxAPIState[ReduxAPIState["INITIAL"] = 0] = "INITIAL";
    ReduxAPIState[ReduxAPIState["FETCHING"] = 1] = "FETCHING";
    ReduxAPIState[ReduxAPIState["SUCCESS"] = 2] = "SUCCESS";
    ReduxAPIState[ReduxAPIState["FAILURE"] = 3] = "FAILURE";
})(ReduxAPIState = exports.ReduxAPIState || (exports.ReduxAPIState = {}));
exports.createDefaultStruct = (defaultValue) => ({
    status: ReduxAPIState.INITIAL,
    data: defaultValue,
    error: exports.errorDefault()
});
exports.errorDefault = () => ({
    statusCode: 0,
    message: "",
    error: Error()
});

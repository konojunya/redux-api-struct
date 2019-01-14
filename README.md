![ReduxAPIStruct Logo](https://raw.githubusercontent.com/konojunya/redux-api-struct/master/logo/logo.png)

[![npm](https://img.shields.io/npm/v/redux-api-struct.svg?style=flat)](https://www.npmjs.com/package/redux-api-struct)
[![CircleCI](https://circleci.com/gh/konojunya/redux-api-struct/tree/master.svg?style=shield)](https://circleci.com/gh/konojunya/redux-api-struct/tree/master)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

redux-api-struct makes it easy to manage the state of the API for redux's state.

# Description

redux-api-struct provides types and utils for store.

By managing the state with `initial` `fetching`, `success` and `failure`, it is possible to easily switch the UI on the component side, making the error report easier to write due to the structure of the error, or letting the error sentence depend on the action.

# Installation

install with npm or yarn

- npm

```shell
npm install --save redux-api-struct
```

- yarn

```shell
yarn add redux-api-struct
```

# Usage

redux-api-struct is supposed to be used with redux.

sample is an example using **typescript-fsa** and **typescript-fsa-reducers**.

```ts
import { reducerWithInitialState } from "typescript-fsa-reducers";
import {
  ReduxAPIStruct,
  ReduxAPIState,
  createDefaultStruct
} from "redux-api-struct";

/**
 * To createDefaultStruct, pass in the generic type such as API response,
 * give the default value. If there is no default value,
 * undefined is substituted.
 */
export interface InitialState {
  user: ReduxAPIStrcut<number>
}

// case no defualt value
export const initialState: InitialState = {
  count: createDefaultStruct<number>()
}

// case default value is 0
export const initialState: InitialState = {
  count: createDefaultStruct<number>(0)
}

// reducer
export const sampleReducer = reducerWithInitialState(initialState)
  .case(ActionCreator.request, state => {
    ...state,
    count: {
      ...state.count,
      state: ReduxAPIState.FETCHING
    }
  })
  .case(ActionCreator.success, (state, payload) => {
    ...state,
    count: {
       ...state.count,
       state: ReduxAPIState.SUCCESS,
       data: payload
    }
  })
  .case(ActionCreator.failure, (state, error) => {
    ...state,
    count: {
      ...state.count,
      state: ReduxAPIState.FAILURE,
      error
    }
  })
```

actionCreator.ts

```ts
import actionCreatorFactory from "typescript-fsa";
import { ReduxAPIError } from "redux-api-struct";

const actionCreator = actionCreatorFactory("sample");

// actionCreator
export type RequestPayload = void;
export const request = actionCreator<RequestPayload>("REQUEST");

export type SuccessPayload = number;
export const success = actionCreator<SuccessPayload>("SUCCESS");

export type FailurePayload = ReduxAPIError;
export const failure = actionCreator<FailurePayload>("FAILURE");

export const nextCount = () => async (dispatch, getState) => {
  const { sampleReducer } = getState();
  dispatch(request());

  let num: number = sampleReducer.count.data;
  try {
    const nextCount = await new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (Math.floor(Math.random() * 4) === 0) {
          reject(new Error("request failure"));
        }
        resolve(++num);
      }, 500);
    });
    dispatch(success(nextCount));
  } catch (error) {
    // Depending on the type of ReduxAPIError, statusCode, error and message are required.
    dispatch(
      failure({
        statusCode: 500,
        error
      })
    );
  }
};
```

in component

```tsx
import * as React from "react";
import { connect } from "react-redux";
import { ReduxAPIStruct, ReduxAPIState } from "redux-api-struct";
import { nextCount } from "./action"

interface Props {
  count: ReduxAPIStruct<number>;
  nextCount: typeof nextCount;
}

const Component: React.FunctionComponent<Props> = ({ count, nextCount }) => {
  const countComponent = (() => {
    switch(count) {
      case ReduxAPIState.INITIAL:
      case ReduxAPIState.FETCHING:
        return <p>loading...</p>
      case ReduxAPIState.SUCCESS:
        return <p>{count.data}</p>
      caes ReduxAPIState.FAILURE:
        return <p>failure component</p>
    }
  })()

  <>
    {countComponent}
    <button onClick={nextCount}>+1</button>
  </>
}

const Counter = connect(
  state => ({
    count: state.sampleReducer.count
  }),
  dispatch => ({
    nextCount: () => dispatch(nextCount())
  })
)(Component)

export { Counter }
```

# API

The state wrapped by ReduxAPIStruct has the following state.

- status
- data
- error

## status: ReduxAPIState

status is for describing the situation with the API with the following enums briefly. Components can use this enum to separate out depending on the state.

```ts
enum ReduxAPIState {
  INITIAL,
  FETCHING,
  SUCCESS,
  FAILURE
}
```

## data: T

data is given the type of generics given by the type of ReduxAPIStruct.

The actual response returned by the API will be included in this data.

## error: ReduxAPIError

error requires three states. Only the statusCode is mandatory. The error type of the component is switched by statusCode so that error main body is put on because it is used for error reporting. message makes it easy to issue arbitrary error statements to action.

## createDefaultStruct: <T>(default?: any) => ReduxAPIStruct<T>

In createDefaultStruct, it is possible to give the default value as optional. You can get the benefit of ReduxAPIStruct by setting the return value of this method to the state of reducer.

## errorDefault: () => ReduxAPIError

errorDefault is a method to initially generate a state for managing errors. Use it to generate a test code or an arbitrary error.

# Logo

<div>
<img src='https://raw.githubusercontent.com/konojunya/redux-api-struct/master/logo/logo.png' height="100px" alt='ReduxAPIStruct Logo' />
<img src='https://raw.githubusercontent.com/konojunya/redux-api-struct/master/logo/logo_square.png' height="100px" alt='ReduxAPIStruct Logo' />
</div>

created by [kinokoruumu](https://github.com/kinokoruumu)

you can see [logo dir](https://github.com/konojunya/redux-api-struct/blob/master/logo)

# License

MIT

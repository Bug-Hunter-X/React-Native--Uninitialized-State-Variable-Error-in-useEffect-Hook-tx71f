# React Native Uninitialized State Variable Bug

This repository demonstrates a common error in React Native applications: attempting to access a state variable before it has been initialized within a `useEffect` hook. This often occurs when fetching data asynchronously.

## The Bug
The `bug.js` file contains a component that fetches data from an API. It attempts to render data from the state variable before the `useEffect` hook has had a chance to update it, resulting in a `TypeError: Cannot read properties of null (reading 'name')` error.

## The Solution
The `bugSolution.js` file provides a solution by using conditional rendering to only render the data once it has been fetched and the state variable updated.  Alternatively, you can set a default value for the state variable.

## How to reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `npx react-native run-android` or `npx react-native run-ios`.
5. Observe the error in the `bug.js` version and the correct behavior in the `bugSolution.js` version.

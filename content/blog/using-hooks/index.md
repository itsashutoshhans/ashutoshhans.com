---
title: using hooks in React
date: 2020-07-28T17:45:55.354Z
---

Hooks are new addition in React 16.8 which lets us use state and other React features without the need of writing a class.

## What are the problems ?

### It is hard to reuse stateful logic between components.
React doesn't offer a way to share any reusable behovior between the components. Patterns like 'render props'and 'high-order components' try to solve this problem but these both require restructuring your components which is cumbersome and leads to wrapper hell

### Giant components
Our application grows, so does the size of components which becomes unmanageable and in many cases very difficult to break down into smaller components because the state logic is all over. Also, each lifecycle method may contain a mix of unrelated logic that would introduce bugs and inconsistencies.

### Confusing classes
As the functionality of the app increases we may realize that there is a need of state and the function to class conversion is a lot of effort. In addition to this, we have to understand a lot of javascript mechanisms like this, binding etc.

Classes are hard for machines as well. They don't minify well and make hot reloading unreliable.
Read more in detail: []()

> TODO: What is wrapper hell ?


## What is a hook ? 
- Hooks are functions that let's you "hook into" React state and lifecycle features from function components
- Hooks don't work inside classes

## useState
- `useState` hook is called inside a function component to add some local state to it
- State is preserved between re-renders
- returns a pair: the current state value and a function that lets to update it
(stateValue, setterFunction) function allows to the state value
multiple times for multiple values
- The only argument to `useState` is initial state (this state argument is used only during the first render and it doesn't have to been an object)
- The different names given to the state variable aren't a part of the `useState`.
- React assumes that if you call `useState` many time, you do it in the same order during every render

## useContext

## useEffect
we've likey used data fetching, subscriptions, or manually changing the DOM from React Components. These operations are called **side effects** because they can affect other components and can't be done during rendering

- `useEffect` hook adds the ability to perform side effects from a function component
- Serves same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API
- `useEffect` function is run after flushing changes to the DOM
- By default, React runs the effects after every render
- Can be used more than once
- Let's you organize side effects in a component by what pieces are related

## Subsriptions (browser api, window resize extra)

## Conventions

## Quick references
What is render prop ?
Concretely, a render prop is a function prop that a component uses to know what to render.
In other words, we pass a function which returns a react component which has the render logic.

Example usage:
```js
class Tom extends React.Component{

}

class Jerry extends React.Component {
  constructor(props) {

  }
}
class ChaseJerry extends React.Component {

}
```
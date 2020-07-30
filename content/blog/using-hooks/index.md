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


## useState
(stateValue, setterFunction) function allows to the state value
multiple times for multiple values

## useContext

## useEffect (sideEffects)
componentDidMount
componentDidUpdate

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
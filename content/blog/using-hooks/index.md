---
title: using hooks in React
date: 2020-07-28T17:45:55.354Z
---

Hooks are new addition in React 16.8 which lets us use state and other React features without the need of writing a class.

## What are the current problems ? 
1. It's hard to reuse stateful logic between components
1. Giant components
1. confusing classes - function to class conversion is a lot of effort, (hard for machines, mehthod unminified), hot reloading difficult

## What is wrapper hell ?

## useState

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
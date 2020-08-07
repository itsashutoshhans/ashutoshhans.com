---
title: Context Api in React
date: "2020-08-07T13:55:06.985Z"
---

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

# When to use context
In the traditional prop system if we want to pass any information to any deeply nested child component then we have to pass it through all the intermediate components and this can be cumbersome.
Using context, we can avoid passing props through intermediate elements.

> Context let's you pass a value deep into the component tree without explicitly threading it through every component.

TODO: What is provider ? 
TODO: What is component composition ?

Alternate - component composition

# API

## React.createContext

```js
const MyContext = React.createContext(defaultValue);
```

Creates a context object. When React renders a component that subsribes to this context object it will read the current context value from the closest matching `Provider` above it in the tree.

The `defaultValue` argument is used *only* when a component does not have a matching Provider above in the tree.

> Passing `undefined` as a Provider value does not cause consuming the `defaultValue`

## Context.Provider

```jsx
<MyContext.Provider value={/* some value */}>
```

Every context comes with a Provider component that allows subscribing to the context changes for all the components which are consuming the context.

Accepts a `value` prop which is passed to the consuming components that are descendants of the provider.
One Provider can be connected to many consumers and Providers can be nested to override values deeper in the tree.

All the consumers that are descendants of the provider will re-render whenever the Provider's `value` prop changes.
The propagation from Provider to its descendant consumers is not subject to the `shouldComponentUpdate` method, so the consumer is updated even when an ancestor components skips an update.

## Class.contextType

The `contextType` property on a class can be assigned a Context object created by `React.createContext`.
This lets you consume the nearest current value of that context type using `this.context` and can be referenced in any of the lifecycle methods. 

> *Note*: You can only subscribe to single context using this API

You can also use *public class fields syntax* and use `static contextType = MyContext` to consume the context.

```js
class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
    /* render something based on the value */
  }
}
```

## Context.Consumer

```jsx
<MyContext.Consumer>
  {value => /* renders something based on value*/}
<MyContext.Consumer>
```
A React component that subssribes to context changes.
All the rules of context mentioned above are applicable (value = value prop on closest provider, uses `defaultValue` if there is no provider...)

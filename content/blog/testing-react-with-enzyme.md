---
title: Testing React with Enzyme
date: "2020-08-21T08:45:57.559Z"
---

## TDD (Test Driven Development)
Below are the steps or basic building blocks of TDD:
- Write test before even writing the code
- Write shell version of the code (enough of the function to be able to call but function won't do anything)
- Write test, it will fail. And that is red part of red green testing
- Once the tests are failing, write code to make it pass

## Why ?
- There is a lot time and effort required for manual testing and we have to repeat whole process if they fail
- No additional efforts after code change when we to it by TDD
- Better code, better organized (because we already plan before you code)
- More testable (while writing with view of test you won't write untestable code)
- fewer bugs (caught sooner if there are regressions)
- great coverage (but only this shouldn't be entire goal)


## What is Jest ?
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
Read more on https://jestjs.io/.  
It comes by default with `create-react-app`.

### Watch mode
Watch mode watches the changes and re runs the test based on any changes in the code.
By dafault, jest looks for .test.js files

## Enzyme Introduction and set up
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.
- Creates a virtual DOM for testing
- Allows testing without a browser (React DOM under the hood)
- Has a very good toolkit
  - Search through DOM
  - jQuery style selectors
  - Simulate simple events
- Access to props and states

### Installation
Install 3 packages as dev dependencies  
`npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16`

### Set up

```js
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

```




## Types of tests
- Unit tests
  - Tests one piece of code
- Integration tests
- Acceptance tests (End to End testing) (not in scope, selenium, cypress)

## Testing goal
- Easy maintainence of tests
  - Ideally, test behaviour not the implementation details so that our test doesn't break on a code refactor
- Easy diagnosis of failing tests
  - Test should tell exactly which part failed
  - We can test internal state change
  - Balance and trade-offs with above point
  - Granular testing but leads to brittle tests (if implementation details change)

## Art, not science
- Sometimes optimize for easy to diagnose
- Sometimes optimize for less brittle tests
- Find balance


# Snapshot testing


## Shallow Rendering
- only 1 level deep, cleaner and quicker testing, placeholders for children react component
- Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components
- It allows us to check if the render method of the component gets called
- Doesn't render child components 

## Mount
- Does full DOM rendering
- Renders children as well

## Patterns to test
1. That the component renders
2. Check that the initial elements always gets displayed
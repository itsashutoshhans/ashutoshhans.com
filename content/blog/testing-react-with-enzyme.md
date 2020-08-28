---
title: Testing React with Enzyme
date: "2020-08-21T08:45:57.559Z"
---

## TDD (Test Driven Development)
- Write test before even writing the code
- Write shell version of the code (enough of the fn to be able to call but fn won't do anything)
- write test, it will fail.. red part of red green testing
- once test is failing.. write code to make it pass

## why ?
- time and effort for manual.. and repeat if they fail
- no additional efforts after code change
- better code, better organized (plan before you code)
- more testable ( writing with view of test,.. u won't write untestable code)
- fewer bugs, (caught  sooner, regression)
- great coverage (shouldn't be entire goal)

Watch mode watches the changes and re runs the test based on any changes in the code

by dafault, jest looks for .test.js files


## Enzyme 
- Creates a virtual DOM for testing
- Allows testing without a browser (React DOM under the hood)
- Has a very good toolkit
  - Search through DOM
  - jQuery style selectors
  - Simulate simple events
- Access to props and states

install 3 packages, dev dependencies
`npm i --save-dev enzyme jest-enzyme enzyme-adapter-react-16`

### set up

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
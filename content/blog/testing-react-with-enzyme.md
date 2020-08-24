---
title: Testing React with Enzyme
date: "2020-08-21T08:45:57.559Z"
---


## Shallow Rendering
- Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components
- It allows us to check if the render method of the component gets called
- Doesn't render child components 


## mount
- Does full DOM rendering

## Patterns to test
1. That the component renders
2. Check that the initial elements always gets displayed
---
title: testing in javascript
date: "2020-08-03T11:39:08.613Z"
draft: true
---
# why tests? 

# it / test
test(name, fn, timeout) - a simple that defines / runs your test
contains one or more expectations.
Expectation is just an assertion that is either true or false.
it / spec with all true expectations is a passing spec.

# describe
describe(name, fn) creates a block that groups together several related tests.

# spyOn
spies - let you spy on the behaviour of the function and tracks all the calls to it and arguments

# spying an object
spyOnProperty(obj, property, accessType?)
Doesn't work on object literals https://medium.com/@juanlizarazo/how-to-spy-on-a-property-getter-or-setter-with-jasmine-ad06c00ba612

# spy a method call in constructor
https://stackoverflow.com/questions/8733978/jasmine-spying-on-a-method-call-within-a-constructor
---
title: Multithreading in JS
date: "2020-08-24T11:21:15.506Z"
draft: true
---

In the past 20 years, the web has evolved dramatically from static documents with a few styles to much complex and dynamic applications.

One thing hasn't changed though: we just have 1 thread per browser tab to do the work of rendering and running our javascript.

## The Problem

JavaScript is a single-threaded environment, that means multiple scripts cannot run at the same time. As an example, imagine a site that needs to handle UI events, fetch and process large amounts of API data, and manipulate the DOM.

Unfortunately all of that can't be done simultaneously due to limitations in browsers' JavaScript runtime environment.

Script execution always happens within a single thread.

Main thread is overworked.

## Root causes

- Long running script that blocks the DOM ​
- Parsing large json data set​
- Data Visualization​
- Running real time analytics ​
- Image Processing (can have millions of pixels, applying filters, affects)

let's figure out..

## The Solution: What are web workers ?

- In simple terms, Web Worker is a second thread for your javascript
- The worker thread can perform tasks in background without interfering with the user interface

We can use one thread to handle user-facing work like touch events and rendering the UI, and different threads to carry out all other heavy scripting/calculative work.​

## How web workers communicate with the main thread ?

Communication between a worker and the main thread is done via a system of messages.
Both sides send their messages using the `postMessage()` method and respond to messages via the `onMessage` event handler.

## Limitations

- Worker can't play with anything which is there on the screen
- That mean, can't directly manipulate the DOM inside a worker
- Can't use some default methods and properties of the `window` object
- Constructor functions and prototype can't be passed
- Event listeners can be shared
- Can't access local storage

All of these topics whether it is limitation, root causes or problem statement are our own experiences while solving the lineage problem in EDC

I would now request Anchit to take this forward and discuss about how used all the knowledge to solve the lineage and Impact problem.

## Types of workers

There are two types of workers, [Dedication Workers] and [Shared workers]. In this post we will cover only dedicated workers which we will refer to as 'web workers' or 'workers' throughout.

> The data is copied rather than shared.

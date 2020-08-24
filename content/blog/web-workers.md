---
title: Multithreading in JS
date: "2020-08-24T11:21:15.506Z"
---

## The Problem
JavaScript is a single-threaded environment, that means multiple scripts cannot run at the same time. As an example, imagine a site that needs to handle UI events, query and process large amounts of API data, and manipulate the DOM.Unfortunately all of that can't be done simultaneously due to limitations in browsers' JavaScript runtime. Script execution always happens within a single thread.

## What are web workers ?
- Web Workers are a simple means for web content to run scripts in background threads
- The worker thread can perform tasks without interfering with the user interface

The simplest use of workers is for performing a long running or computationally expensive task without interrupting the user interface.

## Types of workers
There are two types of workers, [Dedication Workers] and [Shared workers]. In this post we will cover only dedicated workers which we will refer to as 'web workers' or 'workers' throughout.

## How web workers communicate with the main thread ?
Communication between a worker and the main thread is done via a system of messages.
Both sides send their messages using the `postMessage()` method and respond to messages via the `onMessage` event hanlder.

> The data is copied rather than shared.

## Limitations 
- Can't directly manupulate the DOM inside a worker
- Can't use some default methods and properties of the `window` object
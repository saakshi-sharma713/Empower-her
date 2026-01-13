# Node.js Architecture (Simple Explanation)

Node.js is designed to run JavaScript **outside the browser** and handle many users at the same time efficiently. It uses a **single main thread** but still performs fast because it works in a **non-blocking** way.



* One main thread runs JavaScript
* Slow tasks are handled in the background
* Results are sent back when ready



## JavaScript Engine (V8)

* V8 is the **engine that runs JavaScript code**.
* It converts JavaScript into machine-level code.
* Without V8, JavaScript cannot run.


## Node.js Core APIs

* Core APIs are built-in features of Node.js.
* They allow JavaScript to do things like read files or create servers.

**Examples:**

* `fs` → read/write files
* `http` → create server
* `os` → system info





## Event Loop

* The event loop decides **what runs and when**.
* It keeps checking if any task is ready to execute.

**Why it is important:**

* Prevents blocking
* Handles many users smoothly



## libuv

### What is libuv?

* libuv is a **library written in C**.
* It manages asynchronous work for Node.js.

### Why Node.js needs libuv

* JavaScript runs on one thread
* File and network operations are slow
* libuv handles these without stopping the app

### Responsibilities of libuv

* Run the event loop
* Handle async I/O
* Manage the thread pool


## Thread Pool

### What is a thread pool?

* A thread pool is a group of **background threads**.
* Used for tasks that take time.

### Why Node.js uses a thread pool

* To keep the main thread free
* To avoid blocking JavaScript execution

### Tasks handled by thread pool

* File system (fs)
* Crypto operations
* Compression
* DNS lookup



## Worker Threads

### What are worker threads?

* Worker threads allow JavaScript to run in parallel.
* Each worker runs separately.

### Why worker threads are needed

* For heavy calculations
* To avoid freezing the app





## Event Loop Queues

### Macro Task Queue

* Handles bigger async tasks

**Examples:**

* `setTimeout`
* `setInterval`
* I/O callbacks



### Micro Task Queue

* Handles high-priority tasks

**Examples:**

* `Promise.then()`
* `Promise.catch()`



### Execution Priority

**Order of execution:**

1. Current code
2. Micro Task Queue
3. Macro Task Queue





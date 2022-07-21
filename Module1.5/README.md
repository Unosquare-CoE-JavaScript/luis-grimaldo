# Node JS: Advanced Concepts

The Node source code is written in which two languages? c++ & Javascript

What happens when the PBKDF2 hashing function from the crypto  module gets called by your application? Some JS code validates the function's arguments then some c++ code actually calculates the hash.

Node includes both V8 and libuv as dependencies.  What is the difference between the two? V8 is used to interpret and execute JS code, while libuv is used for accessing the filesystem and some aspects of concurrency.

## NodeJS
(50%js 50%-C++) it "traduces" our JS code to C++ and provides multiple APIs

## V8
(30%js 70%-C++) executes js code outside of the browser

## LIBUV
(100%-C++) gives acces to node to the operating system and handles aspects of concurrency

with process.binding() method it connects JS and C++ functions

## Event Loop

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.

official documentation: <https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/>

A series of elements participate in the event loop, such as:

- threading(Units of instructions of the code(a to-do list), our proces can have multiple threads)

- scheduling (os hability to decide which thread execute. Urgent threads must not wait a lot to be executed).

- tick (each cycle of a loop).

- thread pool (a series of four threads that can be used for running computationally intensive tasks).

- OS async helpers (when we make use of OS functions this are not added to the thread pool, instead libuv delegates them to the OS and notifes nodeJS when the OS function has been done).

## Worker threads

Worker thread is an excellent solution to JavaScript's concurrency problem; it does not provide multi-threading facilities to the language. Instead, the worker threads approach allows applications to use several isolated JavaScript workers, with Node providing communication between workers and the parent worker. Each worker in Node.js has its own V8 and Event Loop instance. Workers, unlike children's processes, can exchange memory.

´´´sh
const { Worker } = require('worker_threads')

const runService = (WorkerData) => {

    return new Promise((resolve, reject) => {

        const worker = new Worker('./workerExample.js', { WorkerData });

        worker.on('message', resolve);

        worker.on('error', reject);

        worker.on('exit', (code) => {

            if (code !== 0)

                reject(new Error(`stopped with  ${code} exit code`));

        })

    })

}

const run = async () => {

    const result = await runService('hello node.js')

    console.log(result);

}

run().catch(err => console.error(err))
´´´
Add this to workerExample.js file.

´´´sh
const { WorkerData, parentPort } = require('worker_threads')

parentPort.postMessage({ welcome: WorkerData })
´´´

We imported Worker from worker threads in our main.js script, then passed the data (filename) for the worker to process. As seen in the workerExample.js service, the next step is to listen for message events from the worker thread. Our main application sends WorkerData to this worker service, which includes a means to transmit back processed data via parentPort. We utilize postMessage() on this object (parentPort) to deliver processed data.

Worker threads also allow us to share memory by using SharedArrayBuffer objects. Transferring ArrayBuffer objects can also be used to share memory.

## Cluster Mode

The cluster is a collection of small child processes (" workers ") of a single parent process in Node .

Using the fork () method of the Node child_processes module, workers are created as child processes of a parent process, whose task is, instead, that of controlling them.

´´´sh
var cluster = require('cluster');
var http = require('http');
var numCPUs = 4;

if (cluster.isMaster) {
 for (var i = 0; i < numCPUs; i++) {
  cluster.fork();
 }
} else {
 http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('process ' + process.pid + ' says hello!');
 }).listen(8000);
}
´´´

## PM2 CLI

It’s a set of features for both hardening your current PM2 Runtime Process manager and monitoring applications in production.

With PM2 Plus you get:

- A Real-time Monitoring Web Interface
- Issues & Exception Tracking
- Deployment reporting
- Realtime logs
- Email & Slack notifications
- Custom Metrics Monitoring
- Custom Actions Center

## Redis

Client-side caching is a technique used to create high performance services. It exploits the memory available on application servers, servers that are usually distinct computers compared to the database nodes, to store some subset of the database information directly in the application side.

Normally when data is required, the application servers ask the database about such information, like in the following diagram:

+-------------+                                +----------+
|             | ------- GET user:1234 -------> |          |
| Application |                                | Database |
|             | <---- username = Alice ------- |          |
+-------------+                                +----------+
When client-side caching is used, the application will store the reply of popular queries directly inside the application memory, so that it can reuse such replies later, without contacting the database again:

+-------------+                                +----------+
|             |                                |          |
| Application |       ( No chat needed )       | Database |
|             |                                |          |
+-------------+                                +----------+
| Local cache |
|             |
| user:1234 = |
| username    |
| Alice       |
+-------------+
While the application memory used for the local cache may not be very big, the time needed in order to access the local computer memory is orders of magnitude smaller compared to accessing a networked service like a database. Since often the same small percentage of data are accessed frequently, this pattern can greatly reduce the latency for the application to get data and, at the same time, the load in the database side.

Moreover there are many datasets where items change very infrequently. For instance, most user posts in a social network are either immutable or rarely edited by the user. Adding to this the fact that usually a small percentage of the posts are very popular, either because a small set of users have a lot of followers and/or because recent posts have a lot more visibility, it is clear why such a pattern can be very useful.

Usually the two key advantages of client-side caching are:

Data is available with a very small latency.
The database system receives less queries, allowing it to serve the same dataset with a smaller number of nodes.

more information: <https://redis.io/docs/manual/client-side-caching/>

## AWS S3

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, including data lakes, cloud-native applications, and mobile applications. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-grained access controls to meet specific business, organizational, and compliance requirements.

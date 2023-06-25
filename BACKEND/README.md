## Socket.io and Express server

### Socket.io

```text
Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.
```

### WebSocket

```text
WebSocket is a communication protocol which provides a full-duplex and low-latency channel between the server and the browser.
```

### Express JS

```text 
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
```

### Some important events :

#### First Event

The connect event in Socket.IO is fired when a client successfully connects to the server. This event is fired both when the client first connects to the server, and when the client reconnects after a disconnection.

2. The on event in Socket.IO is used to listen for events that are emitted by the server. The on event takes two arguments: the name of the event that you want to listen for, and a callback function that will be called when the event is emitted.

3. The emit event in Socket.IO is used to send events to the server. The emit event takes two arguments: the name of the event that you want to send, and the data that you want to send with the event.

#### Last Event (In General)

The disconnect event in Socket.IO is fired when a client disconnects from the server. This event is fired both when the client closes the connection manually, and when the connection is lost due to network issues.

This event is often used to clean up the client's state

### Future Enhancement

#### 1) Creating Namespaces

#### 2) Creating Rooms

#### 3) Publish and subscribe (full scale) etc.....

#### 4) To be continued ......

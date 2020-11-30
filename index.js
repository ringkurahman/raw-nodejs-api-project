/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Ringku Rahman
 * Date: 1/12/2020
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 5000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
    console.log(`Server running on port ${app.config.port}`);
    });
};

// Handle Requests Response
app.handleReqRes = handleReqRes;

// Start the Server
app.createServer();

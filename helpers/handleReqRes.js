/*
 * Title: Handle Request Response
 * Description: Handle Request Response
 * Author: Ringku Rahman
 * Date: 1/12/2020
 */

 // dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// module scaffolding
const handler = {};

// Handle Requests Response
handler.handleReqRes = (req, res) => {
    // Request Handle
  // Get URL and parse it
    const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    // Combine Object
    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    }

  // Create Object from String DecoderMethod
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    // Check API
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // Return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    // Data Events
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);

    // response handle
    res.end('Hello');
    });
};

module.exports = handler;
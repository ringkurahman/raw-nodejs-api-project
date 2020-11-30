/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Ringku Rahman
 * Date: 1/12/2020
 */

// Module Scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'this is a sample url',
    });
}

module.exports = handler;
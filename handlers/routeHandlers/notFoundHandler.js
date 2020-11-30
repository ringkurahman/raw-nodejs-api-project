/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Ringku Rahman
 * Date: 1/12/2020
 */

// Module Scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested url was not found!',
    })
}

module.exports = handler;
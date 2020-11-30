/*
 * Title: Routes
 * Description: Application Routes
 * Author: Ringku Rahman
 * Date: 1/12/2020
 */

 // dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
}

module.exports = routes;
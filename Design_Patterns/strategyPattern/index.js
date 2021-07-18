/**
 * Object behavioral: Strategy
 * Intent: "Define a famiy of algoruthms, encpsulate each one, and make them interchangeable.
 * Strategy lets the algorrithm vary independently from clients that use it."
 *
 *
 * One amazing thing is that it is easy to add more startegies.
 */

var logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

logger.changeStrategy('toFile');

logger.log('Hello World');
logger.log('Hi World');
logger.log('Yo World');

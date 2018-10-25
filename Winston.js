/*You need to require Winston first
Sets the default level of
messages to be displayed.
The silly level means log everything
Format of output
*/
    const logger = winston.createLogger({
    level: silly,
    format: winston.format.json(),
    transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
    ],
    });
/*
Transports configure separate
loggers. This creates one logger
that logs to a filename called error.log
if the level of the message is error and a
second logger that logs everything to a
file named combined.log.
{ error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }*/
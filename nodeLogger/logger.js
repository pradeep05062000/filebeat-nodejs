const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, errors } = format;

// Define custom log format
const customFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});

// Create Winston logger
const logger = createLogger({
  level: 'info', // Default log level
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // Capture stack traces
    format.json()
  ),
  transports: [
    new transports.Console({
      format: combine(colorize(), format.json()), // Colorized console logs
    }),
    new transports.File({
      filename: 'logs/app.log', // File to store logs
      level: 'info', // Log level for the file
    }),
    new transports.File({
      filename: 'logs/error.log', // Separate file for errors
      level: 'error', // Log only errors
    }),
  ],
  exitOnError: false, // Do not exit on handled exceptions
});

// Export the logger
module.exports = logger;

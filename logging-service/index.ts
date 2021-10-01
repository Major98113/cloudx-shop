import { serviceContainer } from './config/inversify.config';
import { QueueInterface, QUEUE } from './types/queue.types';
import { LoggerInterface, Logger } from "./types/logger.types";

(async function main() {
    try {
        const QueueInstance = serviceContainer.get<QueueInterface>(QUEUE);
        const loggerInstance = serviceContainer.get<LoggerInterface>(Logger);

        await QueueInstance.connect();

        process.on('uncaughtException', function ( err: Error ) {
            loggerInstance.logError(
                `Error type: ${ err.name }
                    Error message: ${ err.message }
                    Error trace: ${ err.stack }`
            );
        });

        process.on('unhandledRejection', function ( reasonAny: any, p: Promise<any> ) {
            loggerInstance.logError(
                `Error type: Promise unhandled
                    Reject message: ${ reasonAny }`
            );
        });
    }
    catch (error) {
        console.error(error);
    }
}());
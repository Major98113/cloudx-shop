export interface QueueInterface {
    connect: any,
    getMessageFromQueue: any,
    disconnect: any
}

export const QUEUE = Symbol.for('QUEUE');
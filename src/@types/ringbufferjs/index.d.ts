// TODO: populate header metadata
// Type definitions for [LIBRARY NAME]
// Project: [LIBRARY URL]
// Definitions by: Amchelle Clendenin <https://github.com/amchelle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: publish types on DefinitelyTyped and use the npm install
declare module 'ringbufferjs' {

    export default class RingBuffer<T> {

        _elements: T[]
        _first: number
        _last: number
        _size: number
        _evictedCb: Function

        constructor(capacity: number, evictedCB?: Function);

        capacity(): number;
        isEmpty(): boolean;
        isFull(): boolean;
        peek(): T;
        peekN(count: number): T[];
        deq(): T;
        deqN(count: number): T[];
        enq(element: T): number;
        size(): number;
    }
}

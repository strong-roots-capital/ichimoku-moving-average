import test from 'ava'
import RingBuffer from 'ringbufferjs'

/**
 * Library under test
 */

import IchimokuMovingAverage from '../src/ichimoku-moving-average'

function clone<T = number>(list: T[]): T[] {
    return JSON.parse(JSON.stringify(list))
}

const averageValueShouldBeAverageOfHighAndLow = (t: any, list: number[], expected: number) => {
    t.is(expected, (Math.max(...list) + Math.min(...list))/2)
}

averageValueShouldBeAverageOfHighAndLow.title = (_ = '', list: number[], expected: number) => `should calculate ichimoku-average of ${JSON.stringify(list)} to be ${expected}`

const tenkan = new IchimokuMovingAverage(9)
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const value of values) {
    tenkan.push(value)
    test(
        averageValueShouldBeAverageOfHighAndLow,
        clone((tenkan as RingBuffer<number>)
              ._elements.filter(e => e !== null)),
        tenkan.value()
    )
}

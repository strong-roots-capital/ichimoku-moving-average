import test from 'ava'
import RingBuffer from 'ringbufferjs'

/**
 * Library under test
 */

import IchimokuMovingAverage from '../src/ichimoku-moving-average'

function clone<T = number>(list: T[]): T[] {
    return JSON.parse(JSON.stringify(list))
}

const averageValueShouldBeAverageOfHighAndLow = (t: any, highs: number[], lows: number[], expected: number) => {
    const highestHigh = Math.max(...highs)
    const lowestLow = Math.min(...lows)
    t.is(expected, (highestHigh + lowestLow)/2)
}

averageValueShouldBeAverageOfHighAndLow.title = (_ = '', highs: number[], lows: number[], expected: number) => `should calculate ichimoku-average of ${JSON.stringify(highs)} and ${JSON.stringify(lows)} to be ${expected}`

const tenkan = new IchimokuMovingAverage(9)
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const value of values) {
    tenkan.push(value + 10, value)
    test(
        averageValueShouldBeAverageOfHighAndLow,
        clone(tenkan.highs._elements.filter(e => e !== null)),
        clone(tenkan.lows._elements.filter(e => e !== null)),
        tenkan.value()
    )
}

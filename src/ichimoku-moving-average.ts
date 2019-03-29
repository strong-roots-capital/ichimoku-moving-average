/**
 * ichimoku-moving-average
 * Average of high and low over a lookback period
 */

import RingBuffer from 'ringbufferjs'


/**
 * Calculates the Ichimoku Moving Average over a given lookback
 * period, defined as the average of the highest value and the lowest
 * value.
 */
export default class IchimokuMovingAverage {

    highs: RingBuffer<number>
    lows: RingBuffer<number>

    /**
     * Construct an Ichimoku moving average with specified lookback.
     *
     * @param lookback - Lookback length of this Ichimoku moving average
     */
    constructor(lookback: number) {
        this.highs = new RingBuffer(lookback)
        this.lows = new RingBuffer(lookback)
    }

    /**
     * Calculate the Ichimoku moving average over the current lookback
     * period.
     *
     * @return Ichimoku moving average over the current lookback period
     */
    value(): number {
        const high = Math.max(...this.highs._elements.filter(e => e !== null))
        const low = Math.min(...this.lows._elements.filter(e => e !== null))
        return (high + low)/2
    }

    /**
     * Push a value into the current lookback period.
     *
     * @param high - Value (e.g. candle close) to push into the
     * current lookback period of highs
     * @param low - Value to push into the current lookback period
     * of lows
     */
    push(high: number, low: number) {
        this.highs.enq(high)
        this.lows.enq(low)
    }
}

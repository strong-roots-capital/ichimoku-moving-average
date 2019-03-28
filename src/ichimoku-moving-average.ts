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
export default class IchimokuMovingAverage extends RingBuffer<number> {

    /**
     * Construct an Ichimoku moving average with specified lookback.
     *
     * @param lookback - Lookback length of this Ichimoku moving average
     */
    constructor(lookback: number) {
        super(lookback)
    }

    /**
     * Calculate the Ichimoku moving average over the current lookback
     * period.
     *
     * @return Ichimoku moving average over the current lookback period
     */
    value(): number {
        const elements = this._elements.filter(e => e !== null)
        const high = Math.max(...elements)
        const low = Math.min(...elements)
        return (high + low)/2
    }

    /**
     * Push a value into the current lookback period.
     *
     * @param close - Value (e.g. candle close) to push into the
     * current lookback period
     */
    push(close: number) {
        this.enq(close)
    }
}

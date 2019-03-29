[ichimoku-moving-average](../README.md) > [IchimokuMovingAverage](../classes/ichimokumovingaverage.md)

# Class: IchimokuMovingAverage

Calculates the Ichimoku Moving Average over a given lookback period, defined as the average of the highest value and the lowest value.

## Hierarchy

 `RingBuffer`<`number`>

**↳ IchimokuMovingAverage**

## Index

### Constructors

* [constructor](ichimokumovingaverage.md#constructor)

### Properties

* [_elements](ichimokumovingaverage.md#_elements)
* [_evictedCb](ichimokumovingaverage.md#_evictedcb)
* [_first](ichimokumovingaverage.md#_first)
* [_last](ichimokumovingaverage.md#_last)
* [_size](ichimokumovingaverage.md#_size)

### Methods

* [capacity](ichimokumovingaverage.md#capacity)
* [deq](ichimokumovingaverage.md#deq)
* [deqN](ichimokumovingaverage.md#deqn)
* [enq](ichimokumovingaverage.md#enq)
* [isEmpty](ichimokumovingaverage.md#isempty)
* [isFull](ichimokumovingaverage.md#isfull)
* [peek](ichimokumovingaverage.md#peek)
* [peekN](ichimokumovingaverage.md#peekn)
* [push](ichimokumovingaverage.md#push)
* [size](ichimokumovingaverage.md#size)
* [value](ichimokumovingaverage.md#value)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new IchimokuMovingAverage**(lookback: *`number`*): [IchimokuMovingAverage](ichimokumovingaverage.md)

*Overrides RingBuffer.__constructor*

*Defined in [ichimoku-moving-average.ts:14](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/ichimoku-moving-average.ts#L14)*

Construct an Ichimoku moving average with specified lookback.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| lookback | `number` |  Lookback length of this Ichimoku moving average |

**Returns:** [IchimokuMovingAverage](ichimokumovingaverage.md)

___

## Properties

<a id="_elements"></a>

###  _elements

**● _elements**: *`number`[]*

*Inherited from RingBuffer._elements*

*Defined in [@types/ringbufferjs/index.d.ts:14](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L14)*

___
<a id="_evictedcb"></a>

###  _evictedCb

**● _evictedCb**: *`Function`*

*Inherited from RingBuffer._evictedCb*

*Defined in [@types/ringbufferjs/index.d.ts:18](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L18)*

___
<a id="_first"></a>

###  _first

**● _first**: *`number`*

*Inherited from RingBuffer._first*

*Defined in [@types/ringbufferjs/index.d.ts:15](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L15)*

___
<a id="_last"></a>

###  _last

**● _last**: *`number`*

*Inherited from RingBuffer._last*

*Defined in [@types/ringbufferjs/index.d.ts:16](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L16)*

___
<a id="_size"></a>

###  _size

**● _size**: *`number`*

*Inherited from RingBuffer._size*

*Defined in [@types/ringbufferjs/index.d.ts:17](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L17)*

___

## Methods

<a id="capacity"></a>

###  capacity

▸ **capacity**(): `number`

*Inherited from RingBuffer.capacity*

*Defined in [@types/ringbufferjs/index.d.ts:22](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L22)*

**Returns:** `number`

___
<a id="deq"></a>

###  deq

▸ **deq**(): `number`

*Inherited from RingBuffer.deq*

*Defined in [@types/ringbufferjs/index.d.ts:27](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L27)*

**Returns:** `number`

___
<a id="deqn"></a>

###  deqN

▸ **deqN**(count: *`number`*): `number`[]

*Inherited from RingBuffer.deqN*

*Defined in [@types/ringbufferjs/index.d.ts:28](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `number`[]

___
<a id="enq"></a>

###  enq

▸ **enq**(element: *`number`*): `number`

*Inherited from RingBuffer.enq*

*Defined in [@types/ringbufferjs/index.d.ts:29](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| element | `number` |

**Returns:** `number`

___
<a id="isempty"></a>

###  isEmpty

▸ **isEmpty**(): `boolean`

*Inherited from RingBuffer.isEmpty*

*Defined in [@types/ringbufferjs/index.d.ts:23](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L23)*

**Returns:** `boolean`

___
<a id="isfull"></a>

###  isFull

▸ **isFull**(): `boolean`

*Inherited from RingBuffer.isFull*

*Defined in [@types/ringbufferjs/index.d.ts:24](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L24)*

**Returns:** `boolean`

___
<a id="peek"></a>

###  peek

▸ **peek**(): `number`

*Inherited from RingBuffer.peek*

*Defined in [@types/ringbufferjs/index.d.ts:25](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L25)*

**Returns:** `number`

___
<a id="peekn"></a>

###  peekN

▸ **peekN**(count: *`number`*): `number`[]

*Inherited from RingBuffer.peekN*

*Defined in [@types/ringbufferjs/index.d.ts:26](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| count | `number` |

**Returns:** `number`[]

___
<a id="push"></a>

###  push

▸ **push**(close: *`number`*): `void`

*Defined in [ichimoku-moving-average.ts:44](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/ichimoku-moving-average.ts#L44)*

Push a value into the current lookback period.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| close | `number` |  Value (e.g. candle close) to push into the current lookback period |

**Returns:** `void`

___
<a id="size"></a>

###  size

▸ **size**(): `number`

*Inherited from RingBuffer.size*

*Defined in [@types/ringbufferjs/index.d.ts:30](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/@types/ringbufferjs/index.d.ts#L30)*

**Returns:** `number`

___
<a id="value"></a>

###  value

▸ **value**(): `number`

*Defined in [ichimoku-moving-average.ts:31](https://github.com/strong-roots-capital/ichimoku-moving-average/blob/b06c172/src/ichimoku-moving-average.ts#L31)*

Calculate the Ichimoku moving average over the current lookback period.

**Returns:** `number`
Ichimoku moving average over the current lookback period

___



ichimoku-moving-average [![Build status](https://travis-ci.org/strong-roots-capital/ichimoku-moving-average.svg?branch=master)](https://travis-ci.org/strong-roots-capital/ichimoku-moving-average) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/ichimoku-moving-average.svg)](https://npmjs.org/package/@strong-roots-capital/ichimoku-moving-average) [![codecov](https://codecov.io/gh/strong-roots-capital/ichimoku-moving-average/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/ichimoku-moving-average)
================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Average of high and low over a lookback period

Install
-------

```shell
npm install @strong-roots-capital/ichimoku-moving-average
```

Use
---

```typescript
import IchimokuMovingAverage from '@strong-roots-capital/ichimoku-moving-average'

const tenkan = new IchimokuMovingAverage(9)
const kijun = new IchimokuMovingAverage(26)

for (const value of getValues()) {
    tenkan.push(value)
    kijun.push(value)
    console.log(tenkan.value() > kijun.value() ? 'uptrend' : 'downtrend')
}
```

## Index

### Classes

* [IchimokuMovingAverage](classes/ichimokumovingaverage.md)

---


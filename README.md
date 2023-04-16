# Global LEI foundation API

This modules is wrapper for the [GLEIF API](https://www.gleif.org/en/lei-data/gleif-api) provided by the [GLEIF - Global Legal Entity Identifier Foundation](https://www.gleif.org/).

This first version gives access to the **ISIN** filter to retrieve the matching **LEI record**.

## Installation

```
npm install --save git+https://github.com/alphaboard-io/gleif.git
```

## Usage

```
import gleif from 'gleif';

// Simple filter on Apple.
const res = gleif.isin('US0378331005');
if (res.ok) {
    console.log(res.record);
} else { console.log(res.error); }
```

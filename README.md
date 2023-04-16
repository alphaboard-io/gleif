# Global LEI foundation API

This modules is wrapper for the [GLEIF API](https://www.gleif.org/en/lei-data/gleif-api) provided by the [GLEIF - Global Legal Entity Identifier Foundation](https://www.gleif.org/).

This first version gives access to the **ISIN** filter to retrieve the matching **LEI record**.

## Installation

```
npm install --save git+https://github.com/alphaboard-io/gleif.git
```

## Usage

To use the API inside your code.

```
import gleif from 'gleif';

// Simple filter on Apple.
const record = gleif.isin('US0378331005');
console.log(record);
```

To try the API from the command line (requires Node.js v14).

```
node -e "import('./build/index.js').then(x => x.isin('US0378331005')).then(rec => console.log(rec));"
```

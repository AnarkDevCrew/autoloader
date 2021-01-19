# autoloader

#### add this on your package.json dependencies

```json
    "path": "^0.12.7"
```

#### then import autoloader.js and use it as below:

```javascript
const express = require('express')
const app = express()

const AutoLoader = require("./autoloader");
AutoLoader.loadAll(app,'path','to','your','modules')
```
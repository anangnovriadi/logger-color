# logger-color

Logger color is module log for print in terminal which is presented with an interactive display.

## Installation
```
npm install nangning-logger-color
```

## Usage
```javascript
const log = require("nangning-logger-color");

// Sample Log Info
log.info({ 
    ip: ctx.request.ip(),
    endpoint: ctx.request.url(),
    params: ctx.request.body,
    method: ctx._request_.request.method,
    responseTime: diff + ' second',
    results: ctx.response.lazyBody.content
});

// Sample Log Error
log.error({ 
    ip: ctx.request.ip(),
    endpoint: ctx.request.url(),
    params: ctx.request.body,
    method: ctx._request_.request.method,
    responseTime: diff + ' second',
    results: err
});
```

For the full reference check the [Winston GitHub repository](https://github.com/winstonjs/winston).


# https://api.estuary.tech/pinning compliance:

## Summary (3/9 successful)

  ✓ Request with no authentication token
  ✓ Request with invalid token
  ✘ Pins post of CID 'baeaaadbyg4wdembsgezdombyge'
  ✘ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✘ Can create and replace a pin's CID
  ✓ Can create a pin with name='d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c'
  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages
  ✘ Can delete all pins

## Request with no authentication token - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response object matches api spec schema (success)
  ✓ Returns a 403 (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins
```
{ error: { reason: 'ERR_AUTH_MISSING' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Forbidden (403)
##### Headers
```json
{
  "connection": "close",
  "content-length": "40",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:24 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"error":{"reason":"ERR_AUTH_MISSING"}}

```
## Request with invalid token - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response object matches api spec schema (success)
  ✓ Returns a 403 (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins
```
{ error: { reason: 'ERR_INVALID_TOKEN' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Forbidden (403)
##### Headers
```json
{
  "connection": "close",
  "content-length": "41",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:25 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"error":{"reason":"ERR_INVALID_TOKEN"}}

```
## Pins post of CID 'baeaaadbyg4wdembsgezdombyge' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)
  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Joi validation failures

* "origins" must be an array

* "meta" must be an object

* "info" must be an object


### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbyg4wdembsgezdombyge"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545084',
  status: 'queued',
  created: '2022-06-01T21:11:26.563478086Z',
  pin: {
    cid: 'baeaaadbyg4wdembsgezdombyge',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545084',
  status: 'queued',
  created: 2022-06-01T21:11:26.563Z,
  pin: {
    cid: 'baeaaadbyg4wdembsgezdombyge',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:26 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545084","status":"queued","created":"2022-06-01T21:11:26.563478086Z","pin":{"cid":"baeaaadbyg4wdembsgezdombyge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## The newly created pin can be immediately deleted - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202: The Pin was deleted successfully (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545089

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545089
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can create and then delete a new pin - ✘ FAILED

### Expectations (2/4 successful)

  ✓ Result is not null (success)
  ✘ Response code is 200 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202: The Pin was deleted successfully (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteNewPin.ts:23:14)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbyhawdcojrgazdkmjrga"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545089',
  status: 'queued',
  created: '2022-06-01T21:11:27.577299723Z',
  pin: {
    cid: 'baeaaadbyhawdcojrgazdkmjrga',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545089',
  status: 'queued',
  created: 2022-06-01T21:11:27.577Z,
  pin: {
    cid: 'baeaaadbyhawdcojrgazdkmjrga',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:27 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545089","status":"queued","created":"2022-06-01T21:11:27.577299723Z","pin":{"cid":"baeaaadbyhawdcojrgazdkmjrga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## List pin objects (GET /pins) in all states - ✘ FAILED

### Expectations (2/3 successful)

  ✘ Response object matches api spec schema (failure)
  ✓ Response is ok (success)
  ✓ Response code is 200 (success)




#### Joi validation failures

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object

* "name" is not allowed to be empty

* "origins" must be an array

* "meta" must be an object

* "info" must be an object


### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 14,
  results: [
    {
      requestid: '30545084',
      status: 'queued',
      created: '2022-06-01T21:11:26.563478086Z',
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545074',
      status: 'queued',
      created: '2022-06-01T21:11:22.155319383Z',
      pin: {
        cid: 'baeaaadjrga4synjsg4zdcnjzg44q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545073',
      status: 'queued',
      created: '2022-06-01T21:11:21.152915842Z',
      pin: {
        cid: 'baeaaadjrga4synjsgy3tmojwg4za',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545072',
      status: 'queued',
      created: '2022-06-01T21:11:20.152436265Z',
      pin: {
        cid: 'baeaaadjrga4synjsgyztenrwgy3a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545069',
      status: 'queued',
      created: '2022-06-01T21:11:19.172833394Z',
      pin: {
        cid: 'baeaaadjrga4synjsgu4dkmrqgu4q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545067',
      status: 'queued',
      created: '2022-06-01T21:11:18.163923Z',
      pin: {
        cid: 'baeaaadjrga4synjsguzdkojsguya',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545065',
      status: 'queued',
      created: '2022-06-01T21:11:17.152393696Z',
      pin: {
        cid: 'baeaaadjrga4synjsgq3doobsgqza',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545063',
      status: 'queued',
      created: '2022-06-01T21:11:16.165794327Z',
      pin: {
        cid: 'baeaaadjrga4synjsgqzdaobqgm2q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545058',
      status: 'queued',
      created: '2022-06-01T21:11:15.163407893Z',
      pin: {
        cid: 'baeaaadjrga4synjsgm3dqnbygi3q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545054',
      status: 'queued',
      created: '2022-06-01T21:11:14.152917936Z',
      pin: {
        cid: 'baeaaadjrga4synjsgi4denjvge2q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545043',
      status: 'queued',
      created: '2022-06-01T21:11:08.902070334Z',
      pin: {
        cid: 'baeaaadbrga2symryguytimrtgy',
        name: 'c28e11c8-3b81-4da8-8024-1d618da71486',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545039',
      status: 'queued',
      created: '2022-06-01T21:11:06.69115274Z',
      pin: {
        cid: 'baeaaadjrgazcymrqgq2tgnjvgazq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545036',
      status: 'queued',
      created: '2022-06-01T21:11:05.843584231Z',
      pin: {
        cid: 'baeaaadjrgaysymrtha2dmnzxgu4a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545003',
      status: 'queued',
      created: '2022-06-01T21:11:02.410307726Z',
      pin: {
        cid: 'baeaaadbzg4wdonztgqztknbtha',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 14,
  results: Set(14) {
    {
      requestid: '30545084',
      status: 'queued',
      created: 2022-06-01T21:11:26.563Z,
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545074',
      status: 'queued',
      created: 2022-06-01T21:11:22.155Z,
      pin: {
        cid: 'baeaaadjrga4synjsg4zdcnjzg44q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545073',
      status: 'queued',
      created: 2022-06-01T21:11:21.152Z,
      pin: {
        cid: 'baeaaadjrga4synjsgy3tmojwg4za',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545072',
      status: 'queued',
      created: 2022-06-01T21:11:20.152Z,
      pin: {
        cid: 'baeaaadjrga4synjsgyztenrwgy3a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545069',
      status: 'queued',
      created: 2022-06-01T21:11:19.172Z,
      pin: {
        cid: 'baeaaadjrga4synjsgu4dkmrqgu4q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545067',
      status: 'queued',
      created: 2022-06-01T21:11:18.163Z,
      pin: {
        cid: 'baeaaadjrga4synjsguzdkojsguya',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545065',
      status: 'queued',
      created: 2022-06-01T21:11:17.152Z,
      pin: {
        cid: 'baeaaadjrga4synjsgq3doobsgqza',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545063',
      status: 'queued',
      created: 2022-06-01T21:11:16.165Z,
      pin: {
        cid: 'baeaaadjrga4synjsgqzdaobqgm2q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545058',
      status: 'queued',
      created: 2022-06-01T21:11:15.163Z,
      pin: {
        cid: 'baeaaadjrga4synjsgm3dqnbygi3q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545054',
      status: 'queued',
      created: 2022-06-01T21:11:14.152Z,
      pin: {
        cid: 'baeaaadjrga4synjsgi4denjvge2q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545043',
      status: 'queued',
      created: 2022-06-01T21:11:08.902Z,
      pin: {
        cid: 'baeaaadbrga2symryguytimrtgy',
        name: 'c28e11c8-3b81-4da8-8024-1d618da71486',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545039',
      status: 'queued',
      created: 2022-06-01T21:11:06.691Z,
      pin: {
        cid: 'baeaaadjrgazcymrqgq2tgnjvgazq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545036',
      status: 'queued',
      created: 2022-06-01T21:11:05.843Z,
      pin: {
        cid: 'baeaaadjrgaysymrtha2dmnzxgu4a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545003',
      status: 'queued',
      created: 2022-06-01T21:11:02.410Z,
      pin: {
        cid: 'baeaaadbzg4wdonztgqztknbtha',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:28 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":14,"results":[{"requestid":"30545084","status":"queued","created":"2022-06-01T21:11:26.563478086Z","pin":{"cid":"baeaaadbyg4wdembsgezdombyge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545074","status":"queued","created":"2022-06-01T21:11:22.155319383Z","pin":{"cid":"baeaaadjrga4synjsg4zdcnjzg44q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545073","status":"queued","created":"2022-06-01T21:11:21.152915842Z","pin":{"cid":"baeaaadjrga4synjsgy3tmojwg4za","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545072","status":"queued","created":"2022-06-01T21:11:20.152436265Z","pin":{"cid":"baeaaadjrga4synjsgyztenrwgy3a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545069","status":"queued","created":"2022-06-01T21:11:19.172833394Z","pin":{"cid":"baeaaadjrga4synjsgu4dkmrqgu4q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545067","status":"queued","created":"2022-06-01T21:11:18.163923Z","pin":{"cid":"baeaaadjrga4synjsguzdkojsguya","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545065","status":"queued","created":"2022-06-01T21:11:17.152393696Z","pin":{"cid":"baeaaadjrga4synjsgq3doobsgqza","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545063","status":"queued","created":"2022-06-01T21:11:16.165794327Z","pin":{"cid":"baeaaadjrga4synjsgqzdaobqgm2q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545058","status":"queued","created":"2022-06-01T21:11:15.163407893Z","pin":{"cid":"baeaaadjrga4synjsgm3dqnbygi3q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545054","status":"queued","created":"2022-06-01T21:11:14.152917936Z","pin":{"cid":"baeaaadjrga4synjsgi4denjvge2q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545043","status":"queued","created":"2022-06-01T21:11:08.902070334Z","pin":{"cid":"baeaaadbrga2symryguytimrtgy","name":"c28e11c8-3b81-4da8-8024-1d618da71486","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545039","status":"queued","created":"2022-06-01T21:11:06.69115274Z","pin":{"cid":"baeaaadjrgazcymrqgq2tgnjvgazq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545036","status":"queued","created":"2022-06-01T21:11:05.843584231Z","pin":{"cid":"baeaaadjrgaysymrtha2dmnzxgu4a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545003","status":"queued","created":"2022-06-01T21:11:02.410307726Z","pin":{"cid":"baeaaadbzg4wdonztgqztknbtha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Get original pin via requestid - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30545105

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545105
```
{
  requestid: '30545105',
  status: 'queued',
  created: '2022-06-01T21:11:29.549476891Z',
  pin: {
    cid: 'baeaaadbzgawdcmjygu4tenjthe',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545105',
  status: 'queued',
  created: 2022-06-01T21:11:29.549Z,
  pin: {
    cid: 'baeaaadbzgawdcmjygu4tenjthe',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:31 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545105","status":"queued","created":"2022-06-01T21:11:29.549476891Z","pin":{"cid":"baeaaadbzgawdcmjygu4tenjthe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30545107

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545107
```
{
  requestid: '30545107',
  status: 'queued',
  created: '2022-06-01T21:11:30.562049672Z',
  pin: {
    cid: 'baeaaadbzgewdcnryge3dmnjsga',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545107',
  status: 'queued',
  created: 2022-06-01T21:11:30.562Z,
  pin: {
    cid: 'baeaaadbzgewdcnryge3dmnjsga',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:32 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545107","status":"queued","created":"2022-06-01T21:11:30.562049672Z","pin":{"cid":"baeaaadbzgewdcnryge3dmnjsga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Pin's with requestid '30545105' can have cid 'baeaaadbzgawdcmjygu4tenjthe' replaced with 'baeaaadbzgewdcnryge3dmnjsga' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)
  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins/30545105

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzgewdcnryge3dmnjsga"}
```
#### Response data from https://api.estuary.tech/pinning/pins/30545105
```
{
  requestid: '30545107',
  status: 'queued',
  created: '2022-06-01T21:11:30.562049672Z',
  pin: {
    cid: 'baeaaadbzgewdcnryge3dmnjsga',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545107',
  status: 'queued',
  created: 2022-06-01T21:11:30.562Z,
  pin: {
    cid: 'baeaaadbzgewdcnryge3dmnjsga',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:30 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545107","status":"queued","created":"2022-06-01T21:11:30.562049672Z","pin":{"cid":"baeaaadbzgewdcnryge3dmnjsga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create and replace a pin's CID - ✘ FAILED

### Expectations (6/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (30545105) (success)
  ✓ Response is ok (success)
  ✓ Replaced pin has the new & expected CID (success)
  ✓ Replaced pin has a different requestid (success)
  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)
  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzgawdcmjygu4tenjthe"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545105',
  status: 'queued',
  created: '2022-06-01T21:11:29.549476891Z',
  pin: {
    cid: 'baeaaadbzgawdcmjygu4tenjthe',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545105',
  status: 'queued',
  created: 2022-06-01T21:11:29.549Z,
  pin: {
    cid: 'baeaaadbzgawdcmjygu4tenjthe',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:29 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545105","status":"queued","created":"2022-06-01T21:11:29.549476891Z","pin":{"cid":"baeaaadbzgawdcmjygu4tenjthe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can retrieve pin with name 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c&match=exact
```
{
  count: 1,
  results: [
    {
      requestid: '30545119',
      status: 'queued',
      created: '2022-06-01T21:11:32.526146494Z',
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 1,
  results: Set(1) {
    {
      requestid: '30545119',
      status: 'queued',
      created: 2022-06-01T21:11:32.526Z,
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "340",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:33 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"30545119","status":"queued","created":"2022-06-01T21:11:32.526146494Z","pin":{"cid":"baeaaadbzgqwdcmrrge4dsnjuha","name":"d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Can retrieve pin with name 'D3AC6E02-9B00-41E5-9ADA-D9140F5E6E4C' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=D3AC6E02-9B00-41E5-9ADA-D9140F5E6E4C&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=D3AC6E02-9B00-41E5-9ADA-D9140F5E6E4C&match=iexact
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:34 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can retrieve pin with name '9b00-41e5-9ada-d91' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=9b00-41e5-9ada-d91&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=9b00-41e5-9ada-d91&match=partial
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can retrieve pin with name '9B00-41E5-9ADA-D91' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=9B00-41E5-9ADA-D91&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=9B00-41E5-9ADA-D91&match=ipartial
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can create a pin with name='d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c' - ✓ SUCCESS

### Expectations (11/11 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Name matches name provided during creation (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzgqwdcmrrge4dsnjuha","name":"d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545119',
  status: 'queued',
  created: '2022-06-01T21:11:32.526146494Z',
  pin: {
    cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
    name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545119',
  status: 'queued',
  created: 2022-06-01T21:11:32.526Z,
  pin: {
    cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
    name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "316",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:32 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545119","status":"queued","created":"2022-06-01T21:11:32.526146494Z","pin":{"cid":"baeaaadbzgqwdcmrrge4dsnjuha","name":"d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbzhawdcnrwgeytaojyg4' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdcnrwgeytaojyg4"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545175',
  status: 'queued',
  created: '2022-06-01T21:11:37.549550777Z',
  pin: {
    cid: 'baeaaadbzhawdcnrwgeytaojyg4',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545175',
  status: 'queued',
  created: 2022-06-01T21:11:37.549Z,
  pin: {
    cid: 'baeaaadbzhawdcnrwgeytaojyg4',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:37 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545175","status":"queued","created":"2022-06-01T21:11:37.549550777Z","pin":{"cid":"baeaaadbzhawdcnrwgeytaojyg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbzhawdcnrxge3denjtgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdcnrxge3denjtgq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545176',
  status: 'queued',
  created: '2022-06-01T21:11:38.564473583Z',
  pin: {
    cid: 'baeaaadbzhawdcnrxge3denjtgq',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545176',
  status: 'queued',
  created: 2022-06-01T21:11:38.564Z,
  pin: {
    cid: 'baeaaadbzhawdcnrxge3denjtgq',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:38 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545176","status":"queued","created":"2022-06-01T21:11:38.564473583Z","pin":{"cid":"baeaaadbzhawdcnrxge3denjtgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbzhawdcnrxheztknjwhe' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdcnrxheztknjwhe"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545177',
  status: 'queued',
  created: '2022-06-01T21:11:39.551493643Z',
  pin: {
    cid: 'baeaaadbzhawdcnrxheztknjwhe',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545177',
  status: 'queued',
  created: 2022-06-01T21:11:39.551Z,
  pin: {
    cid: 'baeaaadbzhawdcnrxheztknjwhe',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545177","status":"queued","created":"2022-06-01T21:11:39.551493643Z","pin":{"cid":"baeaaadbzhawdcnrxheztknjwhe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbzhawdcnrygy2tcmzqgi' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdcnrygy2tcmzqgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545178',
  status: 'queued',
  created: '2022-06-01T21:11:40.550059783Z',
  pin: {
    cid: 'baeaaadbzhawdcnrygy2tcmzqgi',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545178',
  status: 'queued',
  created: 2022-06-01T21:11:40.550Z,
  pin: {
    cid: 'baeaaadbzhawdcnrygy2tcmzqgi',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545178","status":"queued","created":"2022-06-01T21:11:40.550059783Z","pin":{"cid":"baeaaadbzhawdcnrygy2tcmzqgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbzhawdcnrzguydimbuga' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdcnrzguydimbuga"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545180',
  status: 'queued',
  created: '2022-06-01T21:11:41.551717205Z',
  pin: {
    cid: 'baeaaadbzhawdcnrzguydimbuga',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545180',
  status: 'queued',
  created: 2022-06-01T21:11:41.551Z,
  pin: {
    cid: 'baeaaadbzhawdcnrzguydimbuga',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545180","status":"queued","created":"2022-06-01T21:11:41.551717205Z","pin":{"cid":"baeaaadbzhawdcnrzguydimbuga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbzhawdcnzqguydenzygu' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbzhawdcnzqguydenzygu"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30545184',
  status: 'queued',
  created: '2022-06-01T21:11:42.554184128Z',
  pin: {
    cid: 'baeaaadbzhawdcnzqguydenzygu',
    name: '',
    origins: null,
    meta: null
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: null
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: '30545184',
  status: 'queued',
  created: 2022-06-01T21:11:42.554Z,
  pin: {
    cid: 'baeaaadbzhawdcnzqguydenzygu',
    name: '',
    origins: undefined,
    meta: undefined
  },
  delegates: [
    '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
  ],
  info: undefined
}
```
#### Response - Accepted (202)
##### Headers
```json
{
  "connection": "close",
  "content-length": "280",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30545184","status":"queued","created":"2022-06-01T21:11:42.554184128Z","pin":{"cid":"baeaaadbzhawdcnzqguydenzygu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Pagination: First page of pins - ✘ FAILED

### Expectations (3/5 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✘ Count is greater than or equal to 15 (failure)
  ✘ Count is greater than the number of pins returned (failure)
  ✓ Number of pins returned defaults to 10 (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: '30545184',
      status: 'queued',
      created: '2022-06-01T21:11:42.554184128Z',
      pin: {
        cid: 'baeaaadbzhawdcnzqguydenzygu',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545180',
      status: 'queued',
      created: '2022-06-01T21:11:41.551717205Z',
      pin: {
        cid: 'baeaaadbzhawdcnrzguydimbuga',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545178',
      status: 'queued',
      created: '2022-06-01T21:11:40.550059783Z',
      pin: {
        cid: 'baeaaadbzhawdcnrygy2tcmzqgi',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545177',
      status: 'queued',
      created: '2022-06-01T21:11:39.551493643Z',
      pin: {
        cid: 'baeaaadbzhawdcnrxheztknjwhe',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545176',
      status: 'queued',
      created: '2022-06-01T21:11:38.564473583Z',
      pin: {
        cid: 'baeaaadbzhawdcnrxge3denjtgq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545175',
      status: 'queued',
      created: '2022-06-01T21:11:37.549550777Z',
      pin: {
        cid: 'baeaaadbzhawdcnrwgeytaojyg4',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545119',
      status: 'queued',
      created: '2022-06-01T21:11:32.526146494Z',
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545107',
      status: 'queued',
      created: '2022-06-01T21:11:30.562049672Z',
      pin: {
        cid: 'baeaaadbzgewdcnryge3dmnjsga',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545105',
      status: 'queued',
      created: '2022-06-01T21:11:29.549476891Z',
      pin: {
        cid: 'baeaaadbzgawdcmjygu4tenjthe',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545084',
      status: 'queued',
      created: '2022-06-01T21:11:26.563478086Z',
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: '30545184',
      status: 'queued',
      created: 2022-06-01T21:11:42.554Z,
      pin: {
        cid: 'baeaaadbzhawdcnzqguydenzygu',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545180',
      status: 'queued',
      created: 2022-06-01T21:11:41.551Z,
      pin: {
        cid: 'baeaaadbzhawdcnrzguydimbuga',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545178',
      status: 'queued',
      created: 2022-06-01T21:11:40.550Z,
      pin: {
        cid: 'baeaaadbzhawdcnrygy2tcmzqgi',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545177',
      status: 'queued',
      created: 2022-06-01T21:11:39.551Z,
      pin: {
        cid: 'baeaaadbzhawdcnrxheztknjwhe',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545176',
      status: 'queued',
      created: 2022-06-01T21:11:38.564Z,
      pin: {
        cid: 'baeaaadbzhawdcnrxge3denjtgq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545175',
      status: 'queued',
      created: 2022-06-01T21:11:37.549Z,
      pin: {
        cid: 'baeaaadbzhawdcnrwgeytaojyg4',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545119',
      status: 'queued',
      created: 2022-06-01T21:11:32.526Z,
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545107',
      status: 'queued',
      created: 2022-06-01T21:11:30.562Z,
      pin: {
        cid: 'baeaaadbzgewdcnryge3dmnjsga',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545105',
      status: 'queued',
      created: 2022-06-01T21:11:29.549Z,
      pin: {
        cid: 'baeaaadbzgawdcmjygu4tenjthe',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545084',
      status: 'queued',
      created: 2022-06-01T21:11:26.563Z,
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"30545184","status":"queued","created":"2022-06-01T21:11:42.554184128Z","pin":{"cid":"baeaaadbzhawdcnzqguydenzygu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545180","status":"queued","created":"2022-06-01T21:11:41.551717205Z","pin":{"cid":"baeaaadbzhawdcnrzguydimbuga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545178","status":"queued","created":"2022-06-01T21:11:40.550059783Z","pin":{"cid":"baeaaadbzhawdcnrygy2tcmzqgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545177","status":"queued","created":"2022-06-01T21:11:39.551493643Z","pin":{"cid":"baeaaadbzhawdcnrxheztknjwhe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545176","status":"queued","created":"2022-06-01T21:11:38.564473583Z","pin":{"cid":"baeaaadbzhawdcnrxge3denjtgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545175","status":"queued","created":"2022-06-01T21:11:37.549550777Z","pin":{"cid":"baeaaadbzhawdcnrwgeytaojyg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545119","status":"queued","created":"2022-06-01T21:11:32.526146494Z","pin":{"cid":"baeaaadbzgqwdcmrrge4dsnjuha","name":"d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545107","status":"queued","created":"2022-06-01T21:11:30.562049672Z","pin":{"cid":"baeaaadbzgewdcnryge3dmnjsga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545105","status":"queued","created":"2022-06-01T21:11:29.549476891Z","pin":{"cid":"baeaaadbzgawdcmjygu4tenjthe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545084","status":"queued","created":"2022-06-01T21:11:26.563478086Z","pin":{"cid":"baeaaadbyg4wdembsgezdombyge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A26.563Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T21%3A11%3A26.563Z
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (20/22 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✘ Count is greater than or equal to 15 (failure)
  ✘ Count is greater than the number of pins returned (failure)
  ✓ Number of pins returned defaults to 10 (success)
  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 9,
  results: [
    {
      requestid: '30545119',
      status: 'queued',
      created: '2022-06-01T21:11:32.526146494Z',
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545107',
      status: 'queued',
      created: '2022-06-01T21:11:30.562049672Z',
      pin: {
        cid: 'baeaaadbzgewdcnryge3dmnjsga',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545105',
      status: 'queued',
      created: '2022-06-01T21:11:29.549476891Z',
      pin: {
        cid: 'baeaaadbzgawdcmjygu4tenjthe',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545084',
      status: 'queued',
      created: '2022-06-01T21:11:26.563478086Z',
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545054',
      status: 'queued',
      created: '2022-06-01T21:11:14.152917936Z',
      pin: {
        cid: 'baeaaadjrga4synjsgi4denjvge2q',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545043',
      status: 'queued',
      created: '2022-06-01T21:11:08.902070334Z',
      pin: {
        cid: 'baeaaadbrga2symryguytimrtgy',
        name: 'c28e11c8-3b81-4da8-8024-1d618da71486',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545039',
      status: 'queued',
      created: '2022-06-01T21:11:06.69115274Z',
      pin: {
        cid: 'baeaaadjrgazcymrqgq2tgnjvgazq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545036',
      status: 'queued',
      created: '2022-06-01T21:11:05.843584231Z',
      pin: {
        cid: 'baeaaadjrgaysymrtha2dmnzxgu4a',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545003',
      status: 'queued',
      created: '2022-06-01T21:11:02.410307726Z',
      pin: {
        cid: 'baeaaadbzg4wdonztgqztknbtha',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 9,
  results: Set(9) {
    {
      requestid: '30545119',
      status: 'queued',
      created: 2022-06-01T21:11:32.526Z,
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545107',
      status: 'queued',
      created: 2022-06-01T21:11:30.562Z,
      pin: {
        cid: 'baeaaadbzgewdcnryge3dmnjsga',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545105',
      status: 'queued',
      created: 2022-06-01T21:11:29.549Z,
      pin: {
        cid: 'baeaaadbzgawdcmjygu4tenjthe',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545084',
      status: 'queued',
      created: 2022-06-01T21:11:26.563Z,
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545054',
      status: 'queued',
      created: 2022-06-01T21:11:14.152Z,
      pin: {
        cid: 'baeaaadjrga4synjsgi4denjvge2q',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545043',
      status: 'queued',
      created: 2022-06-01T21:11:08.902Z,
      pin: {
        cid: 'baeaaadbrga2symryguytimrtgy',
        name: 'c28e11c8-3b81-4da8-8024-1d618da71486',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545039',
      status: 'queued',
      created: 2022-06-01T21:11:06.691Z,
      pin: {
        cid: 'baeaaadjrgazcymrqgq2tgnjvgazq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545036',
      status: 'queued',
      created: 2022-06-01T21:11:05.843Z,
      pin: {
        cid: 'baeaaadjrgaysymrtha2dmnzxgu4a',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545003',
      status: 'queued',
      created: 2022-06-01T21:11:02.410Z,
      pin: {
        cid: 'baeaaadbzg4wdonztgqztknbtha',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":9,"results":[{"requestid":"30545119","status":"queued","created":"2022-06-01T21:11:32.526146494Z","pin":{"cid":"baeaaadbzgqwdcmrrge4dsnjuha","name":"d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545107","status":"queued","created":"2022-06-01T21:11:30.562049672Z","pin":{"cid":"baeaaadbzgewdcnryge3dmnjsga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545105","status":"queued","created":"2022-06-01T21:11:29.549476891Z","pin":{"cid":"baeaaadbzgawdcmjygu4tenjthe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545084","status":"queued","created":"2022-06-01T21:11:26.563478086Z","pin":{"cid":"baeaaadbyg4wdembsgezdombyge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545054","status":"queued","created":"2022-06-01T21:11:14.152917936Z","pin":{"cid":"baeaaadjrga4synjsgi4denjvge2q","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545043","status":"queued","created":"2022-06-01T21:11:08.902070334Z","pin":{"cid":"baeaaadbrga2symryguytimrtgy","name":"c28e11c8-3b81-4da8-8024-1d618da71486","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545039","status":"queued","created":"2022-06-01T21:11:06.69115274Z","pin":{"cid":"baeaaadjrgazcymrqgq2tgnjvgazq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545036","status":"queued","created":"2022-06-01T21:11:05.843584231Z","pin":{"cid":"baeaaadjrgaysymrtha2dmnzxgu4a","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545003","status":"queued","created":"2022-06-01T21:11:02.410307726Z","pin":{"cid":"baeaaadbzg4wdonztgqztknbtha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Can delete pin with requestid '30545184' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545184

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545184
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545180' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545180

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545180
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545178' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545178

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545178
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545177' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545177

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545177
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:48 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545176' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545176

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545176
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545175' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545175

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545175
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545119' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545119

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545119
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:51 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545107' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545107

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545107
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:52 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545105' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545105

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545105
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:53 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30545084' - ✘ FAILED

### Expectations (1/2 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30545084

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30545084
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "0",
  "date": "Wed, 01 Jun 2022 21:11:54 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Call pinsGet after deletions - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Final pinsGet call returns a count of zero (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{ count: 0, results: [] }
```
#### Response data after being parsed by RemotePinningServiceClient
```
{ count: 0, results: Set(0) {} }
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-length": "25",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:55 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can delete all pins - ✘ FAILED

### Expectations (11/21 successful)

  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Response is ok (success)
  ✘ Response code is 202 (failure)
  ✓ Final pinsGet call returns a count of zero (success)


* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)
* SyntaxError - Unexpected end of JSON input
  * SyntaxError: Unexpected end of JSON input
    at JSON.parse (<anonymous>)
    at getTextAndJson (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/utils/fetchSafe/getTextAndJson.ts:14:21)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ApiCall.saveResponse (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:276:38)
    at async Object.post (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/middleware/requestReponseLogger.ts:63:11)
    at async PinsApi.BaseAPI.fetchApi (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:92:28)
    at async PinsApi.request (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/generated/fetch/src/runtime.ts:49:26)
    at async PinsApi.pinsRequestidDeleteRaw (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:300:26)
    at async PinsApi.pinsRequestidDelete (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/@ipfs-shipyard/pinning-service-client/dist/dist.generated/apis/generated/fetch/src/apis/PinsApi.ts:315:9)
    at async fn (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/checks/delete/deleteAllPins.ts:26:31)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: '30545184',
      status: 'queued',
      created: '2022-06-01T21:11:42.554184128Z',
      pin: {
        cid: 'baeaaadbzhawdcnzqguydenzygu',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545180',
      status: 'queued',
      created: '2022-06-01T21:11:41.551717205Z',
      pin: {
        cid: 'baeaaadbzhawdcnrzguydimbuga',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545178',
      status: 'queued',
      created: '2022-06-01T21:11:40.550059783Z',
      pin: {
        cid: 'baeaaadbzhawdcnrygy2tcmzqgi',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545177',
      status: 'queued',
      created: '2022-06-01T21:11:39.551493643Z',
      pin: {
        cid: 'baeaaadbzhawdcnrxheztknjwhe',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545176',
      status: 'queued',
      created: '2022-06-01T21:11:38.564473583Z',
      pin: {
        cid: 'baeaaadbzhawdcnrxge3denjtgq',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545175',
      status: 'queued',
      created: '2022-06-01T21:11:37.549550777Z',
      pin: {
        cid: 'baeaaadbzhawdcnrwgeytaojyg4',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545119',
      status: 'queued',
      created: '2022-06-01T21:11:32.526146494Z',
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545107',
      status: 'queued',
      created: '2022-06-01T21:11:30.562049672Z',
      pin: {
        cid: 'baeaaadbzgewdcnryge3dmnjsga',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545105',
      status: 'queued',
      created: '2022-06-01T21:11:29.549476891Z',
      pin: {
        cid: 'baeaaadbzgawdcmjygu4tenjthe',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30545084',
      status: 'queued',
      created: '2022-06-01T21:11:26.563478086Z',
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  count: 10,
  results: Set(10) {
    {
      requestid: '30545184',
      status: 'queued',
      created: 2022-06-01T21:11:42.554Z,
      pin: {
        cid: 'baeaaadbzhawdcnzqguydenzygu',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545180',
      status: 'queued',
      created: 2022-06-01T21:11:41.551Z,
      pin: {
        cid: 'baeaaadbzhawdcnrzguydimbuga',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545178',
      status: 'queued',
      created: 2022-06-01T21:11:40.550Z,
      pin: {
        cid: 'baeaaadbzhawdcnrygy2tcmzqgi',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545177',
      status: 'queued',
      created: 2022-06-01T21:11:39.551Z,
      pin: {
        cid: 'baeaaadbzhawdcnrxheztknjwhe',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545176',
      status: 'queued',
      created: 2022-06-01T21:11:38.564Z,
      pin: {
        cid: 'baeaaadbzhawdcnrxge3denjtgq',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545175',
      status: 'queued',
      created: 2022-06-01T21:11:37.549Z,
      pin: {
        cid: 'baeaaadbzhawdcnrwgeytaojyg4',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545119',
      status: 'queued',
      created: 2022-06-01T21:11:32.526Z,
      pin: {
        cid: 'baeaaadbzgqwdcmrrge4dsnjuha',
        name: 'd3ac6e02-9b00-41e5-9ada-d9140f5e6e4c',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545107',
      status: 'queued',
      created: 2022-06-01T21:11:30.562Z,
      pin: {
        cid: 'baeaaadbzgewdcnryge3dmnjsga',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545105',
      status: 'queued',
      created: 2022-06-01T21:11:29.549Z,
      pin: {
        cid: 'baeaaadbzgawdcmjygu4tenjthe',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30545084',
      status: 'queued',
      created: 2022-06-01T21:11:26.563Z,
      pin: {
        cid: 'baeaaadbyg4wdembsgezdombyge',
        name: '',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "connection": "close",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 21:11:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"30545184","status":"queued","created":"2022-06-01T21:11:42.554184128Z","pin":{"cid":"baeaaadbzhawdcnzqguydenzygu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545180","status":"queued","created":"2022-06-01T21:11:41.551717205Z","pin":{"cid":"baeaaadbzhawdcnrzguydimbuga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545178","status":"queued","created":"2022-06-01T21:11:40.550059783Z","pin":{"cid":"baeaaadbzhawdcnrygy2tcmzqgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545177","status":"queued","created":"2022-06-01T21:11:39.551493643Z","pin":{"cid":"baeaaadbzhawdcnrxheztknjwhe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545176","status":"queued","created":"2022-06-01T21:11:38.564473583Z","pin":{"cid":"baeaaadbzhawdcnrxge3denjtgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545175","status":"queued","created":"2022-06-01T21:11:37.549550777Z","pin":{"cid":"baeaaadbzhawdcnrwgeytaojyg4","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545119","status":"queued","created":"2022-06-01T21:11:32.526146494Z","pin":{"cid":"baeaaadbzgqwdcmrrge4dsnjuha","name":"d3ac6e02-9b00-41e5-9ada-d9140f5e6e4c","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545107","status":"queued","created":"2022-06-01T21:11:30.562049672Z","pin":{"cid":"baeaaadbzgewdcnryge3dmnjsga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545105","status":"queued","created":"2022-06-01T21:11:29.549476891Z","pin":{"cid":"baeaaadbzgawdcmjygu4tenjthe","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30545084","status":"queued","created":"2022-06-01T21:11:26.563478086Z","pin":{"cid":"baeaaadbyg4wdembsgezdombyge","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```

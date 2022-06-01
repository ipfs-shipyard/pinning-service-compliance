
# https://api.estuary.tech/pinning compliance:

## Summary (3/9 successful)

  ✓ Request with no authentication token
  ✓ Request with invalid token
  ✘ Pins post of CID 'baeaaadbvguwdcnjsgaytanryha'
  ✘ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✘ Can create and replace a pin's CID
  ✓ Can create a pin with name='d3b21a74-7a1f-4792-b77e-99e7181cb2b8'
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
  "date": "Wed, 01 Jun 2022 20:57:34 GMT",
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
  "date": "Wed, 01 Jun 2022 20:57:35 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"error":{"reason":"ERR_INVALID_TOKEN"}}

```
## Pins post of CID 'baeaaadbvguwdcnjsgaytanryha' - ✘ FAILED

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
{"cid":"baeaaadbvguwdcnjsgaytanryha"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543582',
  status: 'queued',
  created: '2022-06-01T20:57:36.221909086Z',
  pin: {
    cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  requestid: '30543582',
  status: 'queued',
  created: 2022-06-01T20:57:36.221Z,
  pin: {
    cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  "date": "Wed, 01 Jun 2022 20:57:36 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543582","status":"queued","created":"2022-06-01T20:57:36.221909086Z","pin":{"cid":"baeaaadbvguwdcnjsgaytanryha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543583

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543583
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
  "date": "Wed, 01 Jun 2022 20:57:38 GMT",
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
{"cid":"baeaaadbvgywdcmrzgyydamrzgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543583',
  status: 'queued',
  created: '2022-06-01T20:57:37.231524668Z',
  pin: {
    cid: 'baeaaadbvgywdcmrzgyydamrzgi',
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
  requestid: '30543583',
  status: 'queued',
  created: 2022-06-01T20:57:37.231Z,
  pin: {
    cid: 'baeaaadbvgywdcmrzgyydamrzgi',
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
  "date": "Wed, 01 Jun 2022 20:57:37 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543583","status":"queued","created":"2022-06-01T20:57:37.231524668Z","pin":{"cid":"baeaaadbvgywdcmrzgyydamrzgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

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
  count: 1,
  results: [
    {
      requestid: '30543582',
      status: 'failed',
      created: '2022-06-01T20:57:36.221909086Z',
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  count: 1,
  results: Set(1) {
    {
      requestid: '30543582',
      status: 'failed',
      created: 2022-06-01T20:57:36.221Z,
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  "content-length": "304",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:38 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"30543582","status":"failed","created":"2022-06-01T20:57:36.221909086Z","pin":{"cid":"baeaaadbvguwdcnjsgaytanryha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Get original pin via requestid - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30543593

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543593
```
{
  requestid: '30543593',
  status: 'failed',
  created: '2022-06-01T20:57:39.474800851Z',
  pin: {
    cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
  requestid: '30543593',
  status: 'failed',
  created: 2022-06-01T20:57:39.474Z,
  pin: {
    cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
  "date": "Wed, 01 Jun 2022 20:57:41 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543593","status":"failed","created":"2022-06-01T20:57:39.474800851Z","pin":{"cid":"baeaaadbvhawdgnjxhaztemrugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins/30543598

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543598
```
{
  requestid: '30543598',
  status: 'failed',
  created: '2022-06-01T20:57:40.50975636Z',
  pin: {
    cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
  requestid: '30543598',
  status: 'failed',
  created: 2022-06-01T20:57:40.509Z,
  pin: {
    cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
  "content-length": "279",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543598","status":"failed","created":"2022-06-01T20:57:40.50975636Z","pin":{"cid":"baeaaadbvhewdgnztgazdinrrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Pin's with requestid '30543593' can have cid 'baeaaadbvhawdgnjxhaztemrugy' replaced with 'baeaaadbvhewdgnztgazdinrrgi' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response code is 404: Original Pin's requestid cannot be found (failure)
  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://api.estuary.tech/pinning/pins/30543593

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbvhewdgnztgazdinrrgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins/30543593
```
{
  requestid: '30543598',
  status: 'queued',
  created: '2022-06-01T20:57:40.50975636Z',
  pin: {
    cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
  requestid: '30543598',
  status: 'queued',
  created: 2022-06-01T20:57:40.509Z,
  pin: {
    cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
  "content-length": "279",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:40 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543598","status":"queued","created":"2022-06-01T20:57:40.50975636Z","pin":{"cid":"baeaaadbvhewdgnztgazdinrrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create and replace a pin's CID - ✘ FAILED

### Expectations (6/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (30543593) (success)
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
{"cid":"baeaaadbvhawdgnjxhaztemrugy"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543593',
  status: 'queued',
  created: '2022-06-01T20:57:39.474800851Z',
  pin: {
    cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
  requestid: '30543593',
  status: 'queued',
  created: 2022-06-01T20:57:39.474Z,
  pin: {
    cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
  "date": "Wed, 01 Jun 2022 20:57:39 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543593","status":"queued","created":"2022-06-01T20:57:39.474800851Z","pin":{"cid":"baeaaadbvhawdgnjxhaztemrugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can retrieve pin with name 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8' via the 'exact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=d3b21a74-7a1f-4792-b77e-99e7181cb2b8&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=d3b21a74-7a1f-4792-b77e-99e7181cb2b8&match=exact
```
{
  count: 1,
  results: [
    {
      requestid: '30543599',
      status: 'failed',
      created: '2022-06-01T20:57:42.76788077Z',
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
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
      requestid: '30543599',
      status: 'failed',
      created: 2022-06-01T20:57:42.767Z,
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
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
  "content-length": "339",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:43 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":1,"results":[{"requestid":"30543599","status":"failed","created":"2022-06-01T20:57:42.76788077Z","pin":{"cid":"baeaaadbwgiwdgojugiytaojxgq","name":"d3b21a74-7a1f-4792-b77e-99e7181cb2b8","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Can retrieve pin with name 'D3B21A74-7A1F-4792-B77E-99E7181CB2B8' via the 'iexact' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=D3B21A74-7A1F-4792-B77E-99E7181CB2B8&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=D3B21A74-7A1F-4792-B77E-99E7181CB2B8&match=iexact
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
  "date": "Wed, 01 Jun 2022 20:57:44 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can retrieve pin with name '7a1f-4792-b77e-99e' via the 'partial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=7a1f-4792-b77e-99e&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=7a1f-4792-b77e-99e&match=partial
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
  "date": "Wed, 01 Jun 2022 20:57:45 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can retrieve pin with name '7A1F-4792-B77E-99E' via the 'ipartial' TextMatchingStrategy - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?name=7A1F-4792-B77E-99E&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?name=7A1F-4792-B77E-99E&match=ipartial
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
  "date": "Wed, 01 Jun 2022 20:57:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can create a pin with name='d3b21a74-7a1f-4792-b77e-99e7181cb2b8' - ✓ SUCCESS

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
{"cid":"baeaaadbwgiwdgojugiytaojxgq","name":"d3b21a74-7a1f-4792-b77e-99e7181cb2b8"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543599',
  status: 'queued',
  created: '2022-06-01T20:57:42.76788077Z',
  pin: {
    cid: 'baeaaadbwgiwdgojugiytaojxgq',
    name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
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
  requestid: '30543599',
  status: 'queued',
  created: 2022-06-01T20:57:42.767Z,
  pin: {
    cid: 'baeaaadbwgiwdgojugiytaojxgq',
    name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
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
  "content-length": "315",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:42 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543599","status":"queued","created":"2022-06-01T20:57:42.76788077Z","pin":{"cid":"baeaaadbwgiwdgojugiytaojxgq","name":"d3b21a74-7a1f-4792-b77e-99e7181cb2b8","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrvha3tomrtga' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrvha3tomrtga"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543605',
  status: 'queued',
  created: '2022-06-01T20:57:47.969999354Z',
  pin: {
    cid: 'baeaaadbwgywdqnrvha3tomrtga',
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
  requestid: '30543605',
  status: 'queued',
  created: 2022-06-01T20:57:47.969Z,
  pin: {
    cid: 'baeaaadbwgywdqnrvha3tomrtga',
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
  "date": "Wed, 01 Jun 2022 20:57:47 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543605","status":"queued","created":"2022-06-01T20:57:47.969999354Z","pin":{"cid":"baeaaadbwgywdqnrvha3tomrtga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrwgu3dqmrtgu' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrwgu3dqmrtgu"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543607',
  status: 'queued',
  created: '2022-06-01T20:57:49.002478883Z',
  pin: {
    cid: 'baeaaadbwgywdqnrwgu3dqmrtgu',
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
  requestid: '30543607',
  status: 'queued',
  created: 2022-06-01T20:57:49.002Z,
  pin: {
    cid: 'baeaaadbwgywdqnrwgu3dqmrtgu',
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
  "date": "Wed, 01 Jun 2022 20:57:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543607","status":"queued","created":"2022-06-01T20:57:49.002478883Z","pin":{"cid":"baeaaadbwgywdqnrwgu3dqmrtgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrxga3tgojtha' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrxga3tgojtha"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543608',
  status: 'queued',
  created: '2022-06-01T20:57:49.972308011Z',
  pin: {
    cid: 'baeaaadbwgywdqnrxga3tgojtha',
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
  requestid: '30543608',
  status: 'queued',
  created: 2022-06-01T20:57:49.972Z,
  pin: {
    cid: 'baeaaadbwgywdqnrxga3tgojtha',
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
  "date": "Wed, 01 Jun 2022 20:57:49 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543608","status":"queued","created":"2022-06-01T20:57:49.972308011Z","pin":{"cid":"baeaaadbwgywdqnrxga3tgojtha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrxgu3dknjugi' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrxgu3dknjugi"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543613',
  status: 'queued',
  created: '2022-06-01T20:57:50.962457805Z',
  pin: {
    cid: 'baeaaadbwgywdqnrxgu3dknjugi',
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
  requestid: '30543613',
  status: 'queued',
  created: 2022-06-01T20:57:50.962Z,
  pin: {
    cid: 'baeaaadbwgywdqnrxgu3dknjugi',
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
  "date": "Wed, 01 Jun 2022 20:57:50 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543613","status":"queued","created":"2022-06-01T20:57:50.962457805Z","pin":{"cid":"baeaaadbwgywdqnrxgu3dknjugi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrygmzdambugy' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrygmzdambugy"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543616',
  status: 'queued',
  created: '2022-06-01T20:57:52.003975937Z',
  pin: {
    cid: 'baeaaadbwgywdqnrygmzdambugy',
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
  requestid: '30543616',
  status: 'queued',
  created: 2022-06-01T20:57:52.003Z,
  pin: {
    cid: 'baeaaadbwgywdqnrygmzdambugy',
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
  "date": "Wed, 01 Jun 2022 20:57:52 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543616","status":"queued","created":"2022-06-01T20:57:52.003975937Z","pin":{"cid":"baeaaadbwgywdqnrygmzdambugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrzga4tiojvgi' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrzga4tiojvgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543617',
  status: 'queued',
  created: '2022-06-01T20:57:52.987499361Z',
  pin: {
    cid: 'baeaaadbwgywdqnrzga4tiojvgi',
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
  requestid: '30543617',
  status: 'queued',
  created: 2022-06-01T20:57:52.987Z,
  pin: {
    cid: 'baeaaadbwgywdqnrzga4tiojvgi',
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
  "date": "Wed, 01 Jun 2022 20:57:52 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543617","status":"queued","created":"2022-06-01T20:57:52.987499361Z","pin":{"cid":"baeaaadbwgywdqnrzga4tiojvgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnrzguztcmrvgq' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnrzguztcmrvgq"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543618',
  status: 'queued',
  created: '2022-06-01T20:57:53.986180426Z',
  pin: {
    cid: 'baeaaadbwgywdqnrzguztcmrvgq',
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
  requestid: '30543618',
  status: 'queued',
  created: 2022-06-01T20:57:53.986Z,
  pin: {
    cid: 'baeaaadbwgywdqnrzguztcmrvgq',
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
  "date": "Wed, 01 Jun 2022 20:57:53 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543618","status":"queued","created":"2022-06-01T20:57:53.986180426Z","pin":{"cid":"baeaaadbwgywdqnrzguztcmrvgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnzqga2tgobvha' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnzqga2tgobvha"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543619',
  status: 'queued',
  created: '2022-06-01T20:57:54.985723687Z',
  pin: {
    cid: 'baeaaadbwgywdqnzqga2tgobvha',
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
  requestid: '30543619',
  status: 'queued',
  created: 2022-06-01T20:57:54.985Z,
  pin: {
    cid: 'baeaaadbwgywdqnzqga2tgobvha',
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
  "date": "Wed, 01 Jun 2022 20:57:54 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543619","status":"queued","created":"2022-06-01T20:57:54.985723687Z","pin":{"cid":"baeaaadbwgywdqnzqga2tgobvha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnzqgy3tgnbwgi' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnzqgy3tgnbwgi"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543620',
  status: 'queued',
  created: '2022-06-01T20:57:55.975386471Z',
  pin: {
    cid: 'baeaaadbwgywdqnzqgy3tgnbwgi',
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
  requestid: '30543620',
  status: 'queued',
  created: 2022-06-01T20:57:55.975Z,
  pin: {
    cid: 'baeaaadbwgywdqnzqgy3tgnbwgi',
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
  "date": "Wed, 01 Jun 2022 20:57:55 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543620","status":"queued","created":"2022-06-01T20:57:55.975386471Z","pin":{"cid":"baeaaadbwgywdqnzqgy3tgnbwgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnzrge4dkojwgu' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnzrge4dkojwgu"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543621',
  status: 'queued',
  created: '2022-06-01T20:57:56.975033743Z',
  pin: {
    cid: 'baeaaadbwgywdqnzrge4dkojwgu',
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
  requestid: '30543621',
  status: 'queued',
  created: 2022-06-01T20:57:56.975Z,
  pin: {
    cid: 'baeaaadbwgywdqnzrge4dkojwgu',
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
  "date": "Wed, 01 Jun 2022 20:57:56 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543621","status":"queued","created":"2022-06-01T20:57:56.975033743Z","pin":{"cid":"baeaaadbwgywdqnzrge4dkojwgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Can create new pin for testing pagination cid='baeaaadbwgywdqnzrgy2dmobwha' - ✓ SUCCESS

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
{"cid":"baeaaadbwgywdqnzrgy2dmobwha"}
```
#### Response data from https://api.estuary.tech/pinning/pins
```
{
  requestid: '30543622',
  status: 'queued',
  created: '2022-06-01T20:57:57.976215673Z',
  pin: {
    cid: 'baeaaadbwgywdqnzrgy2dmobwha',
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
  requestid: '30543622',
  status: 'queued',
  created: 2022-06-01T20:57:57.976Z,
  pin: {
    cid: 'baeaaadbwgywdqnzrgy2dmobwha',
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
  "date": "Wed, 01 Jun 2022 20:57:57 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"requestid":"30543622","status":"queued","created":"2022-06-01T20:57:57.976215673Z","pin":{"cid":"baeaaadbwgywdqnzrgy2dmobwha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}

```
## Pagination: First page of pins - ✘ FAILED

### Expectations (3/5 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Count is greater than or equal to 15 (success)
  ✘ Count is greater than the number of pins returned (failure)
  ✘ Number of pins returned defaults to 10 (failure)




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
  count: 15,
  results: [
    {
      requestid: '30543622',
      status: 'failed',
      created: '2022-06-01T20:57:57.976215673Z',
      pin: {
        cid: 'baeaaadbwgywdqnzrgy2dmobwha',
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
      requestid: '30543621',
      status: 'failed',
      created: '2022-06-01T20:57:56.975033743Z',
      pin: {
        cid: 'baeaaadbwgywdqnzrge4dkojwgu',
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
      requestid: '30543620',
      status: 'failed',
      created: '2022-06-01T20:57:55.975386471Z',
      pin: {
        cid: 'baeaaadbwgywdqnzqgy3tgnbwgi',
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
      requestid: '30543619',
      status: 'failed',
      created: '2022-06-01T20:57:54.985723687Z',
      pin: {
        cid: 'baeaaadbwgywdqnzqga2tgobvha',
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
      requestid: '30543618',
      status: 'failed',
      created: '2022-06-01T20:57:53.986180426Z',
      pin: {
        cid: 'baeaaadbwgywdqnrzguztcmrvgq',
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
      requestid: '30543617',
      status: 'failed',
      created: '2022-06-01T20:57:52.987499361Z',
      pin: {
        cid: 'baeaaadbwgywdqnrzga4tiojvgi',
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
      requestid: '30543616',
      status: 'failed',
      created: '2022-06-01T20:57:52.003975937Z',
      pin: {
        cid: 'baeaaadbwgywdqnrygmzdambugy',
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
      requestid: '30543613',
      status: 'failed',
      created: '2022-06-01T20:57:50.962457805Z',
      pin: {
        cid: 'baeaaadbwgywdqnrxgu3dknjugi',
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
      requestid: '30543608',
      status: 'failed',
      created: '2022-06-01T20:57:49.972308011Z',
      pin: {
        cid: 'baeaaadbwgywdqnrxga3tgojtha',
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
      requestid: '30543607',
      status: 'failed',
      created: '2022-06-01T20:57:49.002478883Z',
      pin: {
        cid: 'baeaaadbwgywdqnrwgu3dqmrtgu',
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
      requestid: '30543605',
      status: 'failed',
      created: '2022-06-01T20:57:47.969999354Z',
      pin: {
        cid: 'baeaaadbwgywdqnrvha3tomrtga',
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
      requestid: '30543599',
      status: 'failed',
      created: '2022-06-01T20:57:42.76788077Z',
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30543598',
      status: 'failed',
      created: '2022-06-01T20:57:40.50975636Z',
      pin: {
        cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
      requestid: '30543593',
      status: 'failed',
      created: '2022-06-01T20:57:39.474800851Z',
      pin: {
        cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
      requestid: '30543582',
      status: 'failed',
      created: '2022-06-01T20:57:36.221909086Z',
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  count: 15,
  results: Set(15) {
    {
      requestid: '30543622',
      status: 'failed',
      created: 2022-06-01T20:57:57.976Z,
      pin: {
        cid: 'baeaaadbwgywdqnzrgy2dmobwha',
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
      requestid: '30543621',
      status: 'failed',
      created: 2022-06-01T20:57:56.975Z,
      pin: {
        cid: 'baeaaadbwgywdqnzrge4dkojwgu',
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
      requestid: '30543620',
      status: 'failed',
      created: 2022-06-01T20:57:55.975Z,
      pin: {
        cid: 'baeaaadbwgywdqnzqgy3tgnbwgi',
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
      requestid: '30543619',
      status: 'failed',
      created: 2022-06-01T20:57:54.985Z,
      pin: {
        cid: 'baeaaadbwgywdqnzqga2tgobvha',
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
      requestid: '30543618',
      status: 'failed',
      created: 2022-06-01T20:57:53.986Z,
      pin: {
        cid: 'baeaaadbwgywdqnrzguztcmrvgq',
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
      requestid: '30543617',
      status: 'failed',
      created: 2022-06-01T20:57:52.987Z,
      pin: {
        cid: 'baeaaadbwgywdqnrzga4tiojvgi',
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
      requestid: '30543616',
      status: 'failed',
      created: 2022-06-01T20:57:52.003Z,
      pin: {
        cid: 'baeaaadbwgywdqnrygmzdambugy',
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
      requestid: '30543613',
      status: 'failed',
      created: 2022-06-01T20:57:50.962Z,
      pin: {
        cid: 'baeaaadbwgywdqnrxgu3dknjugi',
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
      requestid: '30543608',
      status: 'failed',
      created: 2022-06-01T20:57:49.972Z,
      pin: {
        cid: 'baeaaadbwgywdqnrxga3tgojtha',
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
      requestid: '30543607',
      status: 'failed',
      created: 2022-06-01T20:57:49.002Z,
      pin: {
        cid: 'baeaaadbwgywdqnrwgu3dqmrtgu',
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
      requestid: '30543605',
      status: 'failed',
      created: 2022-06-01T20:57:47.969Z,
      pin: {
        cid: 'baeaaadbwgywdqnrvha3tomrtga',
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
      requestid: '30543599',
      status: 'failed',
      created: 2022-06-01T20:57:42.767Z,
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30543598',
      status: 'failed',
      created: 2022-06-01T20:57:40.509Z,
      pin: {
        cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
      requestid: '30543593',
      status: 'failed',
      created: 2022-06-01T20:57:39.474Z,
      pin: {
        cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
      requestid: '30543582',
      status: 'failed',
      created: 2022-06-01T20:57:36.221Z,
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  "date": "Wed, 01 Jun 2022 20:57:58 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"30543622","status":"failed","created":"2022-06-01T20:57:57.976215673Z","pin":{"cid":"baeaaadbwgywdqnzrgy2dmobwha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543621","status":"failed","created":"2022-06-01T20:57:56.975033743Z","pin":{"cid":"baeaaadbwgywdqnzrge4dkojwgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543620","status":"failed","created":"2022-06-01T20:57:55.975386471Z","pin":{"cid":"baeaaadbwgywdqnzqgy3tgnbwgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543619","status":"failed","created":"2022-06-01T20:57:54.985723687Z","pin":{"cid":"baeaaadbwgywdqnzqga2tgobvha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543618","status":"failed","created":"2022-06-01T20:57:53.986180426Z","pin":{"cid":"baeaaadbwgywdqnrzguztcmrvgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543617","status":"failed","created":"2022-06-01T20:57:52.987499361Z","pin":{"cid":"baeaaadbwgywdqnrzga4tiojvgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543616","status":"failed","created":"2022-06-01T20:57:52.003975937Z","pin":{"cid":"baeaaadbwgywdqnrygmzdambugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543613","status":"failed","created":"2022-06-01T20:57:50.962457805Z","pin":{"cid":"baeaaadbwgywdqnrxgu3dknjugi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543608","status":"failed","created":"2022-06-01T20:57:49.972308011Z","pin":{"cid":"baeaaadbwgywdqnrxga3tgojtha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543607","status":"failed","created":"2022-06-01T20:57:49.002478883Z","pin":{"cid":"baeaaadbwgywdqnrwgu3dqmrtgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543605","status":"failed","created":"2022-06-01T20:57:47.969999354Z","pin":{"cid":"baeaaadbwgywdqnrvha3tomrtga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543599","status":"failed","created":"2022-06-01T20:57:42.76788077Z","pin":{"cid":"baeaaadbwgiwdgojugiytaojxgq","name":"d3b21a74-7a1f-4792-b77e-99e7181cb2b8","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543598","status":"failed","created":"2022-06-01T20:57:40.50975636Z","pin":{"cid":"baeaaadbvhewdgnztgazdinrrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543593","status":"failed","created":"2022-06-01T20:57:39.474800851Z","pin":{"cid":"baeaaadbvhawdgnjxhaztemrugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543582","status":"failed","created":"2022-06-01T20:57:36.221909086Z","pin":{"cid":"baeaaadbvguwdcnjsgaytanryha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Pagination: Retrieve the next page of pins - ✓ SUCCESS

### Expectations (3/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ The next page of pins doesn't contain any of previous pages pins (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A36.221Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-06-01T20%3A57%3A36.221Z
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
  "date": "Wed, 01 Jun 2022 20:57:59 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (30/32 successful)

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
  ✓ Count is greater than or equal to 15 (success)
  ✘ Count is greater than the number of pins returned (failure)
  ✘ Number of pins returned defaults to 10 (failure)
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
  count: 4,
  results: [
    {
      requestid: '30543599',
      status: 'failed',
      created: '2022-06-01T20:57:42.76788077Z',
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30543598',
      status: 'failed',
      created: '2022-06-01T20:57:40.50975636Z',
      pin: {
        cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
      requestid: '30543593',
      status: 'failed',
      created: '2022-06-01T20:57:39.474800851Z',
      pin: {
        cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
      requestid: '30543582',
      status: 'failed',
      created: '2022-06-01T20:57:36.221909086Z',
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  count: 4,
  results: Set(4) {
    {
      requestid: '30543599',
      status: 'failed',
      created: 2022-06-01T20:57:42.767Z,
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30543598',
      status: 'failed',
      created: 2022-06-01T20:57:40.509Z,
      pin: {
        cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
      requestid: '30543593',
      status: 'failed',
      created: 2022-06-01T20:57:39.474Z,
      pin: {
        cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
      requestid: '30543582',
      status: 'failed',
      created: 2022-06-01T20:57:36.221Z,
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  "content-length": "1178",
  "content-type": "application/json; charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:46 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":4,"results":[{"requestid":"30543599","status":"failed","created":"2022-06-01T20:57:42.76788077Z","pin":{"cid":"baeaaadbwgiwdgojugiytaojxgq","name":"d3b21a74-7a1f-4792-b77e-99e7181cb2b8","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543598","status":"failed","created":"2022-06-01T20:57:40.50975636Z","pin":{"cid":"baeaaadbvhewdgnztgazdinrrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543593","status":"failed","created":"2022-06-01T20:57:39.474800851Z","pin":{"cid":"baeaaadbvhawdgnjxhaztemrugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543582","status":"failed","created":"2022-06-01T20:57:36.221909086Z","pin":{"cid":"baeaaadbvguwdcnjsgaytanryha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```
## Can delete pin with requestid '30543622' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543622

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543622
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
  "date": "Wed, 01 Jun 2022 20:58:01 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543621' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543621

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543621
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
  "date": "Wed, 01 Jun 2022 20:58:02 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543620' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543620

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543620
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
  "date": "Wed, 01 Jun 2022 20:58:03 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543619' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543619

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543619
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
  "date": "Wed, 01 Jun 2022 20:58:04 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543618' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543618

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543618
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
  "date": "Wed, 01 Jun 2022 20:58:05 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543617' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543617

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543617
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
  "date": "Wed, 01 Jun 2022 20:58:06 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543616' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543616

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543616
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
  "date": "Wed, 01 Jun 2022 20:58:07 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543613' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543613

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543613
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
  "date": "Wed, 01 Jun 2022 20:58:08 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543608' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543608

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543608
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
  "date": "Wed, 01 Jun 2022 20:58:09 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543607' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543607

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543607
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
  "date": "Wed, 01 Jun 2022 20:58:10 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543605' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543605

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543605
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
  "date": "Wed, 01 Jun 2022 20:58:11 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543599' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543599

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543599
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
  "date": "Wed, 01 Jun 2022 20:58:12 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543598' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543598

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543598
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
  "date": "Wed, 01 Jun 2022 20:58:13 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543593' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543593

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543593
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
  "date": "Wed, 01 Jun 2022 20:58:14 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json

```
## Can delete pin with requestid '30543582' - ✘ FAILED

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

#### Request - DELETE: https://api.estuary.tech/pinning/pins/30543582

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://api.estuary.tech/pinning/pins/30543582
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
  "date": "Wed, 01 Jun 2022 20:58:15 GMT",
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
  "date": "Wed, 01 Jun 2022 20:58:16 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "vary": "Origin"
}
```
##### Body
```json
{"count":0,"results":[]}

```
## Can delete all pins - ✘ FAILED

### Expectations (16/31 successful)

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
  count: 15,
  results: [
    {
      requestid: '30543622',
      status: 'failed',
      created: '2022-06-01T20:57:57.976215673Z',
      pin: {
        cid: 'baeaaadbwgywdqnzrgy2dmobwha',
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
      requestid: '30543621',
      status: 'failed',
      created: '2022-06-01T20:57:56.975033743Z',
      pin: {
        cid: 'baeaaadbwgywdqnzrge4dkojwgu',
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
      requestid: '30543620',
      status: 'failed',
      created: '2022-06-01T20:57:55.975386471Z',
      pin: {
        cid: 'baeaaadbwgywdqnzqgy3tgnbwgi',
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
      requestid: '30543619',
      status: 'failed',
      created: '2022-06-01T20:57:54.985723687Z',
      pin: {
        cid: 'baeaaadbwgywdqnzqga2tgobvha',
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
      requestid: '30543618',
      status: 'failed',
      created: '2022-06-01T20:57:53.986180426Z',
      pin: {
        cid: 'baeaaadbwgywdqnrzguztcmrvgq',
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
      requestid: '30543617',
      status: 'failed',
      created: '2022-06-01T20:57:52.987499361Z',
      pin: {
        cid: 'baeaaadbwgywdqnrzga4tiojvgi',
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
      requestid: '30543616',
      status: 'failed',
      created: '2022-06-01T20:57:52.003975937Z',
      pin: {
        cid: 'baeaaadbwgywdqnrygmzdambugy',
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
      requestid: '30543613',
      status: 'failed',
      created: '2022-06-01T20:57:50.962457805Z',
      pin: {
        cid: 'baeaaadbwgywdqnrxgu3dknjugi',
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
      requestid: '30543608',
      status: 'failed',
      created: '2022-06-01T20:57:49.972308011Z',
      pin: {
        cid: 'baeaaadbwgywdqnrxga3tgojtha',
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
      requestid: '30543607',
      status: 'failed',
      created: '2022-06-01T20:57:49.002478883Z',
      pin: {
        cid: 'baeaaadbwgywdqnrwgu3dqmrtgu',
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
      requestid: '30543605',
      status: 'failed',
      created: '2022-06-01T20:57:47.969999354Z',
      pin: {
        cid: 'baeaaadbwgywdqnrvha3tomrtga',
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
      requestid: '30543599',
      status: 'failed',
      created: '2022-06-01T20:57:42.76788077Z',
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
        origins: null,
        meta: null
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: null
    },
    {
      requestid: '30543598',
      status: 'failed',
      created: '2022-06-01T20:57:40.50975636Z',
      pin: {
        cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
      requestid: '30543593',
      status: 'failed',
      created: '2022-06-01T20:57:39.474800851Z',
      pin: {
        cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
      requestid: '30543582',
      status: 'failed',
      created: '2022-06-01T20:57:36.221909086Z',
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  count: 15,
  results: Set(15) {
    {
      requestid: '30543622',
      status: 'failed',
      created: 2022-06-01T20:57:57.976Z,
      pin: {
        cid: 'baeaaadbwgywdqnzrgy2dmobwha',
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
      requestid: '30543621',
      status: 'failed',
      created: 2022-06-01T20:57:56.975Z,
      pin: {
        cid: 'baeaaadbwgywdqnzrge4dkojwgu',
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
      requestid: '30543620',
      status: 'failed',
      created: 2022-06-01T20:57:55.975Z,
      pin: {
        cid: 'baeaaadbwgywdqnzqgy3tgnbwgi',
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
      requestid: '30543619',
      status: 'failed',
      created: 2022-06-01T20:57:54.985Z,
      pin: {
        cid: 'baeaaadbwgywdqnzqga2tgobvha',
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
      requestid: '30543618',
      status: 'failed',
      created: 2022-06-01T20:57:53.986Z,
      pin: {
        cid: 'baeaaadbwgywdqnrzguztcmrvgq',
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
      requestid: '30543617',
      status: 'failed',
      created: 2022-06-01T20:57:52.987Z,
      pin: {
        cid: 'baeaaadbwgywdqnrzga4tiojvgi',
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
      requestid: '30543616',
      status: 'failed',
      created: 2022-06-01T20:57:52.003Z,
      pin: {
        cid: 'baeaaadbwgywdqnrygmzdambugy',
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
      requestid: '30543613',
      status: 'failed',
      created: 2022-06-01T20:57:50.962Z,
      pin: {
        cid: 'baeaaadbwgywdqnrxgu3dknjugi',
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
      requestid: '30543608',
      status: 'failed',
      created: 2022-06-01T20:57:49.972Z,
      pin: {
        cid: 'baeaaadbwgywdqnrxga3tgojtha',
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
      requestid: '30543607',
      status: 'failed',
      created: 2022-06-01T20:57:49.002Z,
      pin: {
        cid: 'baeaaadbwgywdqnrwgu3dqmrtgu',
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
      requestid: '30543605',
      status: 'failed',
      created: 2022-06-01T20:57:47.969Z,
      pin: {
        cid: 'baeaaadbwgywdqnrvha3tomrtga',
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
      requestid: '30543599',
      status: 'failed',
      created: 2022-06-01T20:57:42.767Z,
      pin: {
        cid: 'baeaaadbwgiwdgojugiytaojxgq',
        name: 'd3b21a74-7a1f-4792-b77e-99e7181cb2b8',
        origins: undefined,
        meta: undefined
      },
      delegates: [
        '/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup'
      ],
      info: undefined
    },
    {
      requestid: '30543598',
      status: 'failed',
      created: 2022-06-01T20:57:40.509Z,
      pin: {
        cid: 'baeaaadbvhewdgnztgazdinrrgi',
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
      requestid: '30543593',
      status: 'failed',
      created: 2022-06-01T20:57:39.474Z,
      pin: {
        cid: 'baeaaadbvhawdgnjxhaztemrugy',
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
      requestid: '30543582',
      status: 'failed',
      created: 2022-06-01T20:57:36.221Z,
      pin: {
        cid: 'baeaaadbvguwdcnjsgaytanryha',
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
  "date": "Wed, 01 Jun 2022 20:58:00 GMT",
  "server": "nginx/1.18.0 (Ubuntu)",
  "transfer-encoding": "chunked",
  "vary": "Origin"
}
```
##### Body
```json
{"count":15,"results":[{"requestid":"30543622","status":"failed","created":"2022-06-01T20:57:57.976215673Z","pin":{"cid":"baeaaadbwgywdqnzrgy2dmobwha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543621","status":"failed","created":"2022-06-01T20:57:56.975033743Z","pin":{"cid":"baeaaadbwgywdqnzrge4dkojwgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543620","status":"failed","created":"2022-06-01T20:57:55.975386471Z","pin":{"cid":"baeaaadbwgywdqnzqgy3tgnbwgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543619","status":"failed","created":"2022-06-01T20:57:54.985723687Z","pin":{"cid":"baeaaadbwgywdqnzqga2tgobvha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543618","status":"failed","created":"2022-06-01T20:57:53.986180426Z","pin":{"cid":"baeaaadbwgywdqnrzguztcmrvgq","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543617","status":"failed","created":"2022-06-01T20:57:52.987499361Z","pin":{"cid":"baeaaadbwgywdqnrzga4tiojvgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543616","status":"failed","created":"2022-06-01T20:57:52.003975937Z","pin":{"cid":"baeaaadbwgywdqnrygmzdambugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543613","status":"failed","created":"2022-06-01T20:57:50.962457805Z","pin":{"cid":"baeaaadbwgywdqnrxgu3dknjugi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543608","status":"failed","created":"2022-06-01T20:57:49.972308011Z","pin":{"cid":"baeaaadbwgywdqnrxga3tgojtha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543607","status":"failed","created":"2022-06-01T20:57:49.002478883Z","pin":{"cid":"baeaaadbwgywdqnrwgu3dqmrtgu","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543605","status":"failed","created":"2022-06-01T20:57:47.969999354Z","pin":{"cid":"baeaaadbwgywdqnrvha3tomrtga","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543599","status":"failed","created":"2022-06-01T20:57:42.76788077Z","pin":{"cid":"baeaaadbwgiwdgojugiytaojxgq","name":"d3b21a74-7a1f-4792-b77e-99e7181cb2b8","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543598","status":"failed","created":"2022-06-01T20:57:40.50975636Z","pin":{"cid":"baeaaadbvhewdgnztgazdinrrgi","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543593","status":"failed","created":"2022-06-01T20:57:39.474800851Z","pin":{"cid":"baeaaadbvhawdgnjxhaztemrugy","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null},{"requestid":"30543582","status":"failed","created":"2022-06-01T20:57:36.221909086Z","pin":{"cid":"baeaaadbvguwdcnjsgaytanryha","name":"","origins":null,"meta":null},"delegates":["/ip4/3.134.223.177/tcp/6745/p2p/12D3KooWN8vAoGd6eurUSidcpLYguQiGZwt4eVgDvbgaS7kiGTup"],"info":null}]}

```

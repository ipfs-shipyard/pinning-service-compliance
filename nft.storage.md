
# https://nft.storage/api compliance:

## Summary (2/9 successful)

  ✘ Request with no authentication token
  ✘ Request with invalid token
  ✘ Pins post of CID 'baeaaadbvg4wdinztgq4tqobzgu'
  ✓ Can create and then delete a new pin
  ✘ List pin objects (GET /pins) in all states
  ✓ Can create and replace a pin's CID
  ✘ Can create a pin with name='6a64b93c-dcfe-4135-aab9-7735a7a5d50c'
  ✘ Pagination: Get all pins, create new pins (optional), get first and second pages
  ✘ Can delete all pins

## Request with no authentication token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)
  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed


### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```
{
  ok: false,
  error: {
    code: 'EXPECTED_BEARER_STRING',
    message: 'API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adcc82cf02883-DFW",
  "connection": "close",
  "content-length": "179",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:35 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"ok":false,"error":{"code":"EXPECTED_BEARER_STRING","message":"API Key is missing, make sure the `Authorization` header has a value in the following format `Bearer {api key}`."}}
```
## Request with invalid token - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response object matches api spec schema (failure)
  ✘ Returns a 403 (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures

* "reason" is required

* "code" is not allowed

* "message" is not allowed

* "ok" is not allowed


### Details

#### Request - GET: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins
```
{
  ok: false,
  error: {
    code: 'ERROR_MALFORMED_TOKEN',
    message: 'API Key is malformed or failed to parse.'
  }
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Unauthorized (401)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adccd4dde2f49-DFW",
  "connection": "close",
  "content-length": "106",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:36 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"ok":false,"error":{"code":"ERROR_MALFORMED_TOKEN","message":"API Key is malformed or failed to parse."}}
```
## Pins post of CID 'baeaaadbvg4wdinztgq4tqobzgu' - ✘ FAILED

### Expectations (1/2 successful)

  ✘ Response object matches api spec schema (failure)
  ✓ Pinning status is either queued, pinning, or pinned (success)




#### Joi validation failures

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items


### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbvg4wdinztgq4tqobzgu"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
  status: 'queued',
  created: '2022-06-01T20:57:37.573+00:00',
  pin: {
    cid: 'baeaaadbvg4wdinztgq4tqobzgu',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
  status: 'queued',
  created: 2022-06-01T20:57:37.573Z,
  pin: {
    cid: 'baeaaadbvg4wdinztgq4tqobzgu',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adcd39df40c1b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:38 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbvg4wdinztgq4tqobzgu","status":"queued","created":"2022-06-01T20:57:37.573+00:00","pin":{"cid":"baeaaadbvg4wdinztgq4tqobzgu","meta":null,"name":null,"origins":null},"delegates":[]}
```
## The newly created pin can be immediately deleted - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202: The Pin was deleted successfully (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgawdenjzgu3tgmzuge

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgawdenjzgu3tgmzuge
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adcf0bd3b9edd-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can create and then delete a new pin - ✓ SUCCESS

### Expectations (4/4 successful)

  ✓ Result is not null (success)
  ✓ Response code is 200 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202: The Pin was deleted successfully (success)


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

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgawdenjzgu3tgmzuge"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbwgawdenjzgu3tgmzuge',
  status: 'queued',
  created: '2022-06-01T20:57:39.8+00:00',
  pin: {
    cid: 'baeaaadbwgawdenjzgu3tgmzuge',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbwgawdenjzgu3tgmzuge',
  status: 'queued',
  created: 2022-06-01T20:57:39.800Z,
  pin: {
    cid: 'baeaaadbwgawdenjzgu3tgmzuge',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adce1fb5793f7-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:41 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbwgawdenjzgu3tgmzuge","status":"queued","created":"2022-06-01T20:57:39.8+00:00","pin":{"cid":"baeaaadbwgawdenjzgu3tgmzuge","meta":null,"name":null,"origins":null},"delegates":[]}
```
## List pin objects (GET /pins) in all states - ✘ FAILED

### Expectations (2/3 successful)

  ✘ Response object matches api spec schema (failure)
  ✓ Response is ok (success)
  ✓ Response code is 200 (success)




#### Joi validation failures

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items

* "name" must be a string

* "origins" must be an array

* "meta" must be an object

* "delegates" must contain at least 1 items


### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: '2022-06-01T20:57:37.573+00:00',
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: '2022-05-18T21:31:42.743+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: '2022-05-18T21:31:39.903+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: '2022-05-18T21:23:51.114+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
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
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: 2022-06-01T20:57:37.573Z,
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: 2022-05-18T21:31:42.743Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: 2022-05-18T21:31:39.903Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: 2022-05-18T21:23:51.114Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adcf5cf1f2f49-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:43 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadbvg4wdinztgq4tqobzgu","status":"queued","created":"2022-06-01T20:57:37.573+00:00","pin":{"cid":"baeaaadbvg4wdinztgq4tqobzgu","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2tamjwgu3q","status":"failed","created":"2022-05-18T21:31:42.743+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2tamjwgu3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsojrg43a","status":"failed","created":"2022-05-18T21:31:39.903+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsojrg43a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydgmbwgiza","status":"failed","created":"2022-05-18T21:23:51.114+00:00","pin":{"cid":"baeaaadjrgy2teojqheydgmbwgiza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydeobuha4a","status":"failed","created":"2022-05-18T21:23:49.32+00:00","pin":{"cid":"baeaaadjrgy2teojqheydeobuha4a","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Get original pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbwgqwdkojwgq2tomrygi

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgqwdkojwgq2tomrygi
```
{ error: { reason: 'NOT_FOUND', details: 'pin not found' } }
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Not Found (404)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add1c4e079edd-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"error":{"reason":"NOT_FOUND","details":"pin not found"}}
```
## Get new pin via requestid - ✓ SUCCESS

### Expectations (1/1 successful)

  ✓ Response code is 200: New Pin's requestid can be found (success)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins/baeaaadbwgywdinjzgq3domjuge

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgywdinjzgq3domjuge
```
{
  requestid: 'baeaaadbwgywdinjzgq3domjuge',
  status: 'queued',
  created: '2022-06-01T20:57:46.963+00:00',
  pin: {
    cid: 'baeaaadbwgywdinjzgq3domjuge',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbwgywdinjzgq3domjuge',
  status: 'queued',
  created: 2022-06-01T20:57:46.963Z,
  pin: {
    cid: 'baeaaadbwgywdinjzgq3domjuge',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add22784baa27-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:50 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbwgywdinjzgq3domjuge","status":"queued","created":"2022-06-01T20:57:46.963+00:00","pin":{"cid":"baeaaadbwgywdinjzgq3domjuge","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Pin's with requestid 'baeaaadbwgqwdkojwgq2tomrygi' can have cid 'baeaaadbwgqwdkojwgq2tomrygi' replaced with 'baeaaadbwgywdinjzgq3domjuge' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response code is 404: Original Pin's requestid cannot be found (success)
  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins/baeaaadbwgqwdkojwgq2tomrygi

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgywdinjzgq3domjuge"}
```
#### Response data from https://nft.storage/api/pins/baeaaadbwgqwdkojwgq2tomrygi
```
{
  requestid: 'baeaaadbwgywdinjzgq3domjuge',
  status: 'queued',
  created: '2022-06-01T20:57:46.963+00:00',
  pin: {
    cid: 'baeaaadbwgywdinjzgq3domjuge',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbwgywdinjzgq3domjuge',
  status: 'queued',
  created: 2022-06-01T20:57:46.963Z,
  pin: {
    cid: 'baeaaadbwgywdinjzgq3domjuge',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add090b3d0c1b-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:48 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbwgywdinjzgq3domjuge","status":"queued","created":"2022-06-01T20:57:46.963+00:00","pin":{"cid":"baeaaadbwgywdinjzgq3domjuge","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create and replace a pin's CID - ✓ SUCCESS

### Expectations (7/7 successful)

  ✓ Pin exists (success)
  ✓ Could obtain requestid from new pin (baeaaadbwgqwdkojwgq2tomrygi) (success)
  ✓ Response is ok (success)
  ✓ Replaced pin has the new & expected CID (success)
  ✓ Replaced pin has a different requestid (success)
  ✓ Response code is 404: Original Pin's requestid cannot be found (success)
  ✓ Response code is 200: New Pin's requestid can be found (success)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbwgqwdkojwgq2tomrygi"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbwgqwdkojwgq2tomrygi',
  status: 'queued',
  created: '2022-06-01T20:57:43.707+00:00',
  pin: {
    cid: 'baeaaadbwgqwdkojwgq2tomrygi',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbwgqwdkojwgq2tomrygi',
  status: 'queued',
  created: 2022-06-01T20:57:43.707Z,
  pin: {
    cid: 'baeaaadbwgqwdkojwgq2tomrygi',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adcfd1f9daa46-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:45 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbwgqwdkojwgq2tomrygi","status":"queued","created":"2022-06-01T20:57:43.707+00:00","pin":{"cid":"baeaaadbwgqwdkojwgq2tomrygi","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can retrieve pin with name '6a64b93c-dcfe-4135-aab9-7735a7a5d50c' via the 'exact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=6a64b93c-dcfe-4135-aab9-7735a7a5d50c&match=exact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=6a64b93c-dcfe-4135-aab9-7735a7a5d50c&match=exact
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add34cbc4aa21-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can retrieve pin with name '6A64B93C-DCFE-4135-AAB9-7735A7A5D50C' via the 'iexact' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=6A64B93C-DCFE-4135-AAB9-7735A7A5D50C&match=iexact

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=6A64B93C-DCFE-4135-AAB9-7735A7A5D50C&match=iexact
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add3869079ea1-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can retrieve pin with name 'dcfe-4135-aab9-773' via the 'partial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=dcfe-4135-aab9-773&match=partial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=dcfe-4135-aab9-773&match=partial
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add3dba149eb9-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:53 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can retrieve pin with name 'DCFE-4135-AAB9-773' via the 'ipartial' TextMatchingStrategy - ✘ FAILED

### Expectations (0/2 successful)

  ✘ Response is ok (failure)
  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?name=DCFE-4135-AAB9-773&match=ipartial

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?name=DCFE-4135-AAB9-773&match=ipartial
```
{
  reason: 'VALIDATION_ERROR',
  details: [
    {
      instanceLocation: '#',
      keyword: 'required',
      keywordLocation: '#/required',
      error: 'Instance does not have required property "status".'
    }
  ]
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
null
```
#### Response - Bad Request (400)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add441bf6aa13-DFW",
  "connection": "close",
  "content-length": "181",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:55 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"reason":"VALIDATION_ERROR","details":[{"instanceLocation":"#","keyword":"required","keywordLocation":"#/required","error":"Instance does not have required property \"status\"."}]}
```
## Can create a pin with name='6a64b93c-dcfe-4135-aab9-7735a7a5d50c' - ✘ FAILED

### Expectations (3/11 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✓ Name matches name provided during creation (success)
  ✘ Response is ok (failure)
  ✘ Result is not null (failure)
  ✘ Response is ok (failure)
  ✘ Result is not null (failure)
  ✘ Response is ok (failure)
  ✘ Result is not null (failure)
  ✘ Response is ok (failure)
  ✘ Result is not null (failure)


* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)
* Error - [object Response]
  * Error: [object Response]
    at file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/src/ApiCall.ts:118:44
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async run (file:///home/runner/work/pinning-service-compliance/pinning-service-compliance/node_modules/p-queue/dist/index.js:109:36)

#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbxgewdsmztgm2tinzvga","name":"6a64b93c-dcfe-4135-aab9-7735a7a5d50c"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxgewdsmztgm2tinzvga',
  status: 'queued',
  created: '2022-06-01T20:57:51.166+00:00',
  pin: {
    cid: 'baeaaadbxgewdsmztgm2tinzvga',
    meta: null,
    name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbxgewdsmztgm2tinzvga',
  status: 'queued',
  created: 2022-06-01T20:57:51.166Z,
  pin: {
    cid: 'baeaaadbxgewdsmztgm2tinzvga',
    name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add2b29169ec2-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:52 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbxgewdsmztgm2tinzvga","status":"queued","created":"2022-06-01T20:57:51.166+00:00","pin":{"cid":"baeaaadbxgewdsmztgm2tinzvga","meta":null,"name":"6a64b93c-dcfe-4135-aab9-7735a7a5d50c","origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxg4wdsobwgmytamjsgy' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbxg4wdsobwgmytamjsgy"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxg4wdsobwgmytamjsgy',
  status: 'queued',
  created: '2022-06-01T20:57:57.225+00:00',
  pin: {
    cid: 'baeaaadbxg4wdsobwgmytamjsgy',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbxg4wdsobwgmytamjsgy',
  status: 'queued',
  created: 2022-06-01T20:57:57.225Z,
  pin: {
    cid: 'baeaaadbxg4wdsobwgmytamjsgy',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add50ec510e62-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:58 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbxg4wdsobwgmytamjsgy","status":"queued","created":"2022-06-01T20:57:57.225+00:00","pin":{"cid":"baeaaadbxg4wdsobwgmytamjsgy","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxg4wdsobxga2tanjtgi' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbxg4wdsobxga2tanjtgi"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxg4wdsobxga2tanjtgi',
  status: 'queued',
  created: '2022-06-01T20:57:58.828+00:00',
  pin: {
    cid: 'baeaaadbxg4wdsobxga2tanjtgi',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbxg4wdsobxga2tanjtgi',
  status: 'queued',
  created: 2022-06-01T20:57:58.828Z,
  pin: {
    cid: 'baeaaadbxg4wdsobxga2tanjtgi',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add5b68df2f91-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:59 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbxg4wdsobxga2tanjtgi","status":"queued","created":"2022-06-01T20:57:58.828+00:00","pin":{"cid":"baeaaadbxg4wdsobxga2tanjtgi","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxg4wdsobxg42donbtha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbxg4wdsobxg42donbtha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxg4wdsobxg42donbtha',
  status: 'queued',
  created: '2022-06-01T20:58:00.529+00:00',
  pin: {
    cid: 'baeaaadbxg4wdsobxg42donbtha',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbxg4wdsobxg42donbtha',
  status: 'queued',
  created: 2022-06-01T20:58:00.529Z,
  pin: {
    cid: 'baeaaadbxg4wdsobxg42donbtha',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add65ec150efa-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:01 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbxg4wdsobxg42donbtha","status":"queued","created":"2022-06-01T20:58:00.529+00:00","pin":{"cid":"baeaaadbxg4wdsobxg42donbtha","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxg4wdsobzguytqobvgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbxg4wdsobzguytqobvgq"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxg4wdsobzguytqobvgq',
  status: 'queued',
  created: '2022-06-01T20:58:01.971+00:00',
  pin: {
    cid: 'baeaaadbxg4wdsobzguytqobvgq',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbxg4wdsobzguytqobvgq',
  status: 'queued',
  created: 2022-06-01T20:58:01.971Z,
  pin: {
    cid: 'baeaaadbxg4wdsobzguytqobvgq',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add6f8edf9ed1-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:02 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbxg4wdsobzguytqobvgq","status":"queued","created":"2022-06-01T20:58:01.971+00:00","pin":{"cid":"baeaaadbxg4wdsobzguytqobvgq","meta":null,"name":null,"origins":null},"delegates":[]}
```
## Can create new pin for testing pagination cid='baeaaadbxg4wdsojqga3dgnjvha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)




#### Joi validation failures
No failures

### Details

#### Request - POST: https://nft.storage/api/pins

##### Headers
```json
{
  "authorization": "Bearer REDACTED",
  "content-type": "application/json"
}
```
##### Body
```json
{"cid":"baeaaadbxg4wdsojqga3dgnjvha"}
```
#### Response data from https://nft.storage/api/pins
```
{
  requestid: 'baeaaadbxg4wdsojqga3dgnjvha',
  status: 'queued',
  created: '2022-06-01T20:58:03.352+00:00',
  pin: {
    cid: 'baeaaadbxg4wdsojqga3dgnjvha',
    meta: null,
    name: null,
    origins: null
  },
  delegates: []
}
```
#### Response data after being parsed by RemotePinningServiceClient
```
{
  requestid: 'baeaaadbxg4wdsojqga3dgnjvha',
  status: 'queued',
  created: 2022-06-01T20:58:03.352Z,
  pin: {
    cid: 'baeaaadbxg4wdsojqga3dgnjvha',
    name: undefined,
    origins: undefined,
    meta: undefined
  },
  delegates: [],
  info: undefined
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add787b1b0e42-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:04 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"requestid":"baeaaadbxg4wdsojqga3dgnjvha","status":"queued","created":"2022-06-01T20:58:03.352+00:00","pin":{"cid":"baeaaadbxg4wdsojqga3dgnjvha","meta":null,"name":null,"origins":null},"delegates":[]}
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

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbxg4wdsojqga3dgnjvha',
      status: 'queued',
      created: '2022-06-01T20:58:03.352+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsojqga3dgnjvha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobzguytqobvgq',
      status: 'queued',
      created: '2022-06-01T20:58:01.971+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobzguytqobvgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobxg42donbtha',
      status: 'queued',
      created: '2022-06-01T20:58:00.529+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobxg42donbtha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobxga2tanjtgi',
      status: 'queued',
      created: '2022-06-01T20:57:58.828+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobxga2tanjtgi',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobwgmytamjsgy',
      status: 'queued',
      created: '2022-06-01T20:57:57.225+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobwgmytamjsgy',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgewdsmztgm2tinzvga',
      status: 'queued',
      created: '2022-06-01T20:57:51.166+00:00',
      pin: {
        cid: 'baeaaadbxgewdsmztgm2tinzvga',
        meta: null,
        name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwgywdinjzgq3domjuge',
      status: 'queued',
      created: '2022-06-01T20:57:46.963+00:00',
      pin: {
        cid: 'baeaaadbwgywdinjzgq3domjuge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: '2022-06-01T20:57:37.573+00:00',
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: '2022-05-18T21:31:42.743+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: '2022-05-18T21:31:39.903+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
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
      requestid: 'baeaaadbxg4wdsojqga3dgnjvha',
      status: 'queued',
      created: 2022-06-01T20:58:03.352Z,
      pin: {
        cid: 'baeaaadbxg4wdsojqga3dgnjvha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobzguytqobvgq',
      status: 'queued',
      created: 2022-06-01T20:58:01.971Z,
      pin: {
        cid: 'baeaaadbxg4wdsobzguytqobvgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobxg42donbtha',
      status: 'queued',
      created: 2022-06-01T20:58:00.529Z,
      pin: {
        cid: 'baeaaadbxg4wdsobxg42donbtha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobxga2tanjtgi',
      status: 'queued',
      created: 2022-06-01T20:57:58.828Z,
      pin: {
        cid: 'baeaaadbxg4wdsobxga2tanjtgi',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobwgmytamjsgy',
      status: 'queued',
      created: 2022-06-01T20:57:57.225Z,
      pin: {
        cid: 'baeaaadbxg4wdsobwgmytamjsgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgewdsmztgm2tinzvga',
      status: 'queued',
      created: 2022-06-01T20:57:51.166Z,
      pin: {
        cid: 'baeaaadbxgewdsmztgm2tinzvga',
        name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwgywdinjzgq3domjuge',
      status: 'queued',
      created: 2022-06-01T20:57:46.963Z,
      pin: {
        cid: 'baeaaadbwgywdinjzgq3domjuge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: 2022-06-01T20:57:37.573Z,
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: 2022-05-18T21:31:42.743Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: 2022-05-18T21:31:39.903Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add82fd7caa70-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:05 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadbxg4wdsojqga3dgnjvha","status":"queued","created":"2022-06-01T20:58:03.352+00:00","pin":{"cid":"baeaaadbxg4wdsojqga3dgnjvha","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobzguytqobvgq","status":"queued","created":"2022-06-01T20:58:01.971+00:00","pin":{"cid":"baeaaadbxg4wdsobzguytqobvgq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobxg42donbtha","status":"queued","created":"2022-06-01T20:58:00.529+00:00","pin":{"cid":"baeaaadbxg4wdsobxg42donbtha","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobxga2tanjtgi","status":"queued","created":"2022-06-01T20:57:58.828+00:00","pin":{"cid":"baeaaadbxg4wdsobxga2tanjtgi","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobwgmytamjsgy","status":"queued","created":"2022-06-01T20:57:57.225+00:00","pin":{"cid":"baeaaadbxg4wdsobwgmytamjsgy","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxgewdsmztgm2tinzvga","status":"queued","created":"2022-06-01T20:57:51.166+00:00","pin":{"cid":"baeaaadbxgewdsmztgm2tinzvga","meta":null,"name":"6a64b93c-dcfe-4135-aab9-7735a7a5d50c","origins":null},"delegates":[]},{"requestid":"baeaaadbwgywdinjzgq3domjuge","status":"queued","created":"2022-06-01T20:57:46.963+00:00","pin":{"cid":"baeaaadbwgywdinjzgq3domjuge","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbvg4wdinztgq4tqobzgu","status":"queued","created":"2022-06-01T20:57:37.573+00:00","pin":{"cid":"baeaaadbvg4wdinztgq4tqobzgu","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2tamjwgu3q","status":"failed","created":"2022-05-18T21:31:42.743+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2tamjwgu3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsojrg43a","status":"failed","created":"2022-05-18T21:31:39.903+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsojrg43a","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Pagination: Retrieve the next page of pins - ✘ FAILED

### Expectations (2/3 successful)

  ✓ Response is ok (success)
  ✓ Result is not null (success)
  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A31%3A39.903Z

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued&before=2022-05-18T21%3A31%3A39.903Z
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: '2022-05-18T21:31:39.903+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: '2022-05-18T21:23:51.114+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: '2022-05-18T21:23:45.071+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
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
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: 2022-05-18T21:31:39.903Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: 2022-05-18T21:23:51.114Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: 2022-05-18T21:23:45.071Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add8ac82c2f91-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:07 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjrgy2teojqhe2dsojrg43a","status":"failed","created":"2022-05-18T21:31:39.903+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsojrg43a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydgmbwgiza","status":"failed","created":"2022-05-18T21:23:51.114+00:00","pin":{"cid":"baeaaadjrgy2teojqheydgmbwgiza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydeobuha4a","status":"failed","created":"2022-05-18T21:23:49.32+00:00","pin":{"cid":"baeaaadjrgy2teojqheydeobuha4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenrwgi2q","status":"failed","created":"2022-05-18T21:23:47.372+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenrwgi2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenbuha3q","status":"failed","created":"2022-05-18T21:23:45.071+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenbuha3q","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Pagination: Get all pins, create new pins (optional), get first and second pages - ✘ FAILED

### Expectations (17/20 successful)

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
  ✘ The next page of pins doesn't contain any of previous pages pins (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbxgewdsmztgm2tinzvga',
      status: 'queued',
      created: '2022-06-01T20:57:51.166+00:00',
      pin: {
        cid: 'baeaaadbxgewdsmztgm2tinzvga',
        meta: null,
        name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwgywdinjzgq3domjuge',
      status: 'queued',
      created: '2022-06-01T20:57:46.963+00:00',
      pin: {
        cid: 'baeaaadbwgywdinjzgq3domjuge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: '2022-06-01T20:57:37.573+00:00',
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: '2022-05-18T21:31:42.743+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: '2022-05-18T21:31:39.903+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
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
      requestid: 'baeaaadbxgewdsmztgm2tinzvga',
      status: 'queued',
      created: 2022-06-01T20:57:51.166Z,
      pin: {
        cid: 'baeaaadbxgewdsmztgm2tinzvga',
        name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwgywdinjzgq3domjuge',
      status: 'queued',
      created: 2022-06-01T20:57:46.963Z,
      pin: {
        cid: 'baeaaadbwgywdinjzgq3domjuge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: 2022-06-01T20:57:37.573Z,
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: 2022-05-18T21:31:42.743Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: 2022-05-18T21:31:39.903Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add47b8680e42-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:57:56 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadbxgewdsmztgm2tinzvga","status":"queued","created":"2022-06-01T20:57:51.166+00:00","pin":{"cid":"baeaaadbxgewdsmztgm2tinzvga","meta":null,"name":"6a64b93c-dcfe-4135-aab9-7735a7a5d50c","origins":null},"delegates":[]},{"requestid":"baeaaadbwgywdinjzgq3domjuge","status":"queued","created":"2022-06-01T20:57:46.963+00:00","pin":{"cid":"baeaaadbwgywdinjzgq3domjuge","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbvg4wdinztgq4tqobzgu","status":"queued","created":"2022-06-01T20:57:37.573+00:00","pin":{"cid":"baeaaadbvg4wdinztgq4tqobzgu","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2tamjwgu3q","status":"failed","created":"2022-05-18T21:31:42.743+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2tamjwgu3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsojrg43a","status":"failed","created":"2022-05-18T21:31:39.903+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsojrg43a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Can delete pin with requestid 'baeaaadbxg4wdsojqga3dgnjvha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxg4wdsojqga3dgnjvha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxg4wdsojqga3dgnjvha
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add9d7ebf9ed6-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:09 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxg4wdsobzguytqobvgq' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxg4wdsobzguytqobvgq

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxg4wdsobzguytqobvgq
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adda3ccf2d272-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:10 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxg4wdsobxg42donbtha' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxg4wdsobxg42donbtha

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxg4wdsobxg42donbtha
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addaa08036761-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:11 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxg4wdsobxga2tanjtgi' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxg4wdsobxga2tanjtgi

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxg4wdsobxga2tanjtgi
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addb03e219f2b-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:12 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxg4wdsobwgmytamjsgy' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxg4wdsobwgmytamjsgy

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxg4wdsobwgmytamjsgy
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addb68c2b0ed2-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:13 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbxgewdsmztgm2tinzvga' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbxgewdsmztgm2tinzvga

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbxgewdsmztgm2tinzvga
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addbcbea5aa0a-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:14 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbwgywdinjzgq3domjuge' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbwgywdinjzgq3domjuge

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbwgywdinjzgq3domjuge
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addc2fa6c9f19-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:15 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadbvg4wdinztgq4tqobzgu' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadbvg4wdinztgq4tqobzgu

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadbvg4wdinztgq4tqobzgu
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addc95a4e93da-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:16 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqhe2tamjwgu3q' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqhe2tamjwgu3q

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqhe2tamjwgu3q
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addcf7ac8a9f2-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:17 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Can delete pin with requestid 'baeaaadjrgy2teojqhe2dsojrg43a' - ✓ SUCCESS

### Expectations (2/2 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)


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

#### Request - DELETE: https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dsojrg43a

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins/baeaaadjrgy2teojqhe2dsojrg43a
```
null
```
#### Response data after being parsed by RemotePinningServiceClient
```
undefined
```
#### Response - Accepted (202)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714addd5be256701-DFW",
  "connection": "close",
  "content-length": "0",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:18 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "vary": "Accept-Encoding"
}
```
##### Body
```json

```
## Call pinsGet after deletions - ✘ FAILED

### Expectations (0/1 successful)

  ✘ Final pinsGet call returns a count of zero (failure)




#### Joi validation failures
No failures

### Details

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: '2022-05-18T21:31:38.07+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: '2022-05-18T21:31:30.339+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        meta: null,
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: '2022-05-18T21:31:24.604+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: '2022-05-18T21:31:19.662+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: '2022-05-18T21:31:15.265+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: '2022-05-18T21:23:51.114+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: '2022-05-18T21:23:49.32+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: '2022-05-18T21:23:47.372+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: '2022-05-18T21:23:45.071+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: '2022-05-18T21:23:43.329+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
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
      requestid: 'baeaaadjrgy2teojqhe2dsnzugyza',
      status: 'failed',
      created: 2022-05-18T21:31:38.070Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsnzugyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqojsha4a',
      status: 'failed',
      created: 2022-05-18T21:31:30.339Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqojsha4a',
        name: '7625cb9a-e5c0-4496-95d3-e75f5e9d5254',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dqmzygyza',
      status: 'failed',
      created: 2022-05-18T21:31:24.604Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dqmzygyza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2doobrheyq',
      status: 'failed',
      created: 2022-05-18T21:31:19.662Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2doobrheyq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2donbrgmza',
      status: 'failed',
      created: 2022-05-18T21:31:15.265Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2donbrgmza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydgmbwgiza',
      status: 'failed',
      created: 2022-05-18T21:23:51.114Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydgmbwgiza',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydeobuha4a',
      status: 'failed',
      created: 2022-05-18T21:23:49.320Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydeobuha4a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenrwgi2q',
      status: 'failed',
      created: 2022-05-18T21:23:47.372Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenrwgi2q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydenbuha3q',
      status: 'failed',
      created: 2022-05-18T21:23:45.071Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydenbuha3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqheydemrwg42a',
      status: 'failed',
      created: 2022-05-18T21:23:43.329Z,
      pin: {
        cid: 'baeaaadjrgy2teojqheydemrwg42a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714adddbfa229ead-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:20 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadjrgy2teojqhe2dsnzugyza","status":"failed","created":"2022-05-18T21:31:38.07+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsnzugyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqojsha4a","status":"failed","created":"2022-05-18T21:31:30.339+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqojsha4a","meta":null,"name":"7625cb9a-e5c0-4496-95d3-e75f5e9d5254","origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dqmzygyza","status":"failed","created":"2022-05-18T21:31:24.604+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dqmzygyza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2doobrheyq","status":"failed","created":"2022-05-18T21:31:19.662+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2doobrheyq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2donbrgmza","status":"failed","created":"2022-05-18T21:31:15.265+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2donbrgmza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydgmbwgiza","status":"failed","created":"2022-05-18T21:23:51.114+00:00","pin":{"cid":"baeaaadjrgy2teojqheydgmbwgiza","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydeobuha4a","status":"failed","created":"2022-05-18T21:23:49.32+00:00","pin":{"cid":"baeaaadjrgy2teojqheydeobuha4a","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenrwgi2q","status":"failed","created":"2022-05-18T21:23:47.372+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenrwgi2q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydenbuha3q","status":"failed","created":"2022-05-18T21:23:45.071+00:00","pin":{"cid":"baeaaadjrgy2teojqheydenbuha3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqheydemrwg42a","status":"failed","created":"2022-05-18T21:23:43.329+00:00","pin":{"cid":"baeaaadjrgy2teojqheydemrwg42a","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
## Can delete all pins - ✘ FAILED

### Expectations (20/21 successful)

  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✓ Response is ok (success)
  ✓ Response code is 202 (success)
  ✘ Final pinsGet call returns a count of zero (failure)


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

#### Request - GET: https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued

##### Headers
```json
{
  "authorization": "Bearer REDACTED"
}
```
##### Body
```json

```
#### Response data from https://nft.storage/api/pins?status=failed%2Cpinned%2Cpinning%2Cqueued
```
{
  count: 10,
  results: [
    {
      requestid: 'baeaaadbxg4wdsojqga3dgnjvha',
      status: 'queued',
      created: '2022-06-01T20:58:03.352+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsojqga3dgnjvha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobzguytqobvgq',
      status: 'queued',
      created: '2022-06-01T20:58:01.971+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobzguytqobvgq',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobxg42donbtha',
      status: 'queued',
      created: '2022-06-01T20:58:00.529+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobxg42donbtha',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobxga2tanjtgi',
      status: 'queued',
      created: '2022-06-01T20:57:58.828+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobxga2tanjtgi',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxg4wdsobwgmytamjsgy',
      status: 'queued',
      created: '2022-06-01T20:57:57.225+00:00',
      pin: {
        cid: 'baeaaadbxg4wdsobwgmytamjsgy',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbxgewdsmztgm2tinzvga',
      status: 'queued',
      created: '2022-06-01T20:57:51.166+00:00',
      pin: {
        cid: 'baeaaadbxgewdsmztgm2tinzvga',
        meta: null,
        name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbwgywdinjzgq3domjuge',
      status: 'queued',
      created: '2022-06-01T20:57:46.963+00:00',
      pin: {
        cid: 'baeaaadbwgywdinjzgq3domjuge',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: '2022-06-01T20:57:37.573+00:00',
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: '2022-05-18T21:31:42.743+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: '2022-05-18T21:31:39.903+00:00',
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        meta: null,
        name: null,
        origins: null
      },
      delegates: []
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
      requestid: 'baeaaadbxg4wdsojqga3dgnjvha',
      status: 'queued',
      created: 2022-06-01T20:58:03.352Z,
      pin: {
        cid: 'baeaaadbxg4wdsojqga3dgnjvha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobzguytqobvgq',
      status: 'queued',
      created: 2022-06-01T20:58:01.971Z,
      pin: {
        cid: 'baeaaadbxg4wdsobzguytqobvgq',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobxg42donbtha',
      status: 'queued',
      created: 2022-06-01T20:58:00.529Z,
      pin: {
        cid: 'baeaaadbxg4wdsobxg42donbtha',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobxga2tanjtgi',
      status: 'queued',
      created: 2022-06-01T20:57:58.828Z,
      pin: {
        cid: 'baeaaadbxg4wdsobxga2tanjtgi',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxg4wdsobwgmytamjsgy',
      status: 'queued',
      created: 2022-06-01T20:57:57.225Z,
      pin: {
        cid: 'baeaaadbxg4wdsobwgmytamjsgy',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbxgewdsmztgm2tinzvga',
      status: 'queued',
      created: 2022-06-01T20:57:51.166Z,
      pin: {
        cid: 'baeaaadbxgewdsmztgm2tinzvga',
        name: '6a64b93c-dcfe-4135-aab9-7735a7a5d50c',
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbwgywdinjzgq3domjuge',
      status: 'queued',
      created: 2022-06-01T20:57:46.963Z,
      pin: {
        cid: 'baeaaadbwgywdinjzgq3domjuge',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadbvg4wdinztgq4tqobzgu',
      status: 'queued',
      created: 2022-06-01T20:57:37.573Z,
      pin: {
        cid: 'baeaaadbvg4wdinztgq4tqobzgu',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
      status: 'failed',
      created: 2022-05-18T21:31:42.743Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2tamjwgu3q',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    },
    {
      requestid: 'baeaaadjrgy2teojqhe2dsojrg43a',
      status: 'failed',
      created: 2022-05-18T21:31:39.903Z,
      pin: {
        cid: 'baeaaadjrgy2teojqhe2dsojrg43a',
        name: undefined,
        origins: undefined,
        meta: undefined
      },
      delegates: [],
      info: undefined
    }
  }
}
```
#### Response - OK (200)
##### Headers
```json
{
  "access-control-allow-origin": "*",
  "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400",
  "cf-ray": "714add923caeaa58-DFW",
  "connection": "close",
  "content-encoding": "br",
  "content-type": "application/json;charset=UTF-8",
  "date": "Wed, 01 Jun 2022 20:58:08 GMT",
  "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
  "server": "cloudflare",
  "transfer-encoding": "chunked",
  "vary": "Accept-Encoding"
}
```
##### Body
```json
{"count":10,"results":[{"requestid":"baeaaadbxg4wdsojqga3dgnjvha","status":"queued","created":"2022-06-01T20:58:03.352+00:00","pin":{"cid":"baeaaadbxg4wdsojqga3dgnjvha","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobzguytqobvgq","status":"queued","created":"2022-06-01T20:58:01.971+00:00","pin":{"cid":"baeaaadbxg4wdsobzguytqobvgq","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobxg42donbtha","status":"queued","created":"2022-06-01T20:58:00.529+00:00","pin":{"cid":"baeaaadbxg4wdsobxg42donbtha","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobxga2tanjtgi","status":"queued","created":"2022-06-01T20:57:58.828+00:00","pin":{"cid":"baeaaadbxg4wdsobxga2tanjtgi","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxg4wdsobwgmytamjsgy","status":"queued","created":"2022-06-01T20:57:57.225+00:00","pin":{"cid":"baeaaadbxg4wdsobwgmytamjsgy","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbxgewdsmztgm2tinzvga","status":"queued","created":"2022-06-01T20:57:51.166+00:00","pin":{"cid":"baeaaadbxgewdsmztgm2tinzvga","meta":null,"name":"6a64b93c-dcfe-4135-aab9-7735a7a5d50c","origins":null},"delegates":[]},{"requestid":"baeaaadbwgywdinjzgq3domjuge","status":"queued","created":"2022-06-01T20:57:46.963+00:00","pin":{"cid":"baeaaadbwgywdinjzgq3domjuge","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadbvg4wdinztgq4tqobzgu","status":"queued","created":"2022-06-01T20:57:37.573+00:00","pin":{"cid":"baeaaadbvg4wdinztgq4tqobzgu","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2tamjwgu3q","status":"failed","created":"2022-05-18T21:31:42.743+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2tamjwgu3q","meta":null,"name":null,"origins":null},"delegates":[]},{"requestid":"baeaaadjrgy2teojqhe2dsojrg43a","status":"failed","created":"2022-05-18T21:31:39.903+00:00","pin":{"cid":"baeaaadjrgy2teojqhe2dsojrg43a","meta":null,"name":null,"origins":null},"delegates":[]}]}
```
